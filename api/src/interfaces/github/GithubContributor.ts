export interface GithubContributor {
  username: string;
  name: string;
  url: string;
  email: string;
  month: {
    mergedPrs: number;
    closedIssues: number;
  };
  year: {
    mergedPrs: number;
    closedIssues: number;
  };
}
