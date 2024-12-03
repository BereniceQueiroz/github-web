import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';

import {CardProfile} from '@/components/CardProfile';
import {Search} from '@/components/Search';
import {useDebounce} from '@/hooks/useDebounce';
import {useUser} from '@/hooks/useUser';

import s from './home.module.scss';

export function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const debouncedUsername = useDebounce(username, 500);

  const {user, isLoadingUser, hasError} = useUser({
    username: debouncedUsername,
  });

  const handleNavigate = () => {
    navigate('/repositories', {state: {username}});
  };

  return (
    <>
      <Helmet title="Home" />
      <div className={`container-full p-12 ${s.wrapper}`}>
        <Search setUsername={setUsername} />
        <div className="container h-100 p-12 d-flex justify-content-start align-items-center">
          {isLoadingUser && <p>Carregando...</p>}
          {!isLoadingUser && hasError && <p>Usuário não encontrado.</p>}
          {!isLoadingUser && user && (
            <CardProfile user={user} onClick={() => handleNavigate()} />
          )}
        </div>
      </div>
    </>
  );
}
