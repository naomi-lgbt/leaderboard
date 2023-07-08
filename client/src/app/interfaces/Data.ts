export interface Data {
  displayName: string;
  avatarUrl: string;
  github: {
    year: {
      issues: number;
      pulls: number;
    };
    month: {
      issues: number;
      pulls: number;
    };
  };
  forum: {
    year: {
      likes: number;
      solutions: number;
    };
    month: {
      likes: number;
      solutions: number;
    };
  };
  crowdin: {
    year: {
      strings: number;
    };
    month: {
      strings: number;
    };
  };
  news: {
    year: {
      articles: number;
      handbooks: number;
      fullbooks: number;
    };
    month: {
      articles: number;
      handbooks: number;
      fullbooks: number;
    };
  };
  youtube: {
    year: {
      hours: number;
    };
    month: {
      hours: number;
    };
  };
};
