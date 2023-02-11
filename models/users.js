const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    gender : String,
    mobile: Number,
    age: Number,
    type: String,
    bio: String,
    interests:{
        type: [String]
    },
    img: String
})

module.exports = mongoose.model('Users' , UserSchema);