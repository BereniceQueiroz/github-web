import {Link} from 'react-router-dom';

import SVGStarIcon from '@/assets/icons/star.svg?react';

import s from './card-repositorie.module.scss';
import {RepositorieProps} from './types';

export function CardRepositorie({repositories, handleClick}: RepositorieProps) {
  return (
    <div className="container d-flex flex-column gap-3">
      {repositories?.map(repo => (
        <div
          key={repo.id}
          className={s.card}
          role="button"
          aria-label={`Ver detalhes do repositório ${repo.name}`}
          onClick={() => handleClick?.(repo.full_name)}>
          <h3>{repo.name}</h3>
          <div className={s.info}>
            <SVGStarIcon />
            <p>
              {repo.stargazers_count ?? 0}
              {repo.stargazers_count === 1 ? ' estrela' : ' estrelas'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
