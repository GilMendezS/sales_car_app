const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Car'
    }
});
imageSchema.set('timestamps', true);

module.exports = mongoose.model('Image', imageSchema);
