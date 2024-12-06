import {CardRepositorie} from '@/components/CardRepositorie';

import s from '../repositories.module.scss';
import {ContentProps} from '../types';
import {Pagination} from './pagination';

export function Content({
  isLoading,
  hasError,
  repositories,
  handleNavigate,
  page,
  handleNextPage,
  handlePreviousPage,
  handleGoBack,
}: ContentProps) {
  return (
    <>
      <div
        className={`container-full d-flex justify-content-center align-items-center ${s.content}`}>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && hasError && (
          <p>Erro ao carregar repositórios. Por favor, tente novamente.</p>
        )}
      </div>
      {!isLoading && !hasError && (
        <>
          <CardRepositorie
            repositories={repositories}
            handleClick={handleNavigate}
          />
          {repositories.length > 0 && (
            <>
              <Pagination
                page={page}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
              />

              <button
                onClick={() => handleGoBack()}
                className="btn btn-link text-primary"
                aria-label="Voltar para a página anterior">
                Voltar para a página anterior
              </button>
            </>
          )}
        </>
      )}
    </>
  );
}
