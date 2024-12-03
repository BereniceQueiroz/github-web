type Repositorie = {
  id: string;
  name: string;
  full_name: string;
  stargazers_count: number;
  description?: string;
  language?: string;
};

export interface RepositorieProps {
  repositorie: Repositorie;
}
