const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "The author must have a name."],
        minlength: [3, "Author name must be at least 3 characs"]
    },
    books: { 
        type: Array,
    },
    quote:{
        type: String,
        required: [true, "Please type out your favorite quote from this author."]
    },
    genre: { 
        type: String,
        required: [true, "The author must have a genre."]
    },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);

