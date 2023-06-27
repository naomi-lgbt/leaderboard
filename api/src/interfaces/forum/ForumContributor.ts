export interface ForumContributor {
  username: string;
  name: string;
  url: string;
  email: string;
  month: {
    likes: number;
    solutions: number;
  };
  year: {
    likes: number;
    solutions: number;
  };
}
