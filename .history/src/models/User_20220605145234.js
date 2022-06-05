const Mongoose  = require ("mongoose");

const userSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength :20
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
        ma
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

const userModel = Mongoose.model('user',userSchema);
module.exports =  userModel;
// User Model
