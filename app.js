require('dotenv').config({PATH:"./.env"});
const express = require('express');
const app = express();

 require("./models/dbconfig").dbconnection();

 //routes
 const userRouter = require("./routes/userRoute");
const morgan = require('morgan');


 //logger
 const logger = require("morgan");
 app.use(logger("tiny"))

 //body pasrer
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

 app.use("/api/user/", userRouter);


 app.all("*", (req, res) => {   
     res.status(404).json({
        sucess: false,
        message:`${req.url} route not found`,

     })
     });


app.listen(process.env.PORT,()=>{
    console.log(`server runing on port:${process.env.PORT}`);
})