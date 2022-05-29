const {DataTypes}=require('sequelize');
const sequelize=require('../config/db');
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
        type:DataTypes.BIGINT,
        allowNull:false
    },
    gst:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    totalCost:{
        type:DataTypes.BIGINT,
        allowNull:false
    },
    monthYear:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.ENUM,
        values: ['paid','unpaid'],
        defaultValue:'unpaid'
    }


});

module.exports=Billing;