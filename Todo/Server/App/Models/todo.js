var mongoose= require('mongoose');
var Schema= mongoose.schema;

var TodoSchema= new Schema9({
    userId: {type: Schema.Types.ObjectId, required: true},
    todo: {type: String, Required: true},
    description:{type: String},
    dateCreated:{type: Date, Defult: Date.now},
    dateDue: {type: Date, Defult: Date.now},
    completed: {type: Boolean, Defult: false},
    file: {fileName: String, originalName: String}



})
model.exports=Mongoose.model('Todo', TodoSchema);