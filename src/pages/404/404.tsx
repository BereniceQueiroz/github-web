import {Link} from 'react-router-dom';

export function NotFound() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center gap-2 text-center">
      <h1 className="display-4 fw-bold">Página não encontrada</h1>
      <p className="text-muted">
        Voltar para o{' '}
        <Link to="/" className="text-primary">
          Início
        </Link>
      </p>
    </div>
  );
}
