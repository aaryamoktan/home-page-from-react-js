const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const userroute = require("./routes/user")
const authrooute = require("./routes/auth");
const postroute =require("./routes/post")
dotenv.config();
mongoose.connect(process.env.MONGO_URL,()=>
{
    console.log("connectes the mongodb")
})
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(helmet())
app.use(morgan("common"))

app.use("/api/user",userroute)
app.use("/api/auth",authrooute)
app.use("/api/post",postroute)
const PORT = process.env.PORT
app.listen(PORT,(req,res)=>
{
    console.log(`welcome to my world ${PORT}`);
})