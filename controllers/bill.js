const User=require('../schemas/User')
const Billing=require('../schemas/Billing')
const asyncHandler=require('../middlewares/async')
const ErrorResponce=require('../utils/ErrorResponce');
const Muncipality= require('../schemas/Muncipality');

exports.payBill=asyncHandler(async(req,res,next)=>{
const billId=req.body.id;
const billing=await Billing.update({status:'paid'},{where:{id:billId}});
if(!billing){
    return next(new ErrorResponce('Bill payment is not updated',404));
}

res.status(200).json({
    success:true,
    message:'payment is updated'
})
});


exports.generateBill=asyncHandler(async(req,res,next)=>{
    
    const result=await Muncipality.findAll();
    //console.log(userId.values);
    //console.log(userId[0].name);

    for (let i = 0; i < result.length; i++)  {
       console.log(result[i].dataValues);
      let updateContent={currentThreshold:result[i].dataValues.currentMeterReading};
        await User.update(updateContent,{where:{id:result[i].dataValues.userId}});
        const consumedPrice=result[i].dataValues.currentMonthlyPrice;
        const gst=18;
        const totalCost=consumedPrice+(gst/100)*consumedPrice;
        const date=new Date();
        const monthYear= date.getMonth()+1 + '/' +date.getFullYear();
        const billing=await Billing.create({userId:result[i].dataValues.userId,consumedPrice:consumedPrice,gst:gst,totalCost:totalCost,monthYear:monthYear});
        if (!billing){
            return next(new ErrorResponce("Billing is not created",404));
        }
    }    
      
    res.status(200).json({
        success:true,
        message:"The billings are updated"
    });
});