export interface GeRepositoriesQuery {
  username: string;
  direction: string;
  page: number;
}

type Repositorie = {
  id: string;
  name: string;
  license: string;
  private: boolean;
  full_name: string;
  stargazers_count: number;
};

export type GetRepositoriesResponse = Repositorie[];

export interface GetRepositoryDetailQuery {
  fullname: string | null;
}

export type GetRepositoryDetailResponse = Repositorie;
