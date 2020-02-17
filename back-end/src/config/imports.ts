import config from "./config.json";

export const db =
  process.env.NODE_ENV === "production"
    ? config.development.db
    : config.production.db;

export const jwtSecret = () => {
  return config.jwtSecret;
};
