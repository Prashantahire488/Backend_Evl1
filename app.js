const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());



const companySchema = new mongoose.Schema({
    comp_name:{type:String},
    comp_skill:{type:String},
    location:{type:String},
    notice_period:{type:Number},
    comp_rating:{type:Number},
    job_type:{type:String},
    job_vacancy:{type:Number},
},{
    versionKey:false,
    timestamps:true
});


const Company =  mongoose.model("Company",companySchema);


app.get("/company/:comp_name",async (req,res)=>{
    try{
        const company = await Company.find({comp_name:req.params.comp_name}).lean().exec();
        res.status(201).send(company);
    }
    catch(err){
        res.status(400).send(err);
    }
});







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