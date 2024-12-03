import SVGBuildingIcon from '@/assets/icons/building.svg?react';
import SVGGitIcon from '@/assets/icons/github.svg?react';
import SVGUsersIcon from '@/assets/icons/users.svg?react';

import {NavLink} from '../Link';
import s from './card-profile.module.scss';
import {UserProps} from './types';

export function CardProfile({user, onClick}: UserProps) {
  return (
    <div role="button" className={s.card} onClick={onClick}>
      <img src={user?.avatar_url} alt={`${user.name || 'Usuário'} avatar`} />
      <div className={`flex-col ${s.info}`}>
        <div className="container">
          <div className={s.flexRow}>
            <h4>{user.name || 'Nome não disponível'}</h4>
            {user.html_url && <NavLink link={user.html_url} label="Github" />}
          </div>
          <div>
            <h6>@{user.login || 'Login não disponível'}</h6>
            {user.bio ? <p>{user.bio}</p> : <p>Biografia não disponível.</p>}
          </div>
        </div>
        <div className={s.icons}>
          <div>
            <SVGGitIcon />
            <p>{user.login || 'Não informado'}</p>
          </div>
          <div>
            <SVGBuildingIcon />
            <p>{user.company || 'Empresa não disponível'}</p>
          </div>
          <div>
            <SVGUsersIcon />
            <p>{user.followers || 0} seguidores</p>
          </div>
          <div>
            <SVGUsersIcon />
            <p>{user.following || 0} seguindo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
