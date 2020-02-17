import { Error } from "../types/Error";
import debug from "./debug";

const errors = {
  USER_NAME_IS_NULL: "Invalid User Name was specified!",
  EMAIL_IS_NULL: "Invalid Email was specified!",
  GAME_IS_NULL: "Invalid Halo Game was specified!",
  PROJECT_TYPE_IS_NULL: "Invalid Project Type was specified!",
  PROJECT_TITLE_IS_NULL: "Invalid Project Title was specified!",
  IMAGES_IS_INVALID: "Invalid Images were specified!",
  DESCRIPTION_IS_NULL: "Invalid Description was specified!",
  CANNOT_FIND_POST_BY_ID: "Cannot find the post specified!",
  CANNOT_FIND_POSTS: "Something has gone wrong!",
  CANNOT_SAVE_POST: "Something went wrong with your new post!",
  REACHED_BOTTOM: "It looks like you have reached the bottom!",
  INVALID_PARAM: "Invalid Parameter Specified!",
  TOXICITY_DETECTED:
    "Please check your username, project title, and project description for any NSFW content.",
  SERVER_ERROR: "Server Error.",
  INVALID_USERNAME: "Please enter a valid username.",
  INVALID_EMAIL: "Please enter a valid email.",
  INVALID_PASSWORD:
    "Please ensure that your password has 6 or more characters.",
  DUPLICATE_EMAIL:
    "This email already exists. Please try logging in, or use a different email!",
  DUPLICATE_USERNAME:
    "This username already exists. Please try logging in, or use a different username!",
  INVALID_TOKEN: "Invalid Token Specified. Authorization Denied!",
  INVALID_LOGIN: "The Username and/or password you have entered is invalid!"
};

export const generateError = (code: string): Error => {
  debug(`Generate Error was called with code ${code}`);
  let err: Error = {
    code: "",
    message: ""
  };
  err.code = code;
  let message = errors[code];
  if (message === null || message === undefined)
    err.message = errors["SERVER_ERROR"];
  else err.message = message;
  debug("Returning Error: ", err);
  return err;
};
