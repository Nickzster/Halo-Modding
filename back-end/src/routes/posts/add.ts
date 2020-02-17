import express from "express";
import { Error } from "../../types/Error";
import { Post } from "../../types/Post";
import { saveNewPost } from "../../controllers/Post";
import debug from "../../util/debug";
import { generateError } from "../../util/generateError";
import { validatePost } from "../../middleware/validators/Posts/ValidatePost";

const router: express.Router = express.Router();

router.post(
  "/add",
  [validatePost],
  async (req: express.Request, res: express.Response) => {
    try {
      debug("Adding Data for Project: ", req.body.projecttitle);
      let newPost: Post = await saveNewPost(req);
      return res.send(newPost);
    } catch (err) {
      debug("ERROR OUTPUT: ", err);
      debug("### Pushing Generic Error ###");
      let error: Error[] = [];
      error.push(generateError("SERVER_ERROR"));
      return res.status(400).json(error);
    }
  }
);

export { router };
