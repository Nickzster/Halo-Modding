import { Error } from "../../../types/Error";
import { generateError } from "../../../util/generateError";

export const checkCredentials = (req, res, next) => {
  const errors: Error[] = [];
  if (!!!req.body.login) errors.push(generateError("INVALID_LOGIN"));
  if (!!!req.body.password) errors.push(generateError("INVALID_LOGIN"));
  if (errors.length > 0) return res.json(errors);
  next();
};
