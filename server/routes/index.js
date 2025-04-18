import express from "express";


import authRouter from "./auth.js";
import formRouter   from "./form.js";
const mainRouter = express.Router();
mainRouter.use("/auth", authRouter);
mainRouter.use("/form", formRouter);
export default mainRouter;