const userSchema = require('../models/User');

const login = (req, res) => {
    try {
       let user = await userSchema.findOne() 
    } catch (error) {
        
    }
};


const AuthController = {
    login
};

module.exports = AuthController;