import {Select} from '@/components/Select';

import s from '../repositories.module.scss';
import {HeaderProps} from '../types';

export function Header({username, direction, setDirection}: HeaderProps) {
  return (
    <div
      className={`container d-flex gap-3 align-items-start justify-content-between ${s.sortContainer}`}>
      <h1>Repositórios de {username}</h1>
      <Select
        label="Ordenar por estrelas:"
        options={[
          {value: 'asc', label: 'Ascendente'},
          {value: 'desc', label: 'Descendente'},
        ]}
        value={direction}
        onChange={setDirection}
      />
    </div>
  );
}
