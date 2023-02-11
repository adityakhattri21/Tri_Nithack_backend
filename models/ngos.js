const mongoose = require('mongoose');


const NGOSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    mobile: Number,
    orgname: String,
    ngotype: String,
    founded: Number,
    type: String,
    bio: String,
    img: String
});

module.exports = mongoose.model('NGO' , NGOSchema);