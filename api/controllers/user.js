const User = require('../models/user');
exports.signUp = async (req, res, next) => {
    const user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
    });
    try {
        await user.save();
        return res.status(200).json({
            message: 'User created sucessfully! :)',
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error creating the user :(',
            error
        });
    }
}