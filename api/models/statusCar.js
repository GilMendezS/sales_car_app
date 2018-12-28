const mongoose = require('mongoose');

const statusCarSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    active : {
        type: Boolean,
        required: true,
        default: true
    }
});
statusCarSchema.set('timestamps', true);

module.exports = mongoose.model('Status', statusCarSchema);