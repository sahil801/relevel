const userSchema = require('../models/User');
const bcrypt = require('bcrypt');

const login = (req, res) => {
    try {
       let user = await userSchema.findOne({email:req.body.email}) ;
       if(user){
         let myPass = req.body.password;
         user.comparePassword(myPass,(err,ismatch)=>{
             if(ismatch){
                res.status(200).json({
                    "message":"login success"
                })
             }else{
                res.status(401).json({
                    "message":"invalid Password"
                })
             }
         })
       }else{
           throw error= "user with this email dose not exixt";
       }
    } catch (error) {
        res.status(401).json({
            "message":"nvalid Password"
        })
    }
};


const AuthController = {
    login
};

module.exports = AuthController;