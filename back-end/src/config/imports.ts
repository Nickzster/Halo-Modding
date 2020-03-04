import config from "./config.json";
import debug from "../util/debug";

process.env.NODE_ENV === "production"
  ? debug("Starting server in PRODUCTION environment!")
  : debug("Starting server in DEVELOPMENT environment!");

export const db =
  process.env.NODE_ENV === "production"
    ? config.production.db
    : config.development.db;

export const jwtSecret = () => {
  return config.jwtSecret;
};
