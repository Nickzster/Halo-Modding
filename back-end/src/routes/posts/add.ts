import express from "express";
import { Error } from "../../types/Error";
import { Post } from "../../types/Post";
import { saveNewPost } from "../../controllers/Post";
import debug from "../../util/debug";
import { generateError } from "../../util/generateError";

const router: express.Router = express.Router();

router.post("/add", async (req: express.Request, res: express.Response) => {
  try {
    debug("REQUESTING TO ADD DATA: ", req.body);
    let newPost: Post = await saveNewPost(req.body);
    return res.send(newPost);
  } catch (err) {
    debug("### error thrown in route /add ###");
    console.log(
      "############### ERROR ###############\n",
      err,
      "\n############### ERROR ###############\n"
    );
    if (err && err.length > 0) {
      debug("...and it is an array of errors");
      return res.status(400).json(err);
    } else if (err && err.code && err.message) {
      debug("...and it is a single error.");
      return res.status(400).json([err]);
    }
    debug("...and it is an unknown error.");
    let error: Error[] = [];
    error.push(generateError("SERVER_ERROR"));
    return res.status(400).json(error);
  }
});

export { router };
