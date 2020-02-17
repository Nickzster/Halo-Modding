export const isValidEmail = (email: string) => {
  return email.search("@") === -1 ? false : true;
};
