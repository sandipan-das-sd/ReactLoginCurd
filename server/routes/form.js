import express from 'express';
import { addStaffDetails, getStaffDetails, editStaffDetails,deleteStaffDetails, requestEdit,
    approveEdit,
    rejectEdit } from '../controllers/form.js';
import {isAuthenticated,isAdmin} from '../middlewire/isAuthenticated.js';
const formRouter=express.Router();
formRouter.get('/getStaff',isAuthenticated,isAdmin,getStaffDetails);
formRouter.post('/addStaff',isAuthenticated,isAdmin,addStaffDetails);
formRouter.put('/editStaff/:id',isAuthenticated,isAdmin,editStaffDetails);
formRouter.get('/getStaff/:id',isAuthenticated,getStaffDetails);
formRouter.delete('/deleteStaff/:id',isAuthenticated,isAdmin,deleteStaffDetails);
formRouter.put('/requestEdit/:id', isAuthenticated, requestEdit);
formRouter.post('/approveEdit/:id', isAuthenticated, isAdmin, approveEdit);
formRouter.post('/rejectEdit/:id', isAuthenticated, isAdmin, rejectEdit);
export default formRouter;
