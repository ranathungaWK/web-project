import mongoose from "mongoose";
import product from "./product";

const orderSchema = new mongoose.Schema({
    userId:{},
    items:[{
        product:{type:String, required:true , ref:'product'},
        quantity:{type:Number, required:true}
    }],
    amount: {type: Number, required:true},
    address: {type: String , required:true , ref:'address'},
    status: {type:String , default:'order placed'},
    paymentType : {type:String , required:true},
    ispaid : {type:Boolean , required:true, default:false},

},{timestamps:true})

const Order = mongoose.models.order || mongoose.model('order' , orderSchema)

export default Order;