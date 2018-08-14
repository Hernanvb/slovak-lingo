var Quiz = require('../models/quizModel');
var User = require('../models/userModel');
var Vocabulary = require('../models/vocabModel');
var mw = require('../middleware');
var helper = require('../helper');

// Array to hold special slovak characters 
var slovakChars = [
                   'á', 'ä', 'č', 'ď', 'dz', 
                  'dž', 'é', 'ch', 'í', 'ĺ', 
                   'ľ', 'ň', 'ó', 'ô', 'ŕ', 
                   'š', 'ť', 'ú', 'ý', 'ž'
                  ];

function checkForSpecialChars(word) {
    for (var i = 0; i < word.length; i++) {
        //console.log(word.charAt(i) + ': ' + word.charCodeAt(i));
        if (word.charCodeAt(i) > 127) {
            return true;
        }
    }
    return false;
}

module.exports = function(app) {
    // app.get('/api/testWord/question/:word', function(req, res) {
    //     var word = req.params.word;

    //     var re = new RegExp(word,"i");
    //     var specialChars = false;
    //     res.locals.currentUser  = false;
    //     res.locals.flashError   = false;
    //     res.locals.flashSuccess = false;        
        
    //     Vocabulary.findOne({english: re}, function (err, result) {
    //         if (err) throw err;
    //         var svkWordArray = result.slovak;
            
    //         svkWordArray.forEach(function(svkWord) {
    //             if (checkForSpecialChars(svkWord))
    //                 specialChars = true;
    //         });
            
    //         res.render('quiz/quiz', { title: word, 
    //                                  specialChars: specialChars ? slovakChars : false,
    //                                  numOfQuestions: 1, 
    //                                  originalNumOfQuestions: 1,
    //                                  counter: 1 
    //         });            
    //     });
    // });
    
    // app.get('/api/testWord/answer/:word', function(req, res) {
    //     var word = req.params.word;

    //     var correct = true;
    //     res.locals.currentUser  = false;
    //     res.locals.flashError   = false;
    //     res.locals.flashSuccess = false;
    //     var re = new RegExp(word,"i");
    //     Vocabulary.findOne({english: re}, function (err, result) {
    //         if (err) throw err;
    //         var svkWordArray = result.slovak;
    //         res.render('quiz/answer', {
    //                      title: correct ? "Correct!" : "Wrong!",
    //                      correct: correct,
    //                      index: Number(0),
    //                      engWord: word,
    //                      svkArray: svkWordArray,
    //                      numOfQuestions: 0, 
    //                      originalNumOfQuestions: 1,
    //                      counter: 1
    //         });   
    //     });
    // });
    
    app.get('/api/:uname/chart', mw.isLoggedIn, function(req, res) {
        User.findOne({username: req.params.uname})
            .populate({
                        path: 'quizzes',
                        // Populate the quiz from the Vocabulary collection
                        populate: { path: 'quiz' }
            })
            .exec(function(err, data) {
                        if (err) throw err;
                        // console.log("Number of Quizzes: " + data.quizzes.length);
                        var categories = {};
                        helper.getCategoriesKeys().forEach(function(key) {
                            categories[key] = {};
                            categories[key].counter = 0;
                            categories[key].name = helper.categoryKeyToName(key);
                        });
                        
                        data.quizzes.forEach(function(item) {
                            for (var i = 0; i < item.quiz.length; i++) {
                                // console.log("Category!: " + item.quiz[i].category);
                                categories[item.quiz[i].category].counter++;
                            }
                        });
                        // console.log(JSON.stringify(data, null, 2));
                        res.json(categories);
            });
    });
    
    // app.get('/api/done', function(req, res) {
    //     res.render('dashboard/flashcards/done', {
    //                                             header: "done", 
    //                                             currentUser: {username: "Test"},
    //                                             categoriesKeys: helper.getCategoriesKeys(),
    //                                             categoriesNames: helper.getCategoriesNames(),
    //                                             categoryIcons: helper.categoryIcons
    //     });
    // });
    
    app.get('/api/:uname', mw.isLoggedIn, function(req, res) {
        User.findOne({username: req.params.uname})
            .populate({
                        path: 'quizzes',
                        // Populate the quiz from the Vocabulary collection
                        populate: { path: 'quiz' }
            })
            .exec(function(err, result) {
                        if (err) throw err;
                        // var re = /\.| |\,|\?|\!|\(|\)/gi;
                        // console.log("Number of Quizzes: " + result.quizzes.length);
                        // console.log(JSON.stringify(result, null, 2));
                        res.send(result);
            });
    });
};