var createError     = require('http-errors');
var express         = require('express');
var methodOverride  = require('method-override');
var path            = require('path');
var cookieParser    = require('cookie-parser');
//var logger          = require('morgan');
var session         = require('express-session');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');

var indexRouter           = require('./routes/index');
var usersRouter           = require('./routes/users');
var quizRouter            = require('./routes/quiz');
var quizGeneratorRouter   = require('./routes/quizGenerator');
var flashCardsRouter      = require('./routes/flashcards');

var setupController       = require('./controllers/setupController'); // Test API routes

// requires the model with Passport-Local Mongoose plugged in
const User                = require('./models/userModel');
var passport              = require('passport');
var LocalStrategy         = require('passport-local');
var passportLocalMongoose = require("passport-local-mongoose");

// helper functions
var helper = require('./helper');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

// use flash messages
var flash = require('connect-flash');
app.use(flash());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Change from development environment to production and vice-versa
var dev = false; // true to use local mongodb, false to use mLab db
var url = process.env.DATABASEURL || 'mongodb://localhost:27017/slovak-app';

// Connect to DB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log("Connected to Atlas MongoDB");
}).catch((err) => {
  console.error("Error connecting to Atlas MongoDB:", err);
});

app.use(methodOverride('_method'));
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'secret session phrase',
    resave: false,
    saveUninitialized: true,
    // Set maxAge to 1 day
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());

setupController(app); // Seed Data

// Session ID Debugger
// app.use(function(req, res, next) {
//     console.log("This is the session id: " + req.session.id);
//     console.log("This is the session: " + JSON.stringify(req.session));
//     next();
// });

// to make username case insensitive
app.use(function(req, res, next) {
  if (req.body.username)
    req.body.username = req.body.username.toLowerCase();
  if (req.body.email)
    req.body.email = req.body.email.toLowerCase();
  next();
});

// add currentUser to the templates
app.use(function(req, res, next) {
  // Every variable inside res.locals can be accessed directly on the ejs templates
  // So we can just reference <%= currentUser %>
  res.locals.currentUser  = req.user; // req.user has the user info if signed in
  res.locals.flashError   = req.flash("error");
  res.locals.flashSuccess = req.flash("success");
  res.locals.categoriesNames = helper.getCategoriesNames();
  res.locals.categoriesKeys  = helper.getCategoriesKeys();
  res.locals.categoryIcons   = helper.categoryIcons;
  next();
});

// app.get('/', function(req, res, next) {
//   console.log('Cookies: ', req.cookies);
//   next();
// });

app.use('/', indexRouter);
app.use('/quiz', quizRouter);
app.use('/users', usersRouter);
app.use('/generate-quiz', quizGeneratorRouter);
app.use('/flashcards', flashCardsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;