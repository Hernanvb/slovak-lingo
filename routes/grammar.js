var express = require('express');
var router  = express.Router();
var mw      = require('../middleware');
var helper  = require('../helper');
var grammarLessons = require('../data/grammarLessons');

/* GET grammar lessons list */
router.get('/:uname', mw.isLoggedIn, function(req, res, next) {
    res.render('dashboard/grammar/grammar', {
        header: "Slovak Lingo - Grammar",
        title: "Grammar Lessons",
        username: req.params.uname,
        lessons: grammarLessons,
        bgColors: helper.bgColors
    });
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
