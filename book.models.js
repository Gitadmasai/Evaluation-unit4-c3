const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    like:{type:Number,required:true},
    coverImage:{type:String,required:true},
    content:{type:String,required:true},
},
{
    timestamps:{type:String,required:true}
});

const Book = mongoose.model("book",bookSchema);

module.exports=Book;






