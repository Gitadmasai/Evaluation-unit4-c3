const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/validation",{
        useNewUrlParse:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:true,
    })
};
module.exports=connect;