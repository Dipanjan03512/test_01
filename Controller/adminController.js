
const adminModel = require('../Model/adminModel');

const getAddItem = (req,res)=>{
    res.render("user/addProduct",{
        title:'Add Product'
    })
}

const postAddItem = async (req, res) => {
    try {
        console.log("The add details Collected from the Form: ", req.body, req.files);

        let imageArr = Array.isArray(req.files) ? req.files.map(value => value.path) : [];
        let sizeArr = Array.isArray(req.body.size) ? req.body.size.map(value => value) : [req.body.size];
        let colorArr = Array.isArray(req.body.color) ? req.body.color.map(value => value) : [req.body.color];

        let formData = new adminModel({
            product_Name: req.body.productName,
            product_Description: req.body.productDescription,
            product_Price: req.body.productPrice,
            product_Category: req.body.productCategory,
            product_Size: sizeArr,
            product_Color: colorArr,
            product_Image: imageArr
        });

        let saveData = await formData.save();
        if (saveData) {
            console.log("The Product data Added in the database Successfully");
            res.end();
        }

    } catch (error) {
        console.log("Failed to save data into the database", error);
    }
}





module.exports= {getAddItem,postAddItem};