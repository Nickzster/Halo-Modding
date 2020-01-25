import express from 'express';
import { router as Games } from './get';
import { router as AddPost } from './add';

const router: express.Router = express.Router();

//Desc: Just to test the endpoint
router.get('/test', (req: express.Request, res: express.Response) => {
  res.send(`<h1>Hello, from Posts!</h1>`);
});

//Desc: Adds a post to the database.
//Params in the request specify which cluster to save the post to.
router.use('/add', AddPost);

//Gets posts from specified game
router.use('/games', Games);

export { router };
