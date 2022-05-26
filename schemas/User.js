const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');

const User=sequelize.define('user',{
    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    consumerNumber:{
      type:DataTypes.INTEGER,
    },
   role:{
      type:DataTypes.ENUM,
      values:['admin','user'],
      allowNull:false
    },
    email:{
      type: DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        isEmail:true,

      }},
      password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdDate:{
        type: DataTypes.DATE
    },
    lastLogin: {
        type: DataTypes.STRING
    },
    
},);
module.exports=User;