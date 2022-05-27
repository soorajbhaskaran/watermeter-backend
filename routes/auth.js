const express=require('express');
const check=require('../middlewares/check')

const {register,loginUser,getMe,logoutUser,changeRate/*,updateDetails*/}=require('../controllers/auth');
const {protect,authorize}=require('../middlewares/auth')

const router=express.Router();

router.route('/register').post(check,authorize('admin'),register);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.get('/logout',protect, logoutUser);
//router.put('/updatedetails', protect, updateDetails);

//changing rate
router.post('/changerate',protect,authorize('admin'),changeRate);

module.exports=router;

