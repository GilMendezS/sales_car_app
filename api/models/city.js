const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'State'
    }
})
module.exports = mongoose.model('City', citySchema);