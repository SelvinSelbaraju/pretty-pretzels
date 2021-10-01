// Import the dependencies 
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require('cors');

// Import routes
const users = require("./routes/api/users");
const products = require("./routes/api/products");
const basket = require("./routes/api/basket");
const orders = require("./routes/api/orders");

// Create an instance of express and use cors 
const app = express();
app.use(cors())

// Tell the server to use middleware to parse request bodies with JSON / urlencoded
app.use(
    express.json()
);
app.use(
    express.urlencoded(
        {extended: false}
    )
);

// Config the DB
const dbURI = require('./config/keys').dbURI;

// Connect to the database
mongoose.connect(
    dbURI,
    {useNewUrlParser: true}
)
.then(()=> console.log("Successfully Connected to MongoDB!"))
.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api", basket);
app.use("/api", orders);

// Listen to requests from a specific port
const port = 5000;

app.listen(
    port,
    () => console.log(`Listening for requests on ${port}`)
)