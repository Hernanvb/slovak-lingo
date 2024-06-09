var Vocabulary  = require('../models/vocabModel');

/* This will be used to find how many documents (word pairs) are in each category
   TODO: Should be improved so we won't have to rely on this array and make it more dynamic */
var categoriesInDb = ["basicPhrases",     "verbs",  "greetings", "characteristics", "numbers",
                        "adjectives",    "colors",    "periods", "timeExpressions", "carRental",
                        "restaurant",      "food",   "shopping",    "accomodation",    "doctor",
                            "travel",    "places",    "weather",          "family",   "animals",
                           "clothes", "languages",  "bodyParts",       "emergency",  "pronouns",
                        "directions",];
var randomGen = {
    // Function to generate a vocabulary array with the Objects from
    // the categories selected by the user
    vocab: function (selectedCategories, callback) {
        var vocabulary = [];
        var counter = 0;
        var arr;

        // when a quiz is resumed selectedCategories is an array
        if (Array.isArray(selectedCategories)){
            // console.log(selectedCategories);
            arr = selectedCategories;
        }
        else {
            arr = Object.keys(selectedCategories);
        }

        arr.forEach(function (key) {
            var query = {};
            // Send an empty query if category is all
            if (key !== 'all') {
                query.category = key;
            }
            // console.log("query: " + JSON.stringify(query));
            Vocabulary.find(query, function(err, result) {
                if (err) throw err;
                vocabulary.push(result);
                //console.log("randomGen.vocab: " + result);
                counter++;
                // Render the page once all the categories have been accounted for
                if (counter === arr.length) {
                    callback(vocabulary);
                }
            });
        });
    },

    // Function to select a random word from the vocabulary array
    word: function (vocabulary) {
        if (vocabulary.length === 0) {
            console.log("Vocabulary array is empty");
            return undefined;
        }
        // pick random index for category from vocabulary array
        var randCategoryIndex = Math.floor(vocabulary.length * Math.random());
        //console.log("vocabulary: " + JSON.stringify(vocabulary));
        //console.log("vocabulalry.length: " + vocabulary.length);

        // select the actual random category object from the vocabulary
        var category = vocabulary[randCategoryIndex];
        // console.log("category: " + JSON.stringify(category));
        // console.log("category.length: " + category.length);

        // pick a random index for a word pair from the category
        var randWordIndex = Math.floor(category.length * Math.random());

        // pick the actual random word pair object from the category object
        var wordPair = category[randWordIndex];

        // Delete word from category array so it won't repeat
        vocabulary[randCategoryIndex].splice(randWordIndex, 1);

        // Delete category array if it is empty
        if (vocabulary[randCategoryIndex]. length === 0) {
            vocabulary.splice(randCategoryIndex, 1);
        }

        //delete vocabulary[randCategoryIndex][randWordIndex];
        return wordPair;
    },

    // Function to list all categories with their respective number of words
    categoryLength: function (callback) {
        var res = {};
        var counter = 0; // count incremented when DB response is received
        res.total = 0;
        categoriesInDb.forEach(function (category) {
            // Async call to the DB, will render the page after it's done
            Vocabulary.countDocuments({"category": category}).exec(function(err, result) {
                if (err) throw err;
                res[category] = result;
                res.total += res[category];
                // console.log(category + ": " + res[category]);
                // console.log("in exec Total: " + res.total);
                counter++;
                // Render the page once all the categories have been accounted for
                if (counter === categoriesInDb.length) {
                    // console.log("categoryLength: " + JSON.stringify(res));
                    callback(res);
                }
            });
        });
    }
};

module.exports = randomGen;