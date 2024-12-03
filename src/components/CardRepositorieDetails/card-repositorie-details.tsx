import SVGStarIcon from '@/assets/icons/star.svg?react';

import s from './card-repositorie-details.module.scss';
import {RepositorieProps} from './types';

export function CardRepositorieDetails({repositorie}: RepositorieProps) {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center gap-3">
      <div
        key={repositorie.id}
        className={s.card}
        aria-label={`Detalhes do repositório ${repositorie.name}`}>
        <h3>{repositorie.name}</h3>
        <h4>{repositorie.description}</h4>
        <p>{repositorie.language}</p>
        <div className={s.info}>
          <SVGStarIcon />
          <p>
            {repositorie.stargazers_count ?? 0}
            {repositorie.stargazers_count === 1 ? ' estrela' : ' estrelas'}
          </p>
        </div>
      </div>
    </div>
  );
}
