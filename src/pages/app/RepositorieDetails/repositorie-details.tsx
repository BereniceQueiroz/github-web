import {Helmet} from 'react-helmet-async';
import {useNavigate, useSearchParams} from 'react-router-dom';

import {CardRepositorieDetails} from '@/components/CardRepositorieDetails';
import {useRepositoryDetail} from '@/hooks/useRepositories';

import s from './repositorie-details.module.scss';

export function RepositorieDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const repo = searchParams.get('repo');

  const {repositoryDetail, isLoadingRepositoryDetail, hasError} =
    useRepositoryDetail({fullname: repo});

  return (
    <>
      <Helmet title="Repositório" />
      <div
        className={`container-full  d-flex flex-column align-items-center gap-3 ${s.wrapper}`}>
        <div className="container d-flex flex-row gap-3 align-items-start justify-content-between ">
          <h1>Repositório {repo}</h1>
        </div>

        {isLoadingRepositoryDetail && <p>Carregando...</p>}
        {!isLoadingRepositoryDetail && hasError && (
          <p>Erro ao carregar dados do repositório.</p>
        )}
        {!isLoadingRepositoryDetail && !hasError && repositoryDetail && (
          <div
            className={`${s.content} container-full d-flex flex-column gap-5 align-items-start justify-content-between sort-container`}>
            <CardRepositorieDetails repositorie={repositoryDetail} />
            <button
              onClick={() => navigate(-1)}
              className="btn btn-link text-primary"
              aria-label="Voltar para a página anterior">
              Voltar para a página anterior
            </button>
          </div>
        )}
      </div>
    </>
  );
}
