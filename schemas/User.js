const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');

const User=sequelize.define('user',{
    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    consumerNumber:{
      type:DataTypes.BIGINT,
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
    currentThreshold:{
     type:DataTypes.INTEGER,
     allowNull:false
    },
    status:{
      type:DataTypes.ENUM,
      values:['active','inactive'],
      defaultValue: 'inactive'
    },
    lastLogin: {
        type: DataTypes.STRING
    },
    
},);

//Hashing password before storing in database
User.beforeCreate(async function(user,options){
    const salt =  await bcrypt.genSalt(10);
    return user.password = await bcrypt.hash(user.password, salt);
  
  });

  User.prototype.jwtWebToken=function(){
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })
  }
  
  User.prototype.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
  }
module.exports=User;