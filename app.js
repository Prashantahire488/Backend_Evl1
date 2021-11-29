const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());



const companySchema = new mongoose.Schema({
    Name:{type:String},
    type:{type:String},
    ratings:{type:Number},
    city:{type:String},
    skills:{type:String},
    period:{type:Number},
},{
    versionKey:false,
    timestamps:true
});


const Company =  mongoose.model("Company",companySchema);


app.get("/company/:Name",async (req,res)=>{
    try{
        const company = await Company.find({Name:req.params.Name}).lean().exec();
        res.status(201).send(company);
    }
    catch(err){
        res.status(400).send(err);
    }
});



app.get("/comp",async(req,res)=>
{
    try{
        const company= await Company.find({type: {$req:"work from Home"}});

        res.status(201).send(company);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});


app.get("/comprating",async(req,res)=>
{
    try{
        const company = await Company.find().sort({ratings:2}).lean().exec();
        res.status(400).send(company);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

app.get("/city",async(req,res)=>
{
try{
    const company=await Company.find({city:"Banglore"}).lean().exec();
    res.status(201).send(company);
}

catch(err)
{
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