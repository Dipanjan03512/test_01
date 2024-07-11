const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addProductSchema = new Schema({
    product_Name:{
        type:String,
        required: true
    },
    product_Description:{
        type:String,
        required: true
    },
    product_Category:{
        type:String,
        required: true
    },
    product_Price:{
        type:Number,
        required: true
    },
    product_Size:{
        type:[String],
        required: true
    },
    product_Color:{
        type:[String],
        required: true
    },
    product_Image:{
        type:[String],
        required: true
    },
},{
    timestamps:true,
    versionKey:false
});

const adminModel = new mongoose.model("Products_Data",addProductSchema);
module.exports = adminModel;