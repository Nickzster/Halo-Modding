import gravatar from "gravatar";

export const generateAvatar = (email: string) => {
  return gravatar.url(email, { s: "200", r: "pg", d: "mm" });
};
