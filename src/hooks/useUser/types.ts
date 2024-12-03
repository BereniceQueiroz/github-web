export interface GetUserQuery {
  username: string;
}

export interface GetUsersResponse {
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
}
