import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.status(200).json({
        msg: "Hello"
    })
})

import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(process.env.PORT, process.env.HOSTNAME, (error) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log(`MONGODB CONNECTED`);
    })
    .catch((error) => {
        console.log(error);
        console.log(`CONNECTION FAILED`);
        process.exit(1);
    })
    if(error) throw error;
    console.log(`SERVER RUNNING http://${process.env.HOSTNAME}:${process.env.PORT}`)
})