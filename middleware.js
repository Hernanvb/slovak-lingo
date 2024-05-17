var User = require('./models/userModel');
var Quiz = require('./models/quizModel');
var ObjectId = require('mongoose').Types.ObjectId; 
                  
module.exports = {
    sendToDb: function (req, res, next) {
        if (!req.session.formData) {
            console.log("req.session.formData is null");
            return next();
        }
        // console.log("Current Quiz: " + JSON.stringify(req.session.currentQuiz));
        // console.log("Current User: " + req.user);

        // If the user is logged in, search for it
        if (req.user) {
            var options = {};
            if (req.session.correctCounter + req.session.wrongCounter == req.session.totalQuestions)
                options = {$inc: {completed: 1}};

            User.findOneAndUpdate({username: req.user.username}, options, function (err, foundUser) { 
                if (err) throw  err;
                if (foundUser) {
                    // console.log(foundUser);
                    // if we are coming from resuming a quiz
                    if (req.session.qid) {
                        // console.log("Update quiz categories: " + JSON.stringify(req.session.formData.categories));
                        var data = {
                            date: Date.now(),
                            score: req.session.correctCounter,
                            progress: req.session.correctCounter + req.session.wrongCounter,
                            numberOfQuestions: req.session.totalQuestions,
                            completed: ((req.session.correctCounter + req.session.wrongCounter) == req.session.totalQuestions) ? true : false,
                            quiz: req.session.currentQuiz,
                            questionIndex: req.session.questionIndex,
                            answers: req.session.userAnswers,
                            results: req.session.currentResults,
                            categories: req.session.formData.categories,
                            flashcard: req.session.flashcard
                        };
                        Quiz.findByIdAndUpdate(req.session.qid, data, function (err, updatedQuiz) {
                            if (err) throw err;
                            // console.log("Updated Quiz: " + updatedQuiz);
                        });
                    }
                    // if we are creating a new quiz
                    else {
                        var categories = [];
                        if (Array.isArray(req.session.formData.categories))
                            categories = req.session.formData.categories;
                        else
                            categories = Object.keys(req.session.formData.categories);
                        Quiz.create({
                            date: Date.now(),
                            score: req.session.correctCounter,
                            progress: req.session.correctCounter + req.session.wrongCounter,
                            numberOfQuestions: req.session.totalQuestions,
                            completed: ((req.session.correctCounter + req.session.wrongCounter) == req.session.totalQuestions) ? true : false,
                            quiz: req.session.currentQuiz,
                            questionIndex: req.session.questionIndex,
                            answers: req.session.userAnswers,
                            results: req.session.currentResults,
                            categories: categories,
                            flashcard: req.session.flashcard
                        }, function (err, quiz) {
                            if (err) throw err;
                        //   console.log("Created Quiz: " + quiz);
                            foundUser.quizzes.push(quiz);
                            foundUser.save(function(err, data) {
                                if (err) throw err;
                            //   console.log(data);
                            });
                        });
                    }
                }
            });
        }
        next();
    },
    // middleware to check if user is logged in
    isLoggedIn: function (req, res, next) {
        if (req.isAuthenticated()) {
            if (req.params.uname == req.user.username) {
                return next();
            }
            return res.redirect('/users/' + req.user.username + '/dashboard');
        }
        res.redirect('/users/login');
    }
};