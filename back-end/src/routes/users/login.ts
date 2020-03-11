import express from "express";
import debug from "../../util/debug";
import { checkCredentials } from "../../middleware/validators/auth/credentials";
import { generateError } from "../../util/generateError";
import { getToken } from "../../controllers/User";

const router: express.Router = express.Router();

router.get(
  "/login",
  [checkCredentials],
  async (req: express.Request, res: express.Response) => {
    try {
      const token = await getToken(req.body);
      return res.json(token);
    } catch (err) {
      debug(err);
      res.status(301).json([generateError("INVALID_LOGIN")]);
    }
  }
);

export { router };
