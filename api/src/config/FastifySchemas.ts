export const FastifySchemas = {
  Leaderboard: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            displayName: { type: "string" },
            github: {
              type: "object",
              properties: {
                year: {
                  type: "object",
                  properties: {
                    issues: { type: "number" },
                    pulls: { type: "number" },
                  },
                },
                month: {
                  type: "object",
                  properties: {
                    issues: { type: "number" },
                    pulls: { type: "number" },
                  },
                },
              },
            },
            forum: {
              type: "object",
              properties: {
                year: {
                  type: "object",
                  properties: {
                    likes: { type: "number" },
                    solutions: { type: "number" },
                  },
                },
                month: {
                  type: "object",
                  properties: {
                    likes: { type: "number" },

                    solutions: { type: "number" },
                  },
                },
              },
            },
            crowdin: {
              type: "object",
              properties: {
                year: {
                  type: "object",
                  properties: {
                    strings: { type: "number" },
                  },
                },
                month: {
                  type: "object",
                  properties: {
                    strings: { type: "number" },
                  },
                },
              },
            },
            news: {
              type: "object",
              properties: {
                year: {
                  type: "object",
                  properties: {
                    articles: { type: "number" },
                    handbooks: { type: "number" },
                    fullbooks: { type: "number" },
                  },
                },
                month: {
                  type: "object",
                  properties: {
                    articles: { type: "number" },
                    handbooks: { type: "number" },
                    fullbooks: { type: "number" },
                  },
                },
              },
            },
            youtube: {
              type: "object",
              properties: {
                year: {
                  type: "object",
                  properties: {
                    hours: { type: "number" },
                  },
                },
                month: {
                  type: "object",
                  properties: {
                    hours: { type: "number" },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
