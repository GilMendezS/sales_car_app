const jwt = require('jsonwebtoken');
const env = require('../config/enviroment');
exports.checkToken = (req, res, next) => {
    if(req.headers.authorization){
        try {
            const token = req.headers.authorization;
            const data = jwt.verify(token, env.private_key_jwt)
            req.user = data;
            next();
        } catch (error) {
            return res.status(403).json({
                message:'Invalid token'
            })
        }
    }
    else {
        return res.status(403).json({
            message: 'Token not provided'
        })
    }
    
}