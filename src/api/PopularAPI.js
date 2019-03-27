import Request from './Request';

export const getPopularList = (language) =>
  Request.get({
    url: "search/repositories?q=stars:>1+language:" + language + "&sort=stars&order=desc&type=Repositories"
  });
