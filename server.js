const express=require('express');
const dotenv=require('dotenv');
const logger=require('morgan');

//initialize express app
const app=express();

//loads all env variables
dotenv.config({path:"./config/config.env"});

//Body parsing
app.use(express.json())
app.use(express.urlencoded({extended:true}));


const PORT=process.env.PORT || 5000

const server=app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`))

 //Handling unhandled promise rejections
 process.on('SequelizeAccessDeniedError', (error, promise) => {
    console.log(`Error:${error.message}`);

    //Close the server and exit process
    server.close(() => process.exit(1));
})
