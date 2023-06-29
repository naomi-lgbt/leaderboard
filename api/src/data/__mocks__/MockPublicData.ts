import { Cache } from "../../interfaces/Cache";

export const MockPublicData: Cache["public"] = [
  {
    displayName: "Naomi",
    avatarUrl:
      "https://www.gravatar.com/avatar/4f8cc883c553f81fc9d7ecf1eb01d071?d=robohash",
    github: {
      year: {
        issues: Math.floor(Math.random() * 100),
        pulls: Math.floor(Math.random() * 100),
      },
      month: {
        issues: Math.floor(Math.random() * 100),
        pulls: Math.floor(Math.random() * 100),
      },
    },
    forum: {
      year: {
        likes: Math.floor(Math.random() * 100),
        solutions: Math.floor(Math.random() * 100),
      },
      month: {
        likes: Math.floor(Math.random() * 100),
        solutions: Math.floor(Math.random() * 100),
      },
    },
    crowdin: {
      year: {
        strings: Math.floor(Math.random() * 100),
      },
      month: {
        strings: Math.floor(Math.random() * 100),
      },
    },
    news: {
      year: {
        articles: Math.floor(Math.random() * 100),
        handbooks: Math.floor(Math.random() * 100),
        fullbooks: Math.floor(Math.random() * 100),
      },
      month: {
        articles: Math.floor(Math.random() * 100),
        handbooks: Math.floor(Math.random() * 100),
        fullbooks: Math.floor(Math.random() * 100),
      },
    },
    youtube: {
      year: {
        hours: Math.floor(Math.random() * 100),
      },
      month: {
        hours: Math.floor(Math.random() * 100),
      },
    },
  },
  {
    displayName: "Quincy",
    avatarUrl:
      "https://www.gravatar.com/avatar/ef3746c452aaf48197e6697e416a8584?d=robohash",
    github: {
      year: {
        issues: Math.floor(Math.random() * 100),
        pulls: Math.floor(Math.random() * 100),
      },
      month: {
        issues: Math.floor(Math.random() * 100),
        pulls: Math.floor(Math.random() * 100),
      },
    },
    forum: {
      year: {
        likes: Math.floor(Math.random() * 100),
        solutions: Math.floor(Math.random() * 100),
      },
      month: {
        likes: Math.floor(Math.random() * 100),
        solutions: Math.floor(Math.random() * 100),
      },
    },
    crowdin: {
      year: {
        strings: Math.floor(Math.random() * 100),
      },
      month: {
        strings: Math.floor(Math.random() * 100),
      },
    },
    news: {
      year: {
        articles: Math.floor(Math.random() * 100),
        handbooks: Math.floor(Math.random() * 100),
        fullbooks: Math.floor(Math.random() * 100),
      },
      month: {
        articles: Math.floor(Math.random() * 100),
        handbooks: Math.floor(Math.random() * 100),
        fullbooks: Math.floor(Math.random() * 100),
      },
    },
    youtube: {
      year: {
        hours: Math.floor(Math.random() * 100),
      },
      month: {
        hours: Math.floor(Math.random() * 100),
      },
    },
  },
];
