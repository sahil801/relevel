const Mongoose  = require ("mongoose");
const bcrypt = require('bcrypt');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
var validateAge = function(age) {
    if(age<=99 && age>=10){
        return true;
    }
    return false;
};
var validateName = function(name) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(name)){
        return true;
    } else {
        return false;
    }
};
const userSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength :20,
        validate:[validateName,'name can not contain any special character']
    },
    email :{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'invalid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'invalid email ']
    },
    password :{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        maxlength :10,
        minlength:10
    },
    Age :{
        type:Number,
        validate : [validateAge,'invalid Age number']
    },
    gender :{
        type:String,
        enum :['male','female']
    },
},{
    timestamps: true
});

if(pas)

const userModel = Mongoose.model('user',userSchema);
module.exports =  userModel;
// User Model
