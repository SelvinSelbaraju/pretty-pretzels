// Pull in the dependency and create a variable to help us easily create Schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// MongoDB Databases are formed of collections of documents, documents are like rows
// Each document has fields which are attributes, similar to columns 

// Create the Schema, each of these are fields
// Each entry will have a value for these fields (or a null) 
const basketSchema = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        basketProducts: {
            type: Array,
            default: []
        }
    }
);

// Creates a model which is used to generate documents for a specific collection
// First argument is the collection these documents will belong in
// Mongooose automatically looks for the lowercase plural of the argument you pass 
const Basket = mongoose.model("Basket",basketSchema)

module.exports = Basket;