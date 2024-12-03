import {Helmet} from 'react-helmet-async';
import {useLocation} from 'react-router-dom';

import {useRepositoryDetail} from '@/hooks/useRepositories';

import s from './repositorie-details.module.scss';

export function RepositorieDetails() {
  const location = useLocation();
  const {fullname} = location.state || {};

  const {repositoryDetail, isLoadingRepository, hasError} = useRepositoryDetail(
    {fullname},
  );

  console.log(repositoryDetail, fullname);

  return (
    <>
      <Helmet title="Repositório" />
      <div className={`container-full d-flex flex-column gap-3 ${s.wrapper}`}>
        <div className="container d-flex flex-row gap-3 align-items-start justify-content-between sort-container">
          <h1>Repositório {fullname}</h1>
        </div>

        {isLoadingRepository && <p>Carregando...</p>}
        {!isLoadingRepository && hasError && (
          <p>Erro ao carregar repositórios.</p>
        )}
        {!isLoadingRepository && !hasError && (
          <>
            {/* <CardRepositorie repositories={repositories} />
            {repositories.length > 0 && (
              <div className="container d-flex justify-content-center align-items-center pagination-container">
                <button
                  className="btn btn-primary me-2"
                  onClick={handlePreviousPage}
                  disabled={page === 1}>
                  Página Anterior
                </button>
                <span className="px-2">Página {page}</span>
                <button
                  className="btn btn-primary ms-2"
                  onClick={handleNextPage}>
                  Próxima Página
                </button>
              </div>
            )} */}
          </>
        )}
      </div>
    </>
  );
}
