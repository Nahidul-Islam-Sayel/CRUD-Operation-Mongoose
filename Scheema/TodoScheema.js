const mongoose = require('mongoose');

const todoScheema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    statuse:{
        type: String,
        enum: ['active', 'inactive']
    },
    Date:{
        type: Date,
        default: Date.now
    }
});

module.exports = todoScheema;