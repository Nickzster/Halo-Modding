export const buildQueryString = (...queries: string[]) => {
  let finalString = "?";
  let isFirst = true;
  for (let i in queries) {
    if (!!queries[i]) {
      if (parseInt(i, 10) !== 0 && !isFirst) finalString += "&";
      finalString += `${queries[i]}`;
      isFirst = false;
    }
  }
  return finalString;
};
