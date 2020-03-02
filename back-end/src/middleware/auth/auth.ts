import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config/imports";
import { generateError } from "../../util/generateError";
import debug from "../../util/debug";

export const auth = (req, res, next) => {
  const token = req.header("x-halo-modding-auth-token");
  try {
    if (!token) throw "UNDEFINED TOKEN";
    const payload = jwt.verify(token, jwtSecret());
    req.user = payload.token;
    next();
  } catch (err) {
    debug(err);
    res.status(401).json([generateError("INVALID_TOKEN")]);
  }
};
