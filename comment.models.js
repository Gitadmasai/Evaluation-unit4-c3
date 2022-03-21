const mongoose= require("mongoose")

const commentSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
    }
},
{
    timestamps:{type:String,required:true}
})

const Comment = mongoose.model("comment", commentSchema);

module.exports=Comment