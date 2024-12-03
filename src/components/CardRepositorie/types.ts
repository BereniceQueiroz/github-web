type Repositorie = {
  id: string;
  name: string;
  license: string;
  private: boolean;
  full_name: string;
  stargazers_count: number;
};

export interface RepositorieProps {
  repositories: Repositorie[];
  handleClick: (fullName: string) => void;
}
