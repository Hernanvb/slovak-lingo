var mongoose = require('mongoose');
var Quiz = require('./quizModel');
var Vocabulary  = require('./vocabModel')
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
    completed: Number,
    vocabAttempts: [
        {
            vocab: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Vocabulary"
            },
            attempts: {
                type: [Boolean],
                validate: [arrayLimit, '{PATH} exceeds the limit of 3'] // ensures array has at most 3 elements
            }
        }
    ]
});

// Validator to ensure attempts array does not exceed 3 elements
function arrayLimit(val) {
    return val.length <= 3;
}

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);