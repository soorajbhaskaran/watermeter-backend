const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');
const Price = require('./Price');
const User = require('./User');

const Muncipality=sequelize.define('muncipality',{
    currentWaterConsumption:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    currentMonthlyPrice:{
        type:DataTypes.DECIMAL,
        allowNull:false
    },
    currentMeterReading:{
     type:DataTypes.BIGINT,
     allowNull:false,
     unique:true
    },
   userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
    priceId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Price,
            key:"id"
        }
    }


});
module.exports=Muncipality;