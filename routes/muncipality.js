const express=require('express');
const {authorize, protect}=require('../middlewares/auth')

const router=express.Router();
const {meterData,getConsumerData}=require("../controllers/muncipality");

//endpoint to meterReading
router.post('/raspi',authorize('admin'),meterData);
router.get('/getConsumer',authorize('admin'),protect,getConsumerData);


module.exports=router;
