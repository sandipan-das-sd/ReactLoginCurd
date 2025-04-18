import express from 'express';
import {login,signUp,verifyOtpAndSignup} from '../controllers/auth.js';
import {isAuthenticated} from '../middlewire/isAuthenticated.js';
const authRouter=express.Router();
authRouter.post('/signup',signUp);
authRouter.post('/verify-otp',isAuthenticated,verifyOtpAndSignup);
authRouter.post('/login',login);
export default authRouter;