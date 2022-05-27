const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');
const Price = require('./Price');
const User = require('./User');

const Muncipality=sequelize.define('muncipality',{
    currentReading:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    currentMonthlyPrice:{
        type:DataTypes.INTEGER,
        allowNull:false
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