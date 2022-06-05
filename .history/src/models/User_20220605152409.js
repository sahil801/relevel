const Mongoose  = require ("mongoose");

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
        validate
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
        maxlength :10
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
})

const userModel = Mongoose.model('user',userSchema);
module.exports =  userModel;
// User Model
