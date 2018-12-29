const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

stateSchema.set('timestamps', true);

module.exports = mongoose.model('State', stateSchema);