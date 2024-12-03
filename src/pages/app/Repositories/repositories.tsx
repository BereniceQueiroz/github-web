import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useLocation, useNavigate} from 'react-router-dom';

import {useRepositories} from '@/hooks/useRepositories';

import {Content} from './components/content';
import {Header} from './components/header';
import s from './repositories.module.scss';

export function Repositories() {
  const location = useLocation();
  const navigate = useNavigate();
  const {username} = location.state || {};
  const [direction, setDirection] = useState<string>('desc');
  const [page, setPage] = useState<number>(1);

  const {repositories, isLoadingRepositorie, hasError} = useRepositories({
    username,
    direction,
    page,
  });

  const handleNavigate = (fullName: string) => {
    navigate(`/repositorie-details?repo=${fullName}`);
  };

  const handleNextPage = () => setPage(prev => prev + 1);
  const handlePreviousPage = () => setPage(prev => Math.max(prev - 1, 1));

  useEffect(() => {
    setPage(1);
  }, [direction]);

  if (!username) {
    return (
      <div
        className={`container-full d-flex justify-content-center align-items-center ${s.wrapper}`}>
        <p>Usuário não fornecido. Por favor, volte para a página inicial.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet title={`Repositórios de ${username}`} />
      <div className={`container-full d-flex flex-column gap-3 ${s.wrapper}`}>
        <Header
          username={username}
          direction={direction}
          setDirection={setDirection}
        />
        <Content
          isLoading={isLoadingRepositorie}
          hasError={hasError}
          repositories={repositories}
          handleNavigate={handleNavigate}
          page={page}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </div>
    </>
  );
}
