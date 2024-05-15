// netlify/functions/addVocab.js
const mongoose = require('mongoose');
const Vocab = require('../../models/vocabModel');

mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const newVocab = new Vocab(data);
    const savedVocab = await newVocab.save();
    return {
      statusCode: 200,
      body: JSON.stringify(savedVocab)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to add vocab data' })
    };
  }
};
