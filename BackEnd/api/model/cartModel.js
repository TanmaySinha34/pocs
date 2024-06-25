const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cartSchema = Schema({
    _id:Schema.Types.ObjectId,
    dishType:{type:String,require:true},
    price:{type:Number,require:true},
})

module.exports = mongoose.model("cart",cartSchema) 