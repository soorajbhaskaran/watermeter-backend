const {DataTypes}=require('sequelize');
const sequelize=require('../config/db');
const Muncipality=require('../schemas/Muncipality');
const User=require('./User');

const Billing=sequelize.define('billing',{
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
    consumedPrice:{
        type:DataTypes.INTEGER,
        references:{
            model:Muncipality,
            key: "id"
        }
    },
    gst:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    totalCost:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    monthYear:{
        type:DataTypes.STRING,
        allowNull:false
    }


});

module.exports=Billing;