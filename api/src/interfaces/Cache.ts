export interface Cache {
  [email: string]: {
    github: {
      username: string;
      url: string;
      month: {
        issues: number;
        pulls: number;
      };
      year: {
        issues: number;
        pulls: number;
      };
    };
    forum: {
      username: string;
      month: {
        likes: number;
        solutions: number;
      };
      year: {
        likes: number;
        solutions: number;
      };
    };
    crowdin: {
      username: string;
      month: {
        strings: number;
      };
      year: {
        strings: number;
      };
    };
    news: {
      username: string;
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
    };
    youtube: {
      username: string;
      month: {
        hours: number;
      };
      year: {
        hours: number;
      };
    };
  };
}
