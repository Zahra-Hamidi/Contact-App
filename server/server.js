const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRouter = require('./router/contactRouter');
mongoose.connect("mongodb://localhost:27017/ContactApp",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/contact',contactRouter);


app.listen(5000,()=>{
    console.log("server is ready");
})