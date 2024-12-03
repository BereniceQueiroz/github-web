import SVGArrowIcon from '@/assets/icons/arrow-up.svg?react';

import s from './link.module.scss';
import {LinkProps} from './types';

export function NavLink({label, link}: LinkProps) {
  return (
    <div className={s.container}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={s.nav}>
        {label}
      </a>
      <SVGArrowIcon />
    </div>
  );
}
