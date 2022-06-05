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
        type:Number,
    },
    gender :{
        type:String,
    },
},{
    timestamps: true
})

const userModel = Mongoose.model('user',userSchima);
module.exports =  userModel;
// User Model
