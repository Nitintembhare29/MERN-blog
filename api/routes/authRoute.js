import { signup } from "../controllers/authController.js";

import express from "express";

const authRouter = express.Router();

authRouter.post("/signup", signup);

export default authRouter;
