const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());



const companySchema = new mongoose.Schema({
    company_name:{type:String},
    req_skill:{type:String},
    job_location:{type:String},
    notice_period:{type:Number},
    rating:{type:Number},
    job_type:{type:String},
    vacancy:{type:Number},
},{
    versionKey:false,
    timestamps:true
})












const connect = () => {
    return mongoose.connect("mongodb://localhost/company");
}

const start = async ()=>{
    await connect();
    app.listen(3000,()=>{
        console.log("Listning the port 3000.");
    });
}

start();