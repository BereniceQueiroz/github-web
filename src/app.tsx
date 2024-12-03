import {Helmet, HelmetProvider} from 'react-helmet-async';
import {RouterProvider} from 'react-router-dom';

import {QueryClientProvider} from '@tanstack/react-query';

import {queryClient} from './lib/react-query';
import {router} from './routes/routes';

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | git.users" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
