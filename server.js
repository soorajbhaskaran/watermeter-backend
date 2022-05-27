const express=require('express');
const dotenv=require('dotenv');
const logger=require('morgan');
const sequelize=require('./config/db');
const error=require('./middlewares/error');
const cookieparser=require('cookie-parser');

//schema initialize
const Muncipality = require('./schemas/Muncipality');
const User = require('./schemas/User');

//initialize express app
const app=express();

//loads all env variables
dotenv.config({path:"./config/config.env"});

//Body parsing
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//connecting to database
const connectDb=async()=>{
    try {
      await sequelize.authenticate();
      console.log('Connected to database successfully');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
connectDb()

//syncing models sequelize
const syncModel=async()=>{
    try{
        await User.sync();
        await Muncipality.sync()
       
        console.log('Successfully synced all models');
        }catch(err){
            console.error('Failed in syncing models',err)
        }
        
}
syncModel()

//Initialize routes
const auth=require("./routes/auth");

//routes
app.use("/api/user",auth);

//Initialize morgan
app.use(logger("dev"));

//cookie parser
app.use(cookieparser())

//Error Handler
app.use(error);


const PORT=process.env.PORT || 5000

const server=app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`))

 //Handling unhandled promise rejections
 process.on('SequelizeAccessDeniedError', (error, promise) => {
    console.log(`Error:${error.message}`);

    //Close the server and exit process
    server.close(() => process.exit(1));
})
