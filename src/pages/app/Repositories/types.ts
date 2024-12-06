export interface HeaderProps {
  username: string;
  direction: string;
  setDirection: (value: string) => void;
}

export interface PaginationProps {
  page: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

export type Repositorie = {
  id: string;
  name: string;
  license: string;
  private: boolean;
  full_name: string;
  stargazers_count: number;
};

export interface ContentProps {
  isLoading: boolean;
  hasError: boolean;
  repositories: Repositorie[];
  handleNavigate: (fullName: string) => void;
  page: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handleGoBack: () => void;
}
