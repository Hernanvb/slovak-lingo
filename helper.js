var categories =  [ {basicPhrases: "Basic Phrases"}, {greetings: "Greetings"}, {directions: "Directions"}, 
                    {characteristics: "Characteristics"}, {numbers: "Numbers"}, {adjectives: "Adjectives"}, {colors: "Colors"},
                    {periods: "Periods"}, {timeExpressions: "Time Expressions"}, {carRental: "Car Rental"}, {restaurant: "Restaurant"},
                    {food: "Food"}, {shopping: "Shopping"}, {accomodation: "Accomodation"}, {doctor: "Doctor"}, {travel: "Travel"},
                    {places: "Places"}, {weather: "Weather"}, {family: "Family"}, {animals: "Animals"}, {clothes: "Clothes"}, 
                    {languages: "Languages"}, {bodyParts: "Body Parts"}, {emergency: "Emergency"}, {pronouns: "Pronouns"}
                  ];
                  
module.exports = {
                // helper functions
                getCategoriesKeys: function () {
                                    var res = [];
                                    for (var i = 0; i < categories.length; i++) {
                                        res[i] = Object.keys(categories[i]).toString();
                                    }
                                    return res;
                            },
                getCategoriesNames: function () {
                                    var res = [];
                                    for (var i = 0; i < categories.length; i++) {
                                        res[i] = Object.values(categories[i]).toString();
                                    }
                                    return res;
                            },
                categoryKeyToName: function (key) {
                                    for (var i = 0; i < categories.length; i++) {
                                        if (key === Object.keys(categories[i]).toString())
                                            return categories[i][key];
                                    }
                                    return null;
                            },
                    categoryIcons:  [
                                      "fas fa-bullhorn", "fas fa-handshake", "fas fa-map", "fas fa-grin-wink", "fas fa-sort-numeric-up", 
                                      "fas fa-atlas", "fas fa-palette", "fas fa-calendar-alt", "fas fa-clock", "fas fa-car", 
                                      "fas fa-utensils", "fas fa-lemon", "fas fa-shopping-cart", "fas fa-hotel", "fas fa-user-md", 
                                      "fas fa-plane-departure", "fas fa-location-arrow", "fas fa-sun", "fas fa-users", "fas fa-dove", 
                                      "fas fa-tshirt", "fas fa-language", "fas fa-male", "fas fa-car-crash", "fas fa-tasks"
                                    ],
                        bgColors: [
                                    "bg-primary", 
                                    "bg-warning", 
                                    "bg-success", 
                                    "bg-danger"
                                  ],
                     bgGradients: [
                                    "primary-gradient",
                                    "warning-gradient", 
                                    "success-gradient", 
                                    "danger-gradient"
                                  ],
                        calcTime: function (time, offset) {
                                    var jsDate = new Date(time);
                                    
                                    if (jsDate instanceof Date && !isNaN(jsDate))
                                    {
                                        var utc = jsDate.getTime(); // + (offset * 60000);
                                        var nd = new Date(utc + (offset * 3600000));
                                        // console.log("nd: " + nd);
                                        // console.log("New Date: " + nd.toLocaleDateString("en-US", 
                                        //                                                 { weekday: 'long', year: 'numeric', month: 'long', 
                                        //                                                   day: 'numeric', hour: 'numeric', minute: 'numeric', 
                                        //                                                   second: 'numeric' }));
                                        return nd.toLocaleDateString("en-US", 
                                                                    { weekday: 'long', year: 'numeric', month: 'long', 
                                                                      day: 'numeric', hour: 'numeric', minute: 'numeric', 
                                                                      second: 'numeric' });
                                    } else {
                                        return time.toLocaleDateString("en-US", 
                                                                    { weekday: 'long', year: 'numeric', month: 'long', 
                                                                      day: 'numeric', hour: 'numeric', minute: 'numeric', 
                                                                      second: 'numeric' });
                                    }
                                }
};