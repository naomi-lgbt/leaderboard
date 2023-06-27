export interface NewsContributor {
  name: string;
  username: string;
  url: string;
  email: string;
  month: {
    articles: number;
    handbooks: number;
    fullbooks: number;
  };
  year: {
    articles: number;
    handbooks: number;
    fullbooks: number;
  };
}
