const mongoose = require('mongoose')
const Cart = require('../model/cartModel');


//code for post request
exports.create_cart = async (req, res, next) => {
    try {
        const cartObj = new Cart({
            _id: new mongoose.Types.ObjectId(),
            dishType: req.body.dishType,
            price: req.body.price
        })
        
        const data = await cartObj.save()
        res.status(200).json({
            code: 1,
            msg: "cart created successfully",
            createdcart: data,
            error: null
        });
    } catch (err) {
        res.status(500).json({
            code: 0,
            msg: "Kuch galat hua",
            createdcart: null,
            error: err
        });
    }
}


//code for get cart list
exports.get_carts = async (req, res, next) => {
    try {
        const data = await Cart.find();
        if (data) {
            res.status(200).json({
                code: 1,
                msg: "This is simple get request for cart",
                data: data,
                error: null
            })
        } else {
            res.status(200).json({
                code: 1,
                msg: "No data found",
                data: null,
                error: null
            })
        }
    } catch (error) {
        res.status(500).json({
            code: 0,
            msg: "Kuch galat hua",
            data: null,
            error: error
        })
    }
}

//code for getting single cart
exports.get_cart_ById = async (req, res, next) => {
    try {
        const data = await Cart.findById(req.params.cartId);
        if (data) {
            res.status(200).json({
                code: 1,
                msg: "This is simple get request for one cart",
                data: data,
                error: null
            })
        }else{
            res.status(200).json({
                code: 1,
                msg: "No cart available for given ID",
                data: null,
                error: null
            })
        }

    } catch (error) {
        res.status(500).json({
            code: 0,
            msg: "Kuch galat hua",
            data: null,
            error: error
        })
    }
}

//code for update single cart
exports.update_cart = async (req, res, next) => {
    try {
        const data = await Cart.findByIdAndUpdate(req.params.cartId,req.body,{new:true,runValidator:true});
        if (data) {
            res.status(200).json({
                code: 1,
                msg: "This is simple put request for single cart",
                data: data,
                error: null
            })
        }else{
            res.status(200).json({
                code: 1,
                msg: "No cart available for given ID",
                data: null,
                error: null
            })
        }

    } catch (error) {
        res.status(500).json({
            code: 0,
            msg: "Kuch galat hua",
            data: null,
            error: error
        })
    }
}


//code for delete single cart
exports.delete_cart = async (req, res, next) => {
    try {
        const data = await Cart.findByIdAndDelete(req.params.cartId);
        if (!data) {
            res.status(404).json({
                code: 1,
                msg: "No cart found",
                data: data,
                error: null
            })
        }else{
            res.status(404).json({
                code: 1,
                msg: "Data Deleted",
                data: data,
                error: null
            })
        }

    } catch (error) {
        res.status(500).json({
            code: 0,
            msg: "Kuch galat hua",
            data: null,
            error: error
        })
    }
}

