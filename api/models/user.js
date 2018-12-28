const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const enviroment = require('../config/enviroment');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phone: {
        type: String,
        required: false
    },
    adddres: {
        type: String,
        required: false,
    }
});
userSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10, (err, hash) => {
        if(!err){
            this.password = hash;
            next();
        }
        else {
            throw new Error('Error in hashing password');
        }
    })
})
userSchema.methods.checkPassword = function(passwordToValidate){
    return bcrypt.compare(passwordToValidate, this.password)
        .then(result => {
            return result;
        })
        .catch(err => {
            throw err;
        })
}
userSchema.methods.generateToken = function(){
    return new Promise((resolved, rejected) => {
        try {
            const token = jwt.sign({
                _id: this._id,
                name: this.name,
                lastname: this.lastname,
                email: this.email,
                phone: this.phone
            }, enviroment.private_key_jwt, {
                expiresIn: 60 * 60 * 24 * 7
            })
            resolved(token)
        } catch (error) {
            rejected(error)
        }
    })
}
userSchema.set('timestamps', true); 

module.exports = mongoose.model('User', userSchema);