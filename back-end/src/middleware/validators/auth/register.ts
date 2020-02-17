import { generateError } from "../../../util/generateError";
import { Error } from "../../../types/Error";
import { isValidEmail } from "../../../util/check";
import Users from "../../../models/Users";
import { checkForToxicity } from "../Toxicity/toxicity";
import debug from "../../../util/debug";

export const checkRegisterationInformation = async (req, res, next) => {
  const MIN_PASSWORD_LENGTH = 6;
  try {
    const errors: Error[] = [];
    if (!!!req.body.username) errors.push(generateError("INVALID_USERNAME"));
    else if ((await Users.findOne({ username: req.body.username })) !== null)
      errors.push(generateError("DUPLICATE_USERNAME"));
    if (!!!req.body.email || !isValidEmail(req.body.email))
      errors.push(generateError("INVALID_EMAIL"));
    else if ((await Users.findOne({ email: req.body.email })) !== null)
      errors.push(generateError("DUPLICATE_EMAIL"));
    if (!!!req.body.password || req.body.password < MIN_PASSWORD_LENGTH)
      errors.push(generateError("INVALID_PASSWORD"));
    if (
      !!req.body.username &&
      !!req.body.email &&
      (await checkForToxicity([req.body.username]))
    )
      errors.push(generateError("TOXICITY_DETECTED"));
    if (errors.length > 0) throw errors;
    next();
  } catch (err) {
    debug("ERROR THROWN IN REGISTER MIDDLEWARE!");
    res.status(400).json(err);
  }
};
