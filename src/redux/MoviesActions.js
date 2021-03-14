export const readMovies = (pageno) => {
  return {
    type: "READ",
    payload: pageno,
  };
};
export const searchMovies = (text) => {
  return {
    type: "SEARCH",
    payload: text,
  };
};
