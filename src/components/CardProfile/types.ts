type User = {
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  email: string;
  repositories: number;
  followers: number;
  following: number;
  company: string;
  login: string;
};

export interface UserProps {
  user: User;
  onClick?: () => void;
}
