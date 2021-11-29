const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/company");
}

const start = async () => {
    await connect();
    app.listen(5000, ()=> {
        console.log("Listning port 5000 :)");
    })
}


start();