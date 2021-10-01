const express = require('express');
const router = express.Router();

const Basket = require('../../models/Basket');

// Get user's basket
router.get("/basket", (req, res) => {
    Basket.findOne({userId: req.query.userId}, (err, data) => {
        res.send({basket: data})
    });
});

// Post user's basket if it doesn't exist
router.post("/basket", (req, res) => {
    if (req.query.userId) {
        const newBasket = new Basket({
            userId: req.query.userId,
            basketProducts: req.body.basketProducts        
        });
        Basket.findOneAndUpdate({userId: req.query.userId}, {basketProducts: req.body.basketProducts}, (err, data) => {
            console.log(data);
            if (!data) {
                newBasket.save()
                .then(basket => res.json(basket))
                .catch(err => console.log(err));
            }
        });
    }
});

module.exports = router;