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
    let spChar = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
    // console.log(name);
    for (var i = 0; i < name.length; i++) {
       if (spChar.indexOf(name.charAt(i)) != -1) {
           return false;
       }
    } 
    return true;
};
var validatePassword = function(password) {
    let len = password.length;
    if(len<=10){
     return true;
    }
    return false
};
var validatePhone = function(phone) {
    const phonestr = JSON.toString(phone)
    let len = phonestr.length;
    if(len == 10){
     return true;
    }
    return false
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
        validate:[validatePassword,"password can not contain more then 10 characters"]
    },
    phone:{
        type:Number,
        maxlength :10,
        minlength:10,
        validate:[validatePhone,"phone must contain 10 digits"]
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

if (password= !null) {
    // Events
    userSchema.pre("save", function (next) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
          this.password = hash;
          this.saltSecret = salt;
          next();
        });
      });
    });
  
    //for comparing the users entered password with database duing login
    userSchema.methods.comparePassword = function (candidatePassword, callBack) {
      bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return callBack(err);
        callBack(null, isMatch);
      });
    };
}

const userModel = Mongoose.model('user',userSchema);
module.exports =  userModel;
// User Model
