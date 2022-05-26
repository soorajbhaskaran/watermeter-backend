const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');
const User = require('./User');

const Muncipality=sequelize.define('muncipality',{
    currentThreshold:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    currentReading:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    dateTime:{
        type:DataTypes.DATE,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        references:{
            model:User,
            key:"id"
        }
    }


});
module.exports=Muncipality;