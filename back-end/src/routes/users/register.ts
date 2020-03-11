import express from "express";
import { checkRegisterationInformation } from "../../middleware/validators/auth/register";
import { saveNewUser } from "../../controllers/User";
import debug from "../../util/debug";

const router: express.Router = express.Router();

router.post(
  "/register",
  [checkRegisterationInformation],
  async (req: express.Request, res: express.Response) => {
    try {
      let jwt = await saveNewUser(req.body);
      res.json(jwt);
    } catch (err) {
      debug(err);
      res.status(400).send("Server Error");
    }
  }
);

export { router };
