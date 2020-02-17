import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config/imports";
import { generateError } from "../../util/generateError";
import debug from "../../util/debug";

export const auth = (req, res, next) => {
  const token = req.header("x-halo-auth-token");
  if (!token) throw "# # # Token is undefined # # #";
  try {
    const payload = jwt.verify(token, jwtSecret());
    req.user = payload.token;
    next();
  } catch (err) {
    debug(err);
    res.status(401).json([generateError("INVALID_TOKEN")]);
  }
};
