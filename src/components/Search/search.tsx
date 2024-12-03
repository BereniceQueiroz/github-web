import s from './search.module.scss';

interface SearchProps {
  setUsername: (value: string) => void;
}

export function Search({setUsername}: SearchProps) {
  return (
    <div className={s.search}>
      <input
        className="form-control"
        placeholder="Buscar usuário"
        type="text"
        id="search"
        onChange={event => setUsername(event.target.value)}
      />
    </div>
  );
}
