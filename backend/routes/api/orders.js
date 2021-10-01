const express = require('express');
const router = express.Router();
const Order = require("../../models/Order");
const Basket = require("../../models/Basket");

// Post a basket to the orders database
router.post("/orders", (req, res) => {
    const newOrders = new Order({
        userId: req.query.userId,
        productsPurchased: req.body.basketProducts
    });
    newOrders.save()
    .then(() => {
        Basket.deleteMany({ userId: req.query.userId})
        .then(() => console.log("deleted")) 
    })
    .then(orders => res.json(orders))
    .catch(err => console.log(err))
});

module.exports = router;