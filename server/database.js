const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/ToDos_react?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const connection = ()=>{
    mongoose.connect(URI,()=>{
        console.log("success!!");
    })
}

module.exports = connection;