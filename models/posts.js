const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    email: {type: String,
         required: true},
    name: {type: String,
        required: true},
    content: String,
    image: String,
    date: {type: String,
        required: true},
    upi: String
})

module.exports = mongoose.model('Post' , PostSchema);
