const express=require('express');
const check=require('../middlewares/check')

const {register,loginUser,getMe,logoutUser,updateDetails}=require('../controller/auth');
const {protect}=require('../middlewares/auth')

const router=express.Router();

router.route('/register').post(check,register);
router.post('/login', loginUser);
router.get('/logout',protect, logoutUser);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);

module.exports=router;

