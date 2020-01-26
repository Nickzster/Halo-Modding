import express from 'express';

import { Post } from '../../types/Post';
import { saveNewPost } from '../../controllers/Post';
import debug from '../../util/debug';
import { generateError } from '../../util/generateError';

const router: express.Router = express.Router();

router.post('/add', async (req: express.Request, res: express.Response) => {
  try {
    debug('REQUESTING TO ADD DATA: ', req.body);
    let newPost: Post = await saveNewPost(req.body);
    return res.send(newPost);
  } catch (err) {
    debug('ERR THROWN IN ADD', err);
    //TODO: Add logic to force our error messages
    // if ((err && err.code) || typeof err === Array)
    //   return res.status(400).json(err);
    // else
    return res.status(400).json(err);
  }
});

export { router };
