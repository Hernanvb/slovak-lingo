var mongoose	= require('mongoose');
var Vocabulary  = require('./vocabModel')

var Schema	 = mongoose.Schema;

var quizSchema = new Schema({
   	date: Date,
	score: Number,
	progress: Number,
	numberOfQuestions: Number,
	completed: Boolean,
	quiz: [
			{ 
				type: mongoose.Schema.Types.ObjectId,
				ref: "Vocabulary"
			}
          ],
    questionIndex: Number,
	answers: [String],
	results: [Boolean],
	categories: [String],
	flashcard: { type: Boolean, default: false }
});

var Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;