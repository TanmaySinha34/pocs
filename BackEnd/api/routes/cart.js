const express = require ('express');
const router = express.Router();
const multer  = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})

const cartModelRequest = require('../controller/cart.model')



//get request
router.get("/",cartModelRequest.get_carts);



//post request for cart
router.post("/",cartModelRequest.create_cart);


//put request
router.put("/:cartId",cartModelRequest.update_cart);



//get for single cart
router.get("/:cartId",cartModelRequest.get_cart_ById);


//delete cart
router.delete("/:cartId",cartModelRequest.delete_cart);


module.exports = router;