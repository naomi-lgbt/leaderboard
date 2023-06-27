import { Cache } from "../interfaces/Cache";

/**
 * Module to generate a new cache record.
 *
 * @returns {Cache["data"][""]} The new cache record.
 */
export const initialiseDataRecord = (): Cache["data"][""] => {
  return {
    github: {
      username: "",
      url: "",
      month: {
        pulls: 0,
        issues: 0,
      },
      year: {
        pulls: 0,
        issues: 0,
      },
    },
    forum: {
      username: "",
      month: {
        likes: 0,
        solutions: 0,
      },
      year: {
        likes: 0,
        solutions: 0,
      },
    },
    crowdin: {
      username: "",
      month: {
        strings: 0,
      },
      year: {
        strings: 0,
      },
    },
    news: {
      username: "",
      month: {
        articles: 0,
        handbooks: 0,
        fullbooks: 0,
      },
      year: {
        articles: 0,
        handbooks: 0,
        fullbooks: 0,
      },
    },
    youtube: {
      username: "",
      month: {
        hours: 0,
      },
      year: {
        hours: 0,
      },
    },
  };
};
