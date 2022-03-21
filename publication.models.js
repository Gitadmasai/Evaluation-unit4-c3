 const mongoose = require("mongoose")

 const publicationSchema = new mongoose.Schema({
     name:{type:String,required:true}
 },
 {
     timestamps:{type:String,required:true}
 });
 const Publication = mongoose.model("publication",publicationSchema);

 module.exports=Publication;