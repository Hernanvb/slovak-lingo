var express = require('express');
var router = express.Router();
var randomWordGen = require('../controllers/randomWord');
var mw = require('../middleware');

/* GET Quiz Generator Form */
router.get('/', function(req, res, next) {
    
    randomWordGen.categoryLength(function (categoriesLength) {
        res.render('quiz/generate-quiz', { 
                                            title: 'Slovak Vocabulary Generator', 
                                 categoriesLength: categoriesLength});
    });
    
});

/* GET Quiz Generator Form */
router.get('/:uname', mw.isLoggedIn, function(req, res, next) {
    
    randomWordGen.categoryLength(function (categoriesLength) {
        res.render('dashboard/quiz/generate-quiz', {
                                                    header: "Slovak Lingo - Vocabulary Generator",
                                                     title: 'Slovak Vocabulary Generator', 
                                          categoriesLength: categoriesLength});
    });
    
});


/* GET Quiz Generator Form */
router.post('/', function(req, res, next) {
   // console.log("req.body: " + JSON.stringify(req.body));
   // formData has property numOfQuestions and object categories that holds all the selected categories by the user
   req.session.formData       = req.body;
   req.session.correctCounter = 0; // counter for correct answers
   req.session.wrongCounter   = 0; // counter for wrong answers
   req.session.totalQuestions = req.session.formData.numOfQuestions; // save original number of questions
   req.session.wasItAnswered  = true; // to prevent picking a new randm word when refreshing the GET question route
   req.session.currentQuiz  = []; // holds the quiz map to send to the db
   req.session.userAnswers  = []; // holds the user answers for the current quiz
   req.session.currentResults = []; // boolean array true if question was correctly answered
   req.session.engWord      = '';
   req.session.svkArray     = [];
   req.session.specialChars = false; // check if there are special characters in the word to display the onscreen keyboard
   req.session.svkToEng     = false; // switch variable to select translation from english to slovak or viceversa
   req.session.flashcard    = false; // this is the flag to differentiate if test was generated from flashcards route
   req.session.questionIndex = 0; // this will be used to point to the current question on the quiz
   delete req.session.qid;  // qid is only used when resuming a quiz, not for a newly created one
   

   //console.log("categories: " + JSON.stringify(req.session.formData.categories));
   
   // Create vocabulary array with selected categories (Async call to DB)
   randomWordGen.vocab(req.session.formData.categories, function (vocabulary) {
        for (var i = 0; i < req.session.formData.numOfQuestions; i++) {
            // Pick a random word from the vocabulary array
            var randomWord = randomWordGen.word(vocabulary);
            //console.log("In Quiz randomWord: " + JSON.stringify(randomWord));
        
            // save to quiz array to send to DB
            req.session.currentQuiz.push(randomWord);
        }
        
        res.redirect('/quiz');       
   }); 
});

/* GET Quiz Generator Form */
router.post('/:uname', mw.isLoggedIn, function(req, res, next) {
//   console.log("req.body: " + JSON.stringify(req.body));
   // formData has property numOfQuestions and object categories that holds all the selected categories by the user
   req.session.formData       = req.body;
   req.session.correctCounter = 0; // counter for correct answers
   req.session.wrongCounter   = 0; // counter for wrong answers
   req.session.totalQuestions = req.session.formData.numOfQuestions; // save original number of questions
   req.session.wasItAnswered  = true; // to prevent picking a new randm word when refreshing the GET question route
   req.session.currentQuiz  = []; // holds the quiz map to send to the db
   req.session.userAnswers  = []; // holds the user answers for the current quiz
   req.session.currentResults = []; // boolean array true if question was correctly answered
   req.session.engWord      = '';
   req.session.svkArray     = [];
   req.session.specialChars = false; // check if there are special characters in the word to display the onscreen keyboard
   req.session.svkToEng     = false; // switch variable to select translation from english to slovak or viceversa
   req.session.flashcard    = false; // this is the flag to differentiate if test was generated from flashcards route
   req.session.questionIndex = 0; // this will be used to point to the current question on the quiz
   delete req.session.qid;  // qid is only used when resuming a quiz, not for a newly created one
   

   //console.log("categories: " + JSON.stringify(req.session.formData.categories));
   
   // Create vocabulary array with selected categories (Async call to DB)
   randomWordGen.vocab(req.session.formData.categories, function (vocabulary) {
        for (var i = 0; i < req.session.formData.numOfQuestions; i++) {
            // Pick a random word from the vocabulary array
            var randomWord = randomWordGen.word(vocabulary);
            //console.log("In Quiz randomWord: " + JSON.stringify(randomWord));
        
            // save to quiz array to send to DB
            req.session.currentQuiz.push(randomWord);
        }
        
        res.redirect('/quiz/' + req.params.uname);       
   }); 
});

module.exports = router;

