const  Mongoose  = require( "mongoose");

const Connection = async ()=>{
    try {
        await Mongoose.connect("mongodb://localhost:27017/dbRelevel");
        console.log("connection Success");
    } catch (error) {
        console.log({"DBconection Error": error});
    }
}
module.exports = Connection