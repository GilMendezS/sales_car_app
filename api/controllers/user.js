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
exports.signIn = async (req, res, next) => {
    if(req.body.email && req.body.password){
        let userFound = null;
        User.findOne({email: req.body.email})
        .then(user => {
            userFound = user;
            return user.checkPassword(req.body.password)
        })
        .then(result => {
            if(result){
                return userFound.generateToken();
            }
            else {
                throw new Error('Incorrect password');
            }
        })
        .then(token => {
            return res.status(200).json({
                message: 'Login succesfull',
                token: token,
                user: userFound
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(401).json({
                message:'Invalid credentials',
                error
            })
        })
        
    }
    else {
        return res.status(400).json({
            message: 'Email and password are required'
        })
    }
}
exports.getUser = async(req, res, next) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId)
        return res.status(200).json({
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching the user',
            error
        });
    }
}