import express from 'express';
/* Routes */
import { router as Posts } from './posts';
const router: express.Router = express.Router();

router.use('/posts', Posts);

export default router;
