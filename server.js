require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const Path = require('path');
const adminRoute = require('./Router/adminRouter')
const PORT = process.env.PORT || 5700;


server.set('view engine','ejs');
server.set('views','View');

server.use(express.urlencoded({extended:true}));
server.use(express.static(Path.join(__dirname,'Public')));
server.use(express.static(Path.join(__dirname,'Uploads')));

server.use(adminRoute);
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Database Connection is Successfull");
    server.listen(PORT,()=>{
        console.log(`The Server is running at http://localhost:${PORT}/addItem`);
    })
}).catch(error=>{
    console.log("Failed to Connect With The Database",error);
})



