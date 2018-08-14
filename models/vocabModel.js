var mongoose = require('mongoose');

var Schema	 = mongoose.Schema;

var vocabSchema = new Schema ({
      english: String,
      slovak:  [String],
      category: String
});

var Vocabulary = mongoose.model('Vocabulary', vocabSchema);

module.exports = Vocabulary;