const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);

//The Note model is very simple. It contains a title and a content field. I have also added a timestamps option to the schema.

//Mongoose uses this option to automatically add two new fields - createdAt and updatedAt to the schema.