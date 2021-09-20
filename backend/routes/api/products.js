const express = require("express");
const router = express.Router();

const Product = require('../../models/Product');

// Creating get the product route 
router.get("/list", (req, res) => {
    Product.find({}, (err, data) => {
        res.send({ products: data})
    })
});

module.exports = router;
