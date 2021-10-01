const express = require('express');
const router = express.Router();
const Order = require("../../models/Order");

// Post a basket to the orders database
router.post("/orders", (req, res) => {
    const newOrders = new Order({
        userId: req.query.userId,
        productsPurchased: req.body.basketProducts
    });
    newOrders.save()
    .then(orders => res.json(orders))
    .catch(err => console.log(err))
});

module.exports = router;