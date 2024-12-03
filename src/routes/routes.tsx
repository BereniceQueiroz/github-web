import {createBrowserRouter} from 'react-router-dom';

import {AppLayout} from '@/pages/_layouts/AppLayout/app';
import {NotFound} from '@/pages/404/404';
import {Home} from '@/pages/app/Home';
import {RepositorieDetails} from '@/pages/app/RepositorieDetails';
import {Repositories} from '@/pages/app/Repositories';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/repositories',
        element: <Repositories />,
      },
      {
        path: '/repositorie-details',
        element: <RepositorieDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
