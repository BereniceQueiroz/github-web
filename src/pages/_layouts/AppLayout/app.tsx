import {Outlet} from 'react-router-dom';

import {Header} from '@/components/Header/header';

import s from './app.module.scss';

export function AppLayout() {
  return (
    <div className={`container-fluid h-100 p-0 background ${s.background}`}>
      <Header />
      <div
        className={`container h-75 p-10 d-flex justify-content-center align-items-center`}>
        <Outlet />
      </div>
    </div>
  );
}
