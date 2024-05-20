var qs      = require('querystrings');
var express = require('express');
var router  = express.Router();
var randomWordGen = require('../controllers/randomWord');

var randomWord; // holds the object returned from randomWordGen {engWord: svkWord}
var Quiz = require('../models/quizModel');
var User = require('../models/userModel');
var mw   = require('../middleware');

// Array to hold special slovak characters
var slovakChars = [
    'á', 'ä', 'č', 'ď', 'dz',
    'dž', 'é', 'ch', 'í', 'ĺ',
    'ľ', 'ň', 'ó', 'ô', 'ŕ',
    'š', 'ť', 'ú', 'ý', 'ž'
];

function checkForSpecialChars(word) {
    for (var i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) > 127) {
            return true;
        }
    }
    return false;
}

/* /quiz Route */
/* GET question. */
router.get('/', function(req, res, next) {
    // console.log("req.session: " + JSON.stringify(req.session));
    // console.log("req.session.formData: " + req.session.formData);

    if (!req.session.formData) {
        res.redirect('/');
    }
    // console.log("In Quiz Session ID: " + req.session.id);
    // console.log("In Quiz Session data: " + JSON.stringify(req.session));
    if (req.session.formData.numOfQuestions > 0 && req.session.wasItAnswered) {
        // reset refresh prevention variable
        req.session.wasItAnswered = false;

        // Pick a word from the current quiz created in quizGenerator.js
        req.session.engWord = req.session.currentQuiz[req.session.questionIndex].english;
        req.session.svkWordArray = req.session.currentQuiz[req.session.questionIndex].slovak;
        req.session.specialChars = false; // reset

        // console.log("req.session.currentQuiz: " + JSON.stringify(req.session.currentQuiz, null, 2));
        // console.log("engWord: " + JSON.stringify(req.session.engWord, null, 2));
        // console.log("svkWordArray: " + JSON.stringify(req.session.svkWordArray, null, 2));

        req.session.svkWordArray.forEach(function (word) {
            if (checkForSpecialChars(word))
                req.session.specialChars = true;
        });

        // translate slovak word to english
        if (req.session.svkToEng) {
            // This needs to be fixed to use the Array of slovak words if the
            // capability to switch from translating slovak to english is added
            res.render('quiz/quiz', { title: req.session.svkWordArray[0] });
        }
        // translate english word to slovak
        else {
            res.render('quiz/quiz', { title: req.session.engWord,
                                     specialChars: req.session.specialChars ? slovakChars : false,
                                     numOfQuestions: req.session.formData.numOfQuestions,
                                     originalNumOfQuestions: req.session.totalQuestions,
                                     counter: req.session.correctCounter + req.session.wrongCounter + 1
            });
        }
    }
    // re-render question page without re-running logic if the question hasn't been answered yet
    else {
        // translate slovak word to english
        if (req.session.svkToEng) {
            // This needs to be fixed to use the Array of slovak words if the
            // capability to switch from translating slovak to english is added
            res.render('quiz/quiz', { title: req.session.svkWordArray[0] });
        }
        // translate english word to slovak
        else {
            res.render('quiz/quiz', {
                title: req.session.engWord,
                specialChars: req.session.specialChars ? slovakChars : false,
                numOfQuestions: req.session.formData.numOfQuestions,
                originalNumOfQuestions: req.session.totalQuestions,
                counter: req.session.correctCounter + req.session.wrongCounter + 1
            });
        }
    }
});

/* POST question */
/* Logic to check the answer of the user */
router.post('/', function(req, res, next) {
    var answer = req.body.answer;

    req.session.wasItAnswered = true;
    req.session.formData.numOfQuestions--;
    req.session.questionIndex++; // move to next question
    req.session.correctCounter = req.session.correctCounter || 0;
    req.session.wrongCounter   = req.session.wrongCounter   || 0;

    if (req.session.svkToEng) {
        // TODO: This needs to be fixed to use the Array of slovak words if the
        // capability to switch from translating slovak to english is added
        res.render('quiz/quiz', { title: req.session.svkWordArray[0] });
    }
    // Translate english word to slovak
    else {
        var re = /\.| |\,|\?|\!|\(|\)/gi;
        var trimmedAns = answer.replace(re, '');
        var correct = false;
        var index = 0;

        for (index; index < req.session.svkWordArray.length; index++) {
            var trimmedSvkWord = req.session.svkWordArray[index].replace(re, '');
            if (trimmedAns.toUpperCase() === trimmedSvkWord.toUpperCase()) {
                correct = true;
                break;
            }
        }

        // save result boolean to array to send to DB
        req.session.currentResults.push(correct);
        // save to answer array to send to DB
        req.session.userAnswers.push(req.body.answer);
        if (correct)
            req.session.correctCounter++;
        else
            req.session.wrongCounter++;

        res.redirect('/quiz/answer?' +
                qs.stringify({
                    correct: correct,
                    index: index
                })
        );
    }
});

// Show answer to question route
router.get('/answer', function(req, res, next) {

    if (!req.session.formData) {
        res.redirect('/');
    }

    var correct = req.query.correct === "true" ? true : false;
    res.render('quiz/answer', {
        title: correct ? "Correct!" : "Wrong!",
        correct: correct,
        index: Number(req.query.index),
        engWord: req.session.engWord,
        svkArray: req.session.svkWordArray,
        numOfQuestions: req.session.formData.numOfQuestions,
        originalNumOfQuestions: req.session.totalQuestions,
        counter: req.session.correctCounter + req.session.wrongCounter
    });
});

// Save quiz to DB route
router.get('/save', mw.sendToDb, function(req, res, next) {
    if (!req.session.formData) {
        res.redirect('/');
    }

    // If quiz was completed
    if (req.session.correctCounter + req.session.wrongCounter == req.session.totalQuestions) {
        res.redirect('/quiz/' + req.user.username + '/results');
    }
    // saved partial quiz
    else if (req.user) {
        req.flash("success", "Quiz saved!");
        res.redirect('/users/' + req.user.username + '/dashboard');
    }
    else {
        throw new Error("Not Found");
    }
});

// display results page
router.get('/results', function(req, res, next) {
    if (!req.session.formData) {
        res.redirect('/');
    }

    res.render('quiz/results', {
        title: "Your Results:",
        wrongCounter: req.session.wrongCounter,
        correctCounter: req.session.correctCounter
    });
});

/* Same exact logic as /quiz routes just checking for authentication and rendering different pages */

/* GET /quiz when logged in route */
router.get('/:uname', mw.isLoggedIn, function(req, res, next) {
    if (!req.session.formData) {
        res.redirect('/');
    }
    // console.log("In Quiz Session ID: " + req.session.id);
    // console.log("In Quiz Session data: " + JSON.stringify(req.session));
    if (req.session.formData.numOfQuestions > 0 && req.session.wasItAnswered) {
        // reset refresh prevention variable
        req.session.wasItAnswered = false;

        // Pick a word from the current quiz created in quizGenerator.js
        req.session.engWord = req.session.currentQuiz[req.session.questionIndex].english;
        req.session.svkWordArray = req.session.currentQuiz[req.session.questionIndex].slovak;
        req.session.specialChars = false; // reset

        // console.log("req.session.currentQuiz: " + JSON.stringify(req.session.currentQuiz, null, 2));
        // console.log("engWord: " + JSON.stringify(req.session.engWord, null, 2));
        // console.log("svkWordArray: " + JSON.stringify(req.session.svkWordArray, null, 2));

        req.session.svkWordArray.forEach(function (word) {
            if (checkForSpecialChars(word))
                req.session.specialChars = true;
        });

        // Translate slovak word to english
        if (req.session.svkToEng) {
            // TODO: This needs to be fixed to use the Array of slovak words if the
            // capability to switch from translating slovak to english is added
            res.render('dashboard/quiz/question', {
                header: "Slovak Lingo - Question",
                title: req.session.svkWordArray[0]
            });
        }
        // Translate english word to slovak
        else {
            res.render('dashboard/quiz/question', {
                header: "Slovak Lingo - Question",
                title: req.session.engWord,
                specialChars: req.session.specialChars ? slovakChars : false,
                numOfQuestions: req.session.formData.numOfQuestions,
                originalNumOfQuestions: req.session.totalQuestions,
                counter: req.session.correctCounter + req.session.wrongCounter + 1
            });
        }
    }
    // Re-render question page without re-running logic if the question hasn't been answered yet
    else {
        // Translate slovak word to english
        if (req.session.svkToEng) {
            // This needs to be fixed to use the Array of slovak words if the
            // capability to switch from translating slovak to english is added
            res.render('dashboard/quiz/question', {
                header: "Slovak Lingo - Question",
                title: req.session.svkWordArray[0]
            });
        }
        // Translate english word to slovak
        else {
            res.render('dashboard/quiz/question', {
                header: "Slovak Lingo - Question",
                title: req.session.engWord,
                specialChars: req.session.specialChars ? slovakChars : false,
                numOfQuestions: req.session.formData.numOfQuestions,
                originalNumOfQuestions: req.session.totalQuestions,
                counter: req.session.correctCounter + req.session.wrongCounter + 1
            });
        }
    }
});

/* POST answer to question */
/* Logic to check the answer of the logged in user */
router.post('/:uname', mw.isLoggedIn, function(req, res, next) {
    var answer = req.body.answer;
    var userId = req.user._id;
    var vocabId = req.session.currentQuiz[req.session.questionIndex]._id; // Get current vocabulary word ID

    req.session.wasItAnswered = true;
    req.session.formData.numOfQuestions--;
    req.session.questionIndex++; // move to next question
    req.session.correctCounter = req.session.correctCounter || 0;
    req.session.wrongCounter = req.session.wrongCounter || 0;

    var re = /\.| |\,|\?|\!|\(|\)/gi;
    var trimmedAns = answer.replace(re, '');
    var correct = false;
    var index = 0;

    for (index; index < req.session.svkWordArray.length; index++) {
        var trimmedSvkWord = req.session.svkWordArray[index].replace(re, '');
        if (trimmedAns.toUpperCase() === trimmedSvkWord.toUpperCase()) {
            correct = true;
            break;
        }
    }

    // Save result boolean to array to send to DB
    req.session.currentResults.push(correct);
    // Save to answer array to send to DB
    req.session.userAnswers.push(req.body.answer);
    if (correct)
        req.session.correctCounter++;
    else
        req.session.wrongCounter++;

    // Update vocabAttempts
    User.findById(userId, function(err, user) {
        if (err) {
            console.error(err);
            return next(err);
        }
        console.log("Found user:", user)
        // Find the vocabAttempt entry for the current vocabId
        var vocabAttempt = user.vocabAttempts.find(attempt => attempt.vocab.toString() === vocabId.toString());

        if (vocabAttempt) {
            // Add the new attempt result
            if (vocabAttempt.attempts.length >= 3) {
                vocabAttempt.attempts.shift(); // Remove the oldest attempt if there are already 3 attempts
            }
            vocabAttempt.attempts.push(correct);
        } else {
            // If no entry exists, create a new one
            user.vocabAttempts.push({
                vocab: vocabId,
                attempts: [correct]
            });
        }

        user.save(function(err) {
            if (err) {
                console.error(err);
                return next(err);
            }
            res.redirect('/quiz/' + req.user.username + '/answer?' + qs.stringify({
                correct: correct,
                index: index
            }));
        });
    });
});

// Show answer to question route
router.get('/:uname/answer', function(req, res, next) {

    if (!req.session.formData) {
        res.redirect('/');
    }

    var correct = req.query.correct === "true" ? true : false;
    res.render('dashboard/quiz/answer', {
        header: "Slovak Lingo - Answer",
        title: correct ? "Correct!" : "Wrong!",
        correct: correct,
        index: Number(req.query.index),
        engWord: req.session.engWord,
        svkArray: req.session.svkWordArray,
        numOfQuestions: req.session.formData.numOfQuestions,
        originalNumOfQuestions: req.session.totalQuestions,
        counter: req.session.correctCounter + req.session.wrongCounter
    });
});

// Display results page
router.get('/:uname/results', function(req, res, next) {
    if (!req.session.formData) {
        res.redirect('/');
    }

    res.render('dashboard/quiz/results', {
        header: "Slovak Lingo - Results",
        title: "Your Results:",
        wrongCounter: req.session.wrongCounter,
        correctCounter: req.session.correctCounter
    });
});

module.exports = router;