const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    productsPurchased: {
        type: Array,
        required: true 
    },
    timePurchased: {
        type: Date,
        default: Date.now()
    }
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;