export interface Cache {
  env: {
    githubToken: string;
    ghostKey: string;
    ghostAdminKey: string;
    crowdinKey: string;
    forumKey: string;
    forumUsername: string;
  };
  data: {
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
  };
  public: {
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
  }[];
}
