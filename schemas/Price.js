const {DataTypes}=require('sequelize');
const sequelize=require('../config/db');

const Price=sequelize.define('price',{
    currentPrice:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

});

module.exports=Price;