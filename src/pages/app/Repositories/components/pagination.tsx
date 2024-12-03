import {PaginationProps} from '../types';

export function Pagination({
  page,
  handleNextPage,
  handlePreviousPage,
}: PaginationProps) {
  return (
    <div className="container d-flex justify-content-center align-items-center pagination-container">
      <button
        className="btn btn-primary me-2"
        onClick={handlePreviousPage}
        disabled={page === 1}>
        Página Anterior
      </button>
      <span className="px-2">Página {page}</span>
      <button className="btn btn-primary ms-2" onClick={handleNextPage}>
        Próxima Página
      </button>
    </div>
  );
}
