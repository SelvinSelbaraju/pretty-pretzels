const express = require("express");
const router = express.Router();

const Product = require('../../models/Product');

// Creating get the product route 
router.get("/list", (req, res) => {
    Product.find({}, (err, data) => {
        res.send({ products: data})
    })
});

// Add a new product
router.post("/add", (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        dateAdded: Date.now()
    });
    newProduct
    .save()
    .then(product => res.json(product))
    .catch(err => console.log(err));
});

module.exports = router;
