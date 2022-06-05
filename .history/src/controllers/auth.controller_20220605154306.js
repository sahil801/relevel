const userSchema = require('../models/User');
const bcrypt = require('bcrypt');

const login = (req, res) => {
    try {
       let user = await userSchema.findOne({email:req.body.email}) ;
       let myPass = req.body.password;
    } catch (error) {
        
    }
};


const AuthController = {
    login
};

module.exports = AuthController;