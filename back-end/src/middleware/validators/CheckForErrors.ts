import { generateError } from "../../util/generateError";
import { checkForToxicity } from "./Toxicity/toxicity";
import { Error } from "../../types/Error";
import { Link } from "../../types/Post";

//Makes sure that the Username, Email, Game, Project Type, Project Name,
//Project Description, and images have valid values
export const checkMandatoryFields = (data: any): Array<Error> => {
  let Errors: Array<Error> = [];
  if (!(data && data.userinfo)) Errors.push(generateError("INVALID_USER_INFO"));
  if (!(data && data.userinfo && data.userinfo.username))
    Errors.push(generateError("USER_NAME_IS_NULL"));
  if (
    !(data && data.userinfo && data.userinfo.email) ||
    data.userinfo.email.search("@") === -1
  )
    Errors.push(generateError("EMAIL_IS_NULL"));
  if (data && (data.game === null || data.game === undefined))
    Errors.push(generateError("GAME_IS_NULL"));
  if (data && (data.projecttype === null || data.projecttype === undefined))
    Errors.push(generateError("PROJECT_TYPE_IS_NULL"));
  if (data && (data.projecttitle === null || data.projecttype === undefined))
    Errors.push(generateError("PROJECT_TITLE_IS_NULL"));
  if (
    data &&
    (data.images === null ||
      data.images === undefined ||
      data.images.length === 0)
  )
    Errors.push(generateError("IMAGES_IS_INVALID"));
  if (data && (data.description === undefined || data.description === null))
    Errors.push(generateError("DESCRIPTION_IS_NULL"));
  return Errors;
};

//utility function that adds the source and url into one array
const pushURL = (urls: Link[], arr: string[]) => {
  urls.forEach(link => {
    arr.push(link.source);
    arr.push(link.url);
  });
};

//Sets up an array for the perspective API toxicity check
export const checkToxicity = async data => {
  const arrayToCheck: string[] = [];
  arrayToCheck.push(data.userinfo.username);
  arrayToCheck.push(data.description);
  arrayToCheck.push(data.projecttitle);
  pushURL(data.images, arrayToCheck);
  if (data.projectmirrors && data.projectmirrors.length > 0)
    pushURL(data.projectmirrors, arrayToCheck);
  if (data.projectmirrors && data.downloadmirrors.length > 0)
    pushURL(data.downloadmirrors, arrayToCheck);
  return await checkForToxicity(arrayToCheck);
};
