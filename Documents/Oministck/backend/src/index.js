const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const routes = require("./routes");
const cors = require("cors")


const app = express();

mongoose.connect(process.env.DbConnect, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,})

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT, () =>{
    console.log("server starting in http://localhost:3000")
});
