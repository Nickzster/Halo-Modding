import express from "express";
/* Routes */
import { router as Posts } from "./posts";
import { router as Auth } from "./auth";
const router: express.Router = express.Router();

router.use("/posts", Posts);
router.use("/auth", Auth);

export default router;
