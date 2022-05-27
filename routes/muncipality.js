const express=require('express');
const {authorize}=require('../middlewares/auth')

const router=express.Router();
const {meterData}=require("../controllers/muncipality");

//endpoint to meterReading
router.post('/raspi',authorize('admin'),meterData);

module.exports=router;
