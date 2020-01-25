import express from 'express';
import validatePost from '../../middleware/validators/CreatePost';
import { Post } from '../../types/Post';

const router: express.Router = express.Router();

router.post('/add', async (req: express.Request, res: express.Response) => {
  try {
    let newPost: Post = await validatePost(req.body);
    await newPost.save();
    return res.send(newPost);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

export { router };
