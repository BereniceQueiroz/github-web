import {Helmet} from 'react-helmet-async';
import {Link, useSearchParams} from 'react-router-dom';

import {CardRepositorieDetails} from '@/components/CardRepositorieDetails';
import {useRepositoryDetail} from '@/hooks/useRepositories';

import s from './repositorie-details.module.scss';

export function RepositorieDetails() {
  const [searchParams] = useSearchParams();
  const repo = searchParams.get('repo');

  const {repositoryDetail, isLoadingRepository, hasError} = useRepositoryDetail(
    {fullname: repo},
  );

  return (
    <>
      <Helmet title="Repositório" />
      <div className={`container-full d-flex flex-column gap-3 ${s.wrapper}`}>
        <div className="container d-flex flex-row gap-3 align-items-start justify-content-between sort-container">
          <h1>Repositório {repo}</h1>
        </div>

        {isLoadingRepository && <p>Carregando...</p>}
        {!isLoadingRepository && hasError && (
          <p>Erro ao carregar dados do repositório.</p>
        )}
        {!isLoadingRepository && !hasError && repositoryDetail && (
          <>
            <CardRepositorieDetails repositorie={repositoryDetail} />
            <Link to="/" className="text-primary">
              Voltar para o início
            </Link>
          </>
        )}
      </div>
    </>
  );
}
