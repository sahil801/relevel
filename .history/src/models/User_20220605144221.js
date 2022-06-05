const Mongoose  = require ("mongoose");

const userSchima = new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true
    },
    phone:{
        type:Number,
    },
    Age :{
        type:,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true
    },
},{
    timestamps: true
})

const userModel = Mongoose.model('user',userSchima);
module.exports =  userModel;
// User Model

 Phone Number, Email ID, Age, Gender.