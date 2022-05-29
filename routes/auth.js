const express=require('express');
const check=require('../middlewares/check')

const {registerUser,login,getMe,logout,changeRate,updateDetails,getDetails}=require('../controllers/auth');
const {protect,authorize}=require('../middlewares/auth')
const {payBill}=require('../controllers/bill')

const router=express.Router();

//User Auth
router.route('/register').post(check,authorize('admin'),registerUser);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout',protect, logout);
router.post('/updatedetails', protect, updateDetails);
router.get('/mydata',protect,getDetails)


//changing rate
router.post('/changerate',protect,authorize('admin'),changeRate);

//paying user bill
router.post('/paybill',protect,payBill);

module.exports=router;

