const asyncHandler=require('../middlewares/async')
const ErrorResponce=require('../utils/ErrorResponce');
const User = require('../schemas/User');
const Price = require('../schemas/Price');
const Muncipality = require('../schemas/Muncipality');

//@desc Update current meter data
//@router POST /api/munci
//@access Private

exports.meterData=asyncHandler(async(req,res,next)=>{

    const {userId,currentReading}=req.body;
    const user=await User.findByPk(userId);
    if(!user){
        return next(new ErrorResponce('No such user',404));
    }
    const currentWaterConsumption=currentReading-user.currentThreshold;
    const {currentPrice,id}=await Price.findOne({order:[['updatedAt', 'DESC']]});
    console.log(currentPrice);
    console.log(id);
    const priceId=id;
    const currentMonthlyPrice=currentPrice*parseFloat(currentWaterConsumption/1000).toFixed(2);
    console.log(currentMonthlyPrice);
    const muncipality=await Muncipality.create({currentWaterConsumption,currentMonthlyPrice,userId,priceId});

    if(!muncipality){
        return next(new ErrorResponce('The data is not updated'));
    }
    const date=muncipality.createdAt;

    if(date.getDate()==="30" && date.getHours()==="00" && date.getMinutes()==="00" && date.getSeconds()==="00" ){
        let updateContent={currentThreshold:currentReading};
        const newUser=await User.update(updateContent,{where:{id:userId}});
    }    

    res.status(200).json({
        success:true,
        message:"Data has been updated"
    })
});
