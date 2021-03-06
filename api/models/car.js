const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        required: true,
    },  
    mileage: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required:false
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Status'
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'City'
    },
    location: {
        longitude: Number,
        latitude: Number,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})
carSchema.set('timestamps', true);

module.exports = mongoose.model('Car', carSchema);