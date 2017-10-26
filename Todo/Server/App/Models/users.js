var mongoose= require('mongoose');
var Schema= mongoose.schema;

var UserSchema= new Schema9({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    status: {type: Boolean, Defult: true},
    email: {type: String, Required: true, Unique: true},
    password: {type: String, Required: true},
    dateRegistered: {type: Date, Defult: Date.now},


})
model.exports=Mongoose.model('users', TodoSchema);