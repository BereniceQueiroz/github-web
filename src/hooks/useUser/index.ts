import {api} from '@/lib/axios';
import {useQuery} from '@tanstack/react-query';

import {GetUserQuery, GetUsersResponse} from './types';

export function useUser({username}: GetUserQuery) {
  const {isLoading, data, isError} = useQuery<GetUsersResponse>({
    queryKey: ['userData', username],
    queryFn: async (): Promise<GetUsersResponse> => {
      const response = await api.get<GetUsersResponse>(`/users/${username}`);
      return response.data;
    },
    enabled: !!username,
    refetchOnWindowFocus: false,
  });

  return {
    user: data,
    isLoadingUser: isLoading,
    hasError: isError,
  };
}
