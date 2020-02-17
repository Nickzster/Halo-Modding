import express from "express";
import { router as GetPosts } from "./get";
import { router as AddPosts } from "./add";

const router: express.Router = express.Router();

router.use(GetPosts);
router.use(AddPosts);

export { router };
