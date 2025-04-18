import express from "express";


import authRouter from "./auth.js";
const mainRouter = express.Router();
mainRouter.use("/auth", authRouter);

export default mainRouter;