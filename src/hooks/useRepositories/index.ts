import {api} from '@/lib/axios';
import {useQuery} from '@tanstack/react-query';

import {
  GeRepositoriesQuery,
  GetRepositoriesResponse,
  GetRepositoryDetailResponse,
  GetRepositoryDetailQuery,
} from './types';

export function useRepositories({
  username,
  direction,
  page,
}: GeRepositoriesQuery) {
  const {isLoading, data, isError} = useQuery<GetRepositoriesResponse>({
    queryKey: ['repositoriesData', username, direction, page],
    queryFn: async (): Promise<GetRepositoriesResponse> => {
      const response = await api.get<GetRepositoriesResponse>(
        `/users/${username}/repos`,
      );
      return response.data;
    },
    enabled: !!username,
    refetchOnWindowFocus: false,
  });

  return {
    repositories: data || [],
    isLoadingRepositorie: isLoading,
    hasError: isError,
  };
}

export function useRepositoryDetail({fullname}: GetRepositoryDetailQuery) {
  const {isLoading, data, isError} = useQuery<GetRepositoryDetailResponse>({
    queryKey: ['repositoryDetail', fullname],
    queryFn: async (): Promise<GetRepositoryDetailResponse> => {
      const response = await api.get<GetRepositoryDetailResponse>(
        `repos/${fullname}`,
      );
      return response.data;
    },
    enabled: !!fullname,
    refetchOnWindowFocus: false,
  });

  return {
    repositoryDetail: data,
    isLoadingRepositoryDetail: isLoading,
    hasError: isError,
  };
}
