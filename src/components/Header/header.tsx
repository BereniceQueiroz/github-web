import Background from '@/assets/img/background.png';

import s from './header.module.scss';

export function Header() {
  return (
    <header className={s.header}>
      <img src={Background} alt="Imagem de background github.users" />
    </header>
  );
}
