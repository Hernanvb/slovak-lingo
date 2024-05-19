var express = require('express');
var router  = express.Router();
var randomWordGen = require('../controllers/randomWord');

var randomWord; // holds the object returned from randomWordGen {engWord: svkWord}

const User          = require('../models/userModel');
const Quiz          = require('../models/quizModel');
const Vocabulary    = require('../models/vocabModel');
var mw              = require('../middleware');
var helper          = require('../helper');

router.get('/:uname', mw.isLoggedIn, function(req, res, next) {
  randomWordGen.categoryLength(function (categoriesLength) {
        res.render('dashboard/flashcards/generate-flashcards', {
            header: "Slovak Lingo - Flashcard Generator",
            title: 'Flashcard Generator', categoriesLength: categoriesLength
        });
    });
});


router.post('/:uname', mw.isLoggedIn, function(req, res, next) {
    req.session.formData = req.body;
    randomWordGen.vocab(req.session.formData.categories, function (vocabulary) {
        req.session.flashcardData = vocabulary;
        req.session.numOfFlashcards = req.session.formData.numOfQuestions;
        //console.log("Quiz Gen POST: " + req.session.vocabulary);
        res.redirect('/flashcards/' + req.params.uname + '/start');
    });
});

router.get('/:uname/start', function(req, res, next) {
//   console.log("Start Route");
  if (Array.isArray(req.session.flashcardData) && req.session.flashcardData.length > 0) {
    // console.log("In Start: " + JSON.stringify(req.session.flashcardData));
    var data = [];
    var categoryOrganizer = {}; // this will organize the selected random words into their respective category arrays
                                // The vocabulary passed to quiz is an array of arrays holding the random words
                                // vocabulary = [[categories[words]], [categories[words]], [categories[words]], ... ]
    req.session.selectedVocabulary = [];
    req.session.currentQuiz = [];

    for (var i = 0; i < req.session.numOfFlashcards; i++) {
      var wordPair = {};
      var randomWord = randomWordGen.word(req.session.flashcardData);

      if (!randomWord)
        break;


      // save the quiz on this step before going to /:uname/quiz route
      req.session.currentQuiz.push(randomWord);
      if (categoryOrganizer[randomWord.category]) {
        categoryOrganizer[randomWord.category].push(randomWord);
      } else {
        categoryOrganizer[randomWord.category] = [];
        categoryOrganizer[randomWord.category].push(randomWord);
      }

      wordPair.english = randomWord.english;
      wordPair.slovak = randomWord.slovak;
      wordPair.category = randomWord.category;
      data.push(wordPair);
    }

    // Save the categories
    req.session.flashcardsCategories = Object.keys(categoryOrganizer);

    // Push the vocabulary array
    Object.values(categoryOrganizer).forEach(function (categoryArray) {
      req.session.selectedVocabulary.push(categoryArray);
    });

    // console.log("Data: " + JSON.stringify(data));
    res.render('dashboard/flashcards/flashcards', {
        header: "Slovak Lingo - Flashcards",
        data: data
    });
  }
  else {
    res.redirect('/flashcards/' + req.params.uname);
  }
});

router.get('/:uname/quiz', function (req, res, next) {
   // formData has property numOfQuestions and object categories that holds all the selected categories by the user
   req.session.formData                 = {};
   req.session.formData.numOfQuestions  = req.session.numOfFlashcards; // default number of flashcards
   req.session.formData.categories = req.session.flashcardsCategories; // these categories will be used by sendToDb middleware if the quiz is saved
   req.session.correctCounter = 0; // counter for correct answers
   req.session.wrongCounter   = 0; // counter for wrong answers
   req.session.totalQuestions = req.session.formData.numOfQuestions; // save original number of questions
   req.session.wasItAnswered  = true; // to prevent picking a new randm word when refreshing the GET question route
  // req.session.currentQuiz  = req.session.selectedVocabulary; // holds the quiz map to send to the db
   req.session.userAnswers  = []; // holds the user answers for the current quiz
   req.session.currentResults = []; // boolean array true if question was correctly answered
   req.session.engWord      = '';
   req.session.svkArray     = [];
   req.session.specialChars = false; // check if there are special characters in the word to display the onscreen keyboard
   req.session.svkToEng     = false; // switch variable to select translation from english to slovak or viceversa
   // flashcard flag is used to differentiate flashcard quizzes from regular quizzes on the dashboard
   req.session.flashcard    = true; // this is the flag to differentiate if test was generated from flashcards route
   req.session.questionIndex = 0;
   delete req.session.qid;  // qid is only used when resuming a quiz, not for a newly created one

   // console.log("Flashcard vocabulary: " + JSON.stringify(req.session.currentQuiz));

   res.redirect('/quiz/' + req.params.uname);
});

module.exports = router;