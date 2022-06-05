const Mongoose  = require ("mongoose");

const userSchima = new Mongoose.Schema({
    Phone
},{
    timestamps: true
})

const userModel = Mongoose.model('user',userSchima);
module.exports =  userModel;
// User Model

 Phone Number, Email ID, Age, Gender.