const userSchema = require('../models/User');
const bcrypt = require('bcrypt');

const login = (req, res) => {
    try {
       let user = await userSchema.findOne({email:req.body.email}) ;
       if(user){
        let myPass = req.body.password;
       }else{
           throw error= " in"
       }
       
    } catch (error) {
        
    }
};


const AuthController = {
    login
};

module.exports = AuthController;