const mongoose = require("mongoose");
const { Schema } = mongoose;

const TODOSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:'personal'
    }
})

module.exports = mongoose.model('todo',TODOSchema);