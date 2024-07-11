const express = require('express');
const route = express.Router();

const {getAddItem,postAddItem} = require('../Controller/adminController');

const multer = require('multer');
const PATH = require('path');

const fileStorage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,PATH.join(__dirname,'..','Uploads'),(error,data)=>{
            if(error) throw error
        });
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname,(error,data)=>{
            if(error) throw error
        });
    }
});

const fileFilter = (req,file,callback)=>{
    if(
        file.mimetype.includes("jpg") ||
        file.mimetype.includes("png") ||
        file.mimetype.includes("jpeg") ||
        file.mimetype.includes("webp")
    ){
        callback(null,true);
    }else{
        callback(null,false);
    }
}

const upload = multer({
    storage:fileStorage,
    fileFilter:fileFilter,
    limits:{fieldSize:1024*1024*5},
})

const upload_type = upload.array("productImage",4);


route.get("/addItem",getAddItem);
route.post("/postAddItem",upload_type,postAddItem);

module.exports = route;