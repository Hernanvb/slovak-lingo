var express = require('express');
var router = express.Router();

// requires the model with Passport-Local Mongoose plugged in
const User                = require('../models/userModel');
const Quiz                = require('../models/quizModel');
const Vocabulary          = require('../models/vocabModel');
var passport              = require('passport');
var LocalStrategy         = require('passport-local');
var mw                    = require('../middleware');
var helper                = require('../helper')
var randomWordGen         = require('../controllers/randomWord');
//var passportLocalMongoose = require("passport-local-mongoose");

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* GET /users  */
router.get('/', mw.isLoggedIn, function(req, res, next) {
  // middleWare takes care of this route
});

// REGISTRATION ROUTES
/* GET Registration Page */
router.get('/register', function(req, res, next) {
    res.render('user/register', {title: "Registration Page"});
});

/* POST registration page */
router.post('/register', function(req, res, next) {
    User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            req.flash("error", err.message);
            return res.redirect('/users/register');
        }
        passport.authenticate("local")(req, res, function() {
            req.flash("success", 'Welcome to Slovak Lingo <span class="username">' + user.username + '</span>');
            res.redirect('/users/' + req.body.username + '/dashboard');
        });
    });
});

// LOGIN ROUTES
/* GET Login Page */
router.get('/login', function(req, res, next) {
    res.render('user/login', {title: "Login"});
});

/* POST Loging Page */
router.post('/login', function(req, res, next) {
                        passport.authenticate('local', function(err, user, info) {
                            if (err) { return next(err); }
                            // Redirect if it fails
                            if (!user) { 
                                req.flash("error", "Invalid username or password");
                                return res.redirect('/users/login'); 
                            }
                            req.logIn(user, function(err) {
                                if (err) {
                                    req.flash("error", err.message);
                                    return next(err); 
                                }
                                req.flash("success", 'Welcome back to Slovak Lingo <span class="username">' + user.username + '</span>');
                                // Redirect if it succeeds
                                return res.redirect('/users/' + req.user.username + '/dashboard');
                            });
                        })(req, res, next);
});

// LOGOUT
router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

/* GET page for user history */
router.get('/:uname/dashboard', mw.isLoggedIn, function(req, res, next) {
    // console.log(JSON.stringify(req.user));
    User.findOne({username: req.params.uname})
            .populate({
                        path: 'quizzes',
                        // Populate the quiz from the Vocabulary collection
                        populate: { path: 'quiz' }
            })
            .exec(function(err, result) {
                if (err) throw err;
                var lastQuizIndex = - 1;
                
                var completedQuizzes = 0;
                var inProgressQuizzes = 0;
                var flashcardQuizzesCompleted = 0;
                var flashcardQuizzesInProgress = 0;
                
                if (!(result.quizzes === undefined || result.quizzes.length == 0)) {
                    lastQuizIndex = result.quizzes.length - 1;
                    result.quizzes.sort(function(a,b){
                                        // sort desceding by date
                                        return a.date - b.date;
                                    });
                                    
                    // console.log(JSON.stringify(result.quizzes, null, 2));
                    result.quizzes.forEach(function(quiz) {
                        // console.log(JSON.stringify(quiz, null, 2));
                        if (quiz.flashcard) {
                            flashcardQuizzesCompleted = quiz.completed ? ++flashcardQuizzesCompleted : flashcardQuizzesCompleted;
                            flashcardQuizzesInProgress = quiz.completed ? flashcardQuizzesInProgress : ++flashcardQuizzesInProgress;
                        } else {
                            completedQuizzes = quiz.completed ? ++completedQuizzes : completedQuizzes;
                            inProgressQuizzes = quiz.completed ? inProgressQuizzes : ++inProgressQuizzes;
                        }
                    });
                }
                
                res.render('dashboard/dashboard', { 
                                                    header: "Slovak Lingo - Dashboard",
                                                    title: req.params.uname + " Dashboard", 
                                                    username: req.params.uname,
                                                    completedQuizzes: completedQuizzes,
                                                    inProgressQuizzes: inProgressQuizzes,
                                                    flashcardQuizzesCompleted: flashcardQuizzesCompleted,
                                                    flashcardQuizzesInProgress: flashcardQuizzesInProgress,
                                                    latestQuiz: lastQuizIndex === -1 ? false : result.quizzes[lastQuizIndex],
                                                    offset: req.cookies.tzoffset,
                                                    calcTime: helper.calcTime
                });
            });
});

/* GET Completed Quiz List */
router.get('/:uname/dashboard/quizzes', mw.isLoggedIn, function(req, res, next) {
    User.findOne({username: req.params.uname})
            .populate({
                        path: 'quizzes',
                        // Populate the quiz from the Vocabulary collection
                        populate: { path: 'quiz' }
            })
            .exec(function(err, result) {
                if (err) throw err;
                
                if (!(result.quizzes === undefined || result.quizzes.length == 0)) {
                    result.quizzes.sort(function(a,b){
                                        // sort desceding by date
                                        return a.date - b.date;
                                    });
                }
                
                if (req.query.flashcard === 'true') {
                    res.render('dashboard/flashcards/flashcard-completed-quizzes', {
                                                                            header: "Slovak Lingo - Quizzes",
                                                                             title: req.params.uname + " Dashboard", 
                                                                          username: req.params.uname,
                                                                           quizzes: result.quizzes,
                                                                            offset: req.cookies.tzoffset,
                                                                          bgColors: helper.bgColors,
                                                                          calcTime: helper.calcTime
                          });    
                } else {
                    res.render('dashboard/quizzes/completed-quizzes', {    
                                                                  header: "Slovak Lingo - Quizzes",
                                                                   title: req.params.uname + " Dashboard", 
                                                                username: req.params.uname,
                                                                 quizzes: result.quizzes,
                                                                  offset: req.cookies.tzoffset,
                                                                bgColors: helper.bgColors,
                                                                calcTime: helper.calcTime
                              });
                }
            });
});

/* SHOW Quiz Details */
router.get('/:uname/dashboard/quizzes/:qid', mw.isLoggedIn, function(req, res, next) {
    // check of the qid is a valid id value for mongoose
    if (req.params.qid.match(/^[0-9a-fA-F]{24}$/)) {
        Quiz.findById(req.params.qid)
                .populate({ path: 'quiz' })
                .exec(function(err, foundQuiz) {
                    if (err) throw err;
                    // console.log(foundQuiz);
                    if (foundQuiz) {
                        res.render('dashboard/quizzes/quiz-detail', {
                                                                   header: "Slovak Lingo - Quiz Details",
                                                                    title: req.params.uname + " Dashboard", 
                                                                 username: req.params.uname,
                                                                foundQuiz: foundQuiz,
                                                                   offset: req.cookies.tzoffset,
                                                                 calcTime: helper.calcTime
                              });
                    }
                    else {
                        res.redirect('/users/' + req.params.uname + '/dashboard/quizzes');
                    }
                });
    } else {
        res.redirect('/users/' + req.params.uname + '/dashboard/quizzes');
    }
});

/* GET List of Quizzes in Progress */
router.get('/:uname/dashboard/inprogress', mw.isLoggedIn, function(req, res, next) {
    
    User.findOne({username: req.params.uname})
            .populate({
                        path: 'quizzes',
                        // Populate the quiz from the Vocabulary collection
                        populate: { path: 'quiz' }
            })
            .exec(function(err, result) {
                if (err) throw err;
                if (!(result.quizzes === undefined || result.quizzes.length == 0)) {
                    result.quizzes.sort(function(a,b){
                                        // sort desceding by date
                                        return a.date - b.date;
                                    });
                }
                if (req.query.flashcard === 'true') {
                    res.render('dashboard/flashcards/flashcard-inprogress-quizzes', {
                                                                        header: "Slovak Lingo - In Progress",
                                                                         title: req.params.uname + " Dashboard", 
                                                                      username: req.params.uname,
                                                                       quizzes: result.quizzes,
                                                                        offset: req.cookies.tzoffset,
                                                                      bgColors: helper.bgColors,
                                                                   bgGradients: helper.bgGradients,
                                                                      calcTime: helper.calcTime
                            });
                } else {
                    res.render('dashboard/quizzes/inprogress-quizzes', {
                                                                      header: "Slovak Lingo - In Progress",
                                                                       title: req.params.uname + " Dashboard", 
                                                                    username: req.params.uname,
                                                                     quizzes: result.quizzes,
                                                                      offset: req.cookies.tzoffset,
                                                                    bgColors: helper.bgColors,
                                                                 bgGradients: helper.bgGradients,
                                                                    calcTime: helper.calcTime
                            });
                }
                
            });
});

/* Resume Quiz Route */
// Future improvement to change it to an UPDATE route to make it RESTful
router.get('/:uname/dashboard/quizzes/:qid/resume', mw.isLoggedIn, function(req, res, next) {
    // check of the qid is a valid id value for mongoose
    if (req.params.qid.match(/^[0-9a-fA-F]{24}$/)) {
        Quiz.findById(req.params.qid)
                .populate({ path: 'quiz' })
                .exec(function(err, foundQuiz) {
                    if (err) throw err;
                    // console.log(foundQuiz);
                    if (foundQuiz) {
                       // formData has property numOfQuestions and object categories that holds all the selected categories by the user
                       req.session.formData       = {};
                       req.session.formData.categories = foundQuiz.categories;
                       req.session.formData.numOfQuestions = foundQuiz.numberOfQuestions - foundQuiz.progress; // restore number of questions left
                       req.session.correctCounter = foundQuiz.score; // restore counter for correct answers
                       req.session.wrongCounter   = foundQuiz.progress - foundQuiz.score; // restore counter for wrong answers
                       req.session.totalQuestions = foundQuiz.numberOfQuestions; // restore original number of questions
                       req.session.wasItAnswered  = true; // to prevent picking a new randm word when refreshing the GET question route
                       req.session.currentQuiz  = foundQuiz.quiz; // restore the quiz map to send to the db
                       req.session.userAnswers  = foundQuiz.answers; // restore the user answers for the current quiz
                       req.session.currentResults = foundQuiz.results; // boolean array true if question was correctly answered
                       req.session.engWord      = '';
                       req.session.svkArray     = [];
                       req.session.specialChars = false; // check if there are special characters in the word to display the onscreen keyboard
                       req.session.svkToEng     = false; // switch variable to select translation from english to slovak or viceversa
                       req.session.flashcard    = foundQuiz.flashcard; // this is the flag to differentiate if test was generated from flashcards route
                       req.session.questionIndex = foundQuiz.questionIndex; // this will be used to point to the current question on the quiz
                       // req.session.qid is only set when resuming a quiz, it's empty for newly created quizzes
                       // It will be used to search the quiz in database and update it in sendToDb middleware
                       req.session.qid          = req.params.qid; 
                                                                    
                       res.redirect('/quiz');
                    }
                    else {
                        req.flash("error", "Quiz not found");
                        res.redirect('/users/' + req.params.uname + '/dashboard/quizzes');
                    }
                });
    } else {
        req.flash("error", "Invalid query");
        res.redirect('/users/' + req.params.uname + '/dashboard/quizzes');
    }
});

/* DELETE Quiz Route */
router.delete('/:uname/dashboard/quizzes/:qid', mw.isLoggedIn, function(req, res, next) {
    // check of the qid is a valid id value for mongoose
    if (req.params.qid.match(/^[0-9a-fA-F]{24}$/)) {
        Quiz.findByIdAndRemove(req.params.qid, function(err, removedQuiz) {
                    if (err){
                        req.flash("error", "Unable to delete the quiz");
                        res.redirect('/users/' + req.params.uname + '/dashboard/quizzes');
                    }
                    // Now remove the quiz from the User's list of quizzes since mongoose doesn't do it automatically
                    else {
                        var options = {};
                        // decrement User's completed counter if the deleted quiz was from the completed quizzes list
                        if (removedQuiz.completed) {
                            // console.log(typeof(removedQuiz.completed) + ": " + removedQuiz.completed);
                            options = { $pull: { quizzes: req.params.qid  }, 
                                        $inc:  { completed: -1 } };
                        } else {
                            // console.log(typeof(removedQuiz.completed) + ": " + removedQuiz.completed);
                            options = { $pull: { quizzes: req.params.qid  } };
                        }
                        User.findOneAndUpdate(
                            { username: req.user.username },
                            // no _id it is array of objectId not object with _ids
                            options,
                            { new: true },
                            function(err, removedFromUser) {
                                if (err) { 
                                    req.flash("error", "Error removing quiz from user profile");
                                    res.redirect('/users/' + req.params.uname + '/dashboard/quizzes');
                                }
                                req.flash("success", "Quiz deleted successfully");
                                // use res.send instead of redirect because delete requests will come
                                // from a jQuery AJAX post request and those CAN't be redirected by the server
                                // The javascript function on the client side will use this redirect
                                // data to set window.location
                                res.send({redirect: '/users/' + req.params.uname + '/dashboard/quizzes'});
                                // res.redirect('/users/' + req.params.uname + '/dashboard/quizzes');
                            });
                    }
                });
    } else {
        req.flash("error", "Invalid query");
        res.redirect('/users/' + req.params.uname + '/dashboard/quizzes');
    }
});

/* GET dashboard category list */
router.get('/:uname/dashboard/categories', mw.isLoggedIn, function(req, res, next) {
    randomWordGen.categoryLength(function (categoriesLength) {
        res.render('dashboard/categories/categories', {
                                          header: "Slovak Lingo - Categories",
                                        username: req.params.uname,
                                        bgColors: helper.bgColors,
                                        categoriesLength: categoriesLength
                });
    });
    
});

/* SHOW Category Details */
router.get('/:uname/dashboard/categories/:categoryKey', mw.isLoggedIn, function(req, res, next) {
    // check of the qid is a valid id value for mongoose
    
    var query = {};
    if (req.params.categoryKey !== 'all') {
        query = {category: req.params.categoryKey};
    }
    
    Vocabulary.find(query, function(err, category) {
        if (err) throw err;
        // console.log(category);
        if (category) {
            var categoryName = '';
            if (req.params.categoryKey === 'all') {
                categoryName = 'All';
            } else {
                categoryName = helper.categoryKeyToName(req.params.categoryKey);
            }
            res.render('dashboard/categories/category-detail', {
                                                    header: "Slovak Lingo - " + categoryName,
                                                    title: req.params.uname + " Dashboard",
                                                    username: req.params.uname,
                                                    categoryName: categoryName,
                                                    category: category
                      });
        }
        else {
            req.flash("error", "Category not found");
            res.redirect('/users/' + req.params.uname + '/dashboard/categories');
        }
           
    });
});

router.get('/:uname/dashboard/charts', function(req, res, next) {
    res.render('dashboard/charts', {
                                    header: "Slovak Lingo - Charts",
                                    title: req.params.uname + " Charts"
            });
});

// Last route as a catch all
// Redirect to dashboard if logged in
router.get('/:uname', mw.isLoggedIn, function(req, res, next) {
    res.redirect('/users/' + req.user.username + '/dashboard');
});

module.exports = router;