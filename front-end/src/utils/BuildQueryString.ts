export const buildQueryString = (queries: string, page: number) => {
  let finalString = ``;
  if (!queries) finalString += queries + `?page=${page}`;
  else finalString += `&page=${page}`;
  return finalString;
};
