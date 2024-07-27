const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
    shortID : {
        type : String,
        required : true
    },
    userUrl : {
        type : String,
        required : true,
    },
    visited : [{timestamps : { type : Number}}]
},{timestamps : true});

const URL = mongoose.model("url", urlSchema);

module.exports = URL;