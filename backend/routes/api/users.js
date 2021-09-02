const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load Input Validation 
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load in User model for MongoDB
const User = require("../../models/User");

// Creating the Register route
// @route POST api/users/register
// @desc register user
// @access public
router.post("/register", (req, res) => {
    // Form Validation 
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            return res.status(400).json({ email: "Email already in use" })
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

// Hash password before saving to DB
// A salt (random string) is added which modifies the password, so the same passwords generate unique hashes
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});


// Creating the login endpoint
// @route /api/users/login
// @desc login endpoint
// access Public
router.post("/login", (req, res) => {
    // Form Validaiton 
    const { errors, isValid} = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then((user) => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({emailnotfound: "Email not found"});
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // Successful login so create JWT payload
                const payload = {
                    id: user.id,
                    name: user.name
                };
            // Sign the token
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926 // 1 Year
                },
                (err, token) => {
                    res.json({
                        sucess: true,
                        token: "Bearer " + token
                    });
                }
            );
        } else {
            return res.status(400).json({ passwordincorrect: "Password incorrect" });
        }
        });
    });
});

module.exports = router;