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
    const priceId=id;
    const currentMonthlyPrice=currentPrice*parseFloat(currentWaterConsumption/1000).toFixed(2);

    const checkUser= await Muncipality.findOne({where:{userId:userId}});
    let muncipality;
    if(!checkUser){
       muncipality=await Muncipality.create({currentWaterConsumption,currentMonthlyPrice,userId,priceId});
    }
    else{
        let newContent={currentWaterConsumption,currentMonthlyPrice};
        console.log(currentWaterConsumption);
        console.log(currentMonthlyPrice);
        console.log(checkUser.id)
        muncipality=await Muncipality.update(newContent,{where:{id:checkUser.id}});
        console.log(muncipality.currentMonthlyPrice)
    }
  
    

    if(!muncipality){
        return next(new ErrorResponce('The data is not updated'));
    }
    const date=muncipality.createdAt;

    if(date.getDate()==="30" && date.getHours()==="00" && date.getMinutes()==="00" && date.getSeconds()==="00" ){
        let updateContent={currentThreshold:currentReading};
        await User.update(updateContent,{where:{id:userId}});
    }    

    res.status(200).json({
        success:true,
        message:"Data has been updated"
    })
});

//@desc Get all user data
//@router POST /api/munci
//@access Private
exports.getDetails=asyncHandler(async(req,res,next)=>{

   const id=req.body.userId;
   const muncipality=await Muncipality.findByPk(id);

   if(!muncipality){
       return next(new ErrorResponce('Given user data is not available',404));
   }
   

});
