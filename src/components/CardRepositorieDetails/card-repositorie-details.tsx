import SVGStarIcon from '@/assets/icons/star.svg?react';

import s from './card-repositorie-details.module.scss';
import {RepositorieProps} from './types';

export function CardRepositorieDetails({repositorie}: RepositorieProps) {
  return (
    <div className={`${s.card}`}>
      <div
        key={repositorie.id}
        className={`cd-flex justify-content-sm-center justify-content-md-between justify-content-lg-end`}
        aria-label={`Detalhes do repositório ${repositorie.name}`}>
        <p className="mb-4">{repositorie.name}</p>
        <p className="mb-4">{repositorie.description}</p>
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
