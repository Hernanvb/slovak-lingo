// netlify/functions/getVocab.js
const mongoose = require('mongoose');
const Vocab = require('../../models/vocab');

mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

exports.handler = async (event, context) => {
  try {
    const vocabs = await Vocab.find();
    return {
      statusCode: 200,
      body: JSON.stringify(vocabs)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch vocab data' })
    };
  }
};
