import express from "express";
import { router as RegisterNewUser } from "./register";
import { router as Login } from "./login";

const router: express.Router = express.Router();

router.use(RegisterNewUser);
router.use(Login);

export { router };
