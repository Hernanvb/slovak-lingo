var express = require('express');
var router  = express.Router();
var mw      = require('../middleware');
var helper  = require('../helper');
var grammarLessons = require('../data/grammarLessons');
var grammarQuestions = require('../data/grammarQuestions');

var slovakChars = [
    'á', 'ä', 'č', 'ď', 'dz',
    'dž', 'é', 'ch', 'í', 'ĺ',
    'ľ', 'ň', 'ó', 'ô', 'ŕ',
    'š', 'ť', 'ú', 'ý', 'ž'
];

// Fisher-Yates shuffle
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// Get unique categories from question pool
var questionCategories = [];
grammarQuestions.forEach(function(q) {
    if (questionCategories.indexOf(q.category) === -1) {
        questionCategories.push(q.category);
    }
});

var categoryLabels = {
    verbs: "Verb Conjugation",
    cases: "Noun Cases",
    pronouns: "Pronouns",
    irregular: "Irregular Verbs",
    modal: "Modal Verbs",
    past: "Past Tense",
    numbers: "Numbers"
};

/* GET grammar lessons list */
router.get('/:uname', mw.isLoggedIn, function(req, res, next) {
    res.render('dashboard/grammar/grammar', {
        header: "Slovak Lingo - Grammar",
        title: "Grammar Lessons",
        username: req.params.uname,
        lessons: grammarLessons,
        bgColors: helper.bgColors,
        questionCategories: questionCategories,
        categoryLabels: categoryLabels,
        totalQuestions: grammarQuestions.length
    });
});

/* POST start grammar quiz */
router.post('/:uname/quiz', mw.isLoggedIn, function(req, res, next) {
    var numQuestions = parseInt(req.body.numQuestions) || 10;
    var selectedCategories = req.body.categories;

    if (!selectedCategories) {
        req.flash("error", "Please select at least one category");
        return res.redirect('/grammar/' + req.params.uname);
    }

    if (typeof selectedCategories === 'string') {
        selectedCategories = [selectedCategories];
    }

    // Filter questions by selected categories
    var pool = grammarQuestions.filter(function(q) {
        return selectedCategories.indexOf(q.category) !== -1;
    });

    if (pool.length === 0) {
        req.flash("error", "No questions found for selected categories");
        return res.redirect('/grammar/' + req.params.uname);
    }

    // Shuffle and pick
    shuffle(pool);
    var selected = pool.slice(0, Math.min(numQuestions, pool.length));

    req.session.grammarQuiz = selected;
    req.session.grammarIndex = 0;
    req.session.grammarCorrect = 0;
    req.session.grammarWrong = 0;
    req.session.grammarTotal = selected.length;

    res.redirect('/grammar/' + req.params.uname + '/quiz');
});

/* GET grammar quiz question */
router.get('/:uname/quiz', mw.isLoggedIn, function(req, res, next) {
    if (!req.session.grammarQuiz || req.session.grammarIndex >= req.session.grammarTotal) {
        return res.redirect('/grammar/' + req.params.uname + '/quiz/results');
    }

    var question = req.session.grammarQuiz[req.session.grammarIndex];

    res.render('dashboard/grammar/quiz-question', {
        header: "Slovak Lingo - Grammar Quiz",
        title: "Grammar Quiz",
        username: req.params.uname,
        question: question,
        counter: req.session.grammarIndex + 1,
        totalQuestions: req.session.grammarTotal,
        specialChars: slovakChars
    });
});

/* POST check grammar quiz answer */
router.post('/:uname/quiz/answer', mw.isLoggedIn, function(req, res, next) {
    if (!req.session.grammarQuiz || req.session.grammarIndex >= req.session.grammarTotal) {
        return res.redirect('/grammar/' + req.params.uname + '/quiz/results');
    }

    var question = req.session.grammarQuiz[req.session.grammarIndex];
    var userAnswer = (req.body.answer || '').trim().replace(/[.,!?;:]+$/, '').toLowerCase();

    var correct = question.answers.some(function(a) {
        return a.toLowerCase() === userAnswer;
    });

    if (correct) {
        req.session.grammarCorrect++;
    } else {
        req.session.grammarWrong++;
    }

    req.session.grammarIndex++;

    req.session.grammarLastAnswer = {
        correct: correct,
        question: question,
        userAnswer: req.body.answer
    };

    res.redirect('/grammar/' + req.params.uname + '/quiz/answer');
});

/* GET grammar quiz answer feedback */
router.get('/:uname/quiz/answer', mw.isLoggedIn, function(req, res, next) {
    if (!req.session.grammarLastAnswer) {
        return res.redirect('/grammar/' + req.params.uname + '/quiz');
    }

    var lastAnswer = req.session.grammarLastAnswer;
    var remaining = req.session.grammarTotal - req.session.grammarIndex;

    res.render('dashboard/grammar/quiz-answer', {
        header: "Slovak Lingo - Grammar Quiz",
        title: "Grammar Quiz",
        username: req.params.uname,
        correct: lastAnswer.correct,
        question: lastAnswer.question,
        userAnswer: lastAnswer.userAnswer,
        counter: req.session.grammarIndex,
        totalQuestions: req.session.grammarTotal,
        remaining: remaining
    });
});

/* GET grammar quiz results */
router.get('/:uname/quiz/results', mw.isLoggedIn, function(req, res, next) {
    var correctCount = req.session.grammarCorrect || 0;
    var wrongCount = req.session.grammarWrong || 0;

    res.render('dashboard/grammar/quiz-results', {
        header: "Slovak Lingo - Grammar Quiz Results",
        title: "Grammar Quiz Results",
        username: req.params.uname,
        correctCounter: correctCount,
        wrongCounter: wrongCount,
        total: correctCount + wrongCount
    });

    // Clean up session
    delete req.session.grammarQuiz;
    delete req.session.grammarIndex;
    delete req.session.grammarCorrect;
    delete req.session.grammarWrong;
    delete req.session.grammarTotal;
    delete req.session.grammarLastAnswer;
});

/* GET single grammar lesson */
router.get('/:uname/:slug', mw.isLoggedIn, function(req, res, next) {
    var lesson = grammarLessons.find(function(l) {
        return l.slug === req.params.slug;
    });

    if (!lesson) {
        req.flash("error", "Lesson not found");
        return res.redirect('/grammar/' + req.params.uname);
    }

    res.render('dashboard/grammar/lesson', {
        header: "Slovak Lingo - " + lesson.title,
        title: lesson.title,
        username: req.params.uname,
        lesson: lesson
    });
});

module.exports = router;
