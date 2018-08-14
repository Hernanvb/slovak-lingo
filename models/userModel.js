var mongoose = require('mongoose');
var Quiz = require('./quizModel');
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email:    String,
    quizzes: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Quiz"
                }
             ],
    completed:  Number
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);