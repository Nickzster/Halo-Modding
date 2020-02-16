import { Post } from "../../types/Post";
import { Error } from "../../types/Error";
import { generateError } from "../../util/generateError";
import { isValidGame, isValidProjectType } from "../../util/validNames";
import Posts from "../../models/Posts";
import { checkMandatoryFields, checkToxicity } from "./CheckForErrors";
import debug from "../../util/debug";

/* 
Validate Post
-Needs to make sure all fields are present
-Need to make sure all typed fields do not have toxicity or spam
*/

export const validatePost = async (req, res, next): Promise<void> => {
  try {
    let Errors: Array<Error> = checkMandatoryFields(req.body);
    if (Errors.length > 0) throw Errors;
    let isToxic = await checkToxicity(req.body);
    if (isToxic) throw generateError("TOXICITY_DETECTED");
    if (!isValidGame(req.body.game)) throw generateError("INVALID_GAME");
    if (!isValidProjectType(req.body.projecttype))
      throw generateError("INVALID_PROJECT_TYPE");
    next();
  } catch (err) {
    debug("### ERROR in Middleware ValidatePost ###");
    if (err && err.length > 0) {
      debug("...and it is an array of errors");
      res.status(400).json(err);
    } else if (err && err.code && err.message) {
      debug("...and it is a single error.");
      res.status(400).json([err]);
    } else {
      debug("...and it is an unknown error.");
      let error: Error[] = [];
      error.push(generateError("SERVER_ERROR"));
      res.status(400).json(error);
    }
  }
};
