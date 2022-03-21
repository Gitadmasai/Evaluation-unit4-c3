const express = require("express");

const connect = require("./config/Database");

const userController = require("./controllers/user.controller");
 
const app=express();

app.use("/users",userController);

const start = async () => {
    await connect();

    app.listen(2244, () => {
        console.log("listening port")
    });
};

module.exports = start;