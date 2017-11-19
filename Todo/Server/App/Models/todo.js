var Mongoose= require('mongoose');
var Schema= Mongoose.Schema;

var TodoSchema= new Schema({
    userId: {type: Schema.Types.ObjectId, required: true},
    todo: {type: String, Required: true},
    description:{type: String},
    dateCreated:{type: Date, Defult: Date.now},
    dateDue: {type: Date, Defult: Date.now},
    completed: {type: Boolean, Defult: false},
    file: {fileName: String, originalName: String}



})

module.exports=Mongoose.model('Todo', TodoSchema);