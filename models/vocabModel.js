var mongoose = require('mongoose');

var Schema	 = mongoose.Schema;

var vocabSchema = new Schema ({
      english: String,
      slovak:  [String],
      category: String,
      engDefinition: { type: String, default: '' },
      svkDefinition: { type: String, default: '' },
      engSentence: { type: String, default: '' },
      svkSentence: { type: String, default: '' }
});

var Vocabulary = mongoose.model('Vocabulary', vocabSchema);

module.exports = Vocabulary;