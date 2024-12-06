import {useEffect, useMemo, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useLocation, useNavigate} from 'react-router-dom';

import {useRepositories} from '@/hooks/useRepositories';

import {Content} from './components/content';
import {Header} from './components/header';
import s from './repositories.module.scss';
import {Repositorie} from './types';

export function Repositories() {
  const location = useLocation();
  const navigate = useNavigate();
  const {username} = location.state || {};
  const [direction, setDirection] = useState<string>('asc');

  const [page, setPage] = useState<number>(1);

  const itemsPerPage = 5;

  const {repositories, isLoadingRepositorie, hasError} = useRepositories({
    username,
    direction,
    page,
  });

  const handleNavigate = (fullName: string) => {
    navigate(`/repositorie-details?repo=${fullName}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNextPage = () => {
    if (page < Math.ceil(repositories.length / itemsPerPage)) {
      setPage(prev => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  const sortedRepositories = useMemo(() => {
    return [...repositories].sort((a, b) => {
      if (direction === 'asc') return a.stargazers_count - b.stargazers_count;
      return b.stargazers_count - a.stargazers_count;
    });
  }, [repositories, direction]);

  const paginatedRepositories = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return sortedRepositories.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedRepositories, page]);

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
      <div
        className={`container-full mt-10 d-flex flex-column gap-3 ${s.wrapper}`}>
        <Header
          username={username}
          direction={direction}
          setDirection={setDirection}
        />
        <Content
          isLoading={isLoadingRepositorie}
          hasError={hasError}
          repositories={paginatedRepositories}
          handleNavigate={handleNavigate}
          page={page}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleGoBack={handleGoBack}
        />
      </div>
    </>
  );
}
