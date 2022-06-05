const userSchema = require('../models/User');
const bcrypt = require('bcrypt');

const login = (req, res) => {
    try {
       let user = await userSchema.findOne({email:req.body.email}) ;
       if(user){
         let myPass = req.body.password;
         user.comparePassword(myPass,(err,ismatch)=>{
             if(ismatch){
                res.status(200)
             }else{

             }
         })
       }else{
           throw error= "user with this email dose not exixt";
       }
    } catch (error) {
        
    }
};


const AuthController = {
    login
};

module.exports = AuthController;