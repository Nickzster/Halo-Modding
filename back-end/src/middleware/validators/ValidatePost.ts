import { Post } from "../../types/Post";
import { Error } from "../../types/Error";
import { generateError } from "../../util/generateError";
import { isValidGame, isValidProjectType } from "../../util/validNames";
import Posts from "../../models/Posts";
import { checkMandatoryFields, checkToxicity } from "./CheckForErrors";

/* 
Validate Post
-Needs to make sure all fields are present
-Need to make sure all typed fields do not have toxicity or spam
*/

const validatePost = async (data): Promise<Post> => {
  let Errors: Array<Error> = checkMandatoryFields(data);
  if (Errors.length > 0) throw Errors;
  //TODO: Validate toxicity for Project Mirrors and Download Links (Both Sources & URLS)
  let isToxic = await checkToxicity(data);
  if (isToxic) throw generateError("TOXICITY_DETECTED");
  let newPost: Post = new Posts({
    userinfo: data.userinfo,
    game: isValidGame(data.game),
    projecttype: isValidProjectType(data.projecttype),
    downloadmirrors:
      data.downloadmirrors === null
        ? []
        : data.downloadmirrors === undefined
        ? []
        : data.downloadmirrors,
    projectmirrors:
      data.projectmirrors === null
        ? []
        : data.projectmirrors === undefined
        ? []
        : data.projectmirrors,
    images: data.images,
    projecttitle: data.projecttitle,
    description: data.description
  });
  return newPost;
};

export default validatePost;
