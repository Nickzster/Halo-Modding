import express from 'express';
import debug from '../../util/debug';
import { getPostsByQuery, getPostByID } from '../../controllers/Post';

//TODO: Handle Errors

const router: express.Router = express.Router();

/* Adds projects to the respective sections */

//Retrieves an individual post
router.get('/id/:id', async (req: express.Request, res: express.Response) => {
  console.log(`Trying to get post: ${req.params.id}`);
  try {
    let post = await getPostByID(req.params.id);
    res.send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Gets some posts from the specified param
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    debug(`Retrieving some posts by parameters: ${req.query}`);
    let posts = await getPostsByQuery(req.query);
    res.send(posts);
  } catch (err) {
    res.status(400).send(err);
  }
});

export { router };
