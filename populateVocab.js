( function () {
    var mongoose   = require('mongoose');
    var Vocabulary = require('./models/vocabModel');
    var config     = require('./config');
    var dev = true; // Change from development environment to production and vice-versa
    
    mongoose.connect(config.getDbConnectionString(dev)); // Connect to DB
    
    var categories = {
        numbers: {
                "One": "jeden",
                "Two": "dva",
                "Three": "tri",
                "Four": "štyri",
                "Five": "päť",
                "Six": "šesť",
                "Seven": "sedem",
                "Eight": "osem",
                "Nine": "deväť",
                "Ten": "desať",
                "Eleven": "jedenásť",
                "Twelve": "dvanásť",
                "Thirteen": "trinásť",
                "Fourteen": "štrnásť",
                "Fifteen": "pätnásť",
                "Sixteen": "šestnásť",
                "Seventeen": "sedemnásť",
                "Eighteen": "osemnásť",
                "Nineteen": "devätnásť",
                "Twenty": "dvadsať",
                "Thirty": "tridsať",
                "Forty": "štyridsať",
                "Fifty": "päťdesiat",
                "Sixty": "šesťdesiat",
                "Seventy": "sedemdesiat",
                "Eighty": "osemdesiat",
                "Ninety": "deväťdesiat",
                "One Hundred": "sto",
                "One Thousand": "tisíc",
                "One Million": "milión",
                "One Billion": "miliarda",
                "One Trillion": "bilión",
                "First": "prvý",
                "Second": "druhý"
            },
        daysOfWeek: {
                "Monday": "pondelok",
                "Tuesday": "utorok",
                "Wednesday": "streda",
                "Thursday": "štvrtok",
                "Friday": "piatok",
                "Saturday": "sobota",
                "Sunday": "nedeľa",
                "Now": "teraz",
                "Yesterday": "včera",
                "Today": "dnes",
                "Tonight": "dnes večer",
                "Tomorrow": "zajtra"
            },
        fruits: {
                "Fruits": "ovocie",
                "Apples": "jablká",
                "Bananas": "banány",
                "Tomatoes": "paradajky",
                "Potatoes": "zemiaky",
                "Onions": "cibuľa"
            },
        colors: {
                "Red": "červená",
                "Green": "zelená",
                "Blue": "modrá",
                "White": "biela",
                "Black": "čierna",
                "Grey": "šedá"
            },
        food: {
                "Breakfast": "raňajky",
                "Lunch": "obed",
                "Dinner": "večera",
                "Milk": "mlieko",
                "Coffee": "káva",
                "Bread": "chlieb"
            },
        weather: {
                "Sunny": "slnečno",
                "Windy": "veterno",
                "Rainy": "prší",
                "Snowy": "sneženie",
                "Cold": "zima",
                "Hot": "horúco"
            },
        family: {
                "Boy": "chlapec",
                "Girl": "dievča",
                "Son": "syn",
                "Daughter": "dcéra",
                "Brother": "brat",
                "Sister": "sestra",
                "Man": "muž",
                "Woman": "žena",
                "Father": "otec",
                "Mother": "matka",
                "Grandfather": "dedko",
                "Grandmother": "babka",
                "Parents": "rodičia",
                "Aunt (mother's sister)": "teta",
                "Uncle (mother's brother)": "ujo",
                "Aunt (father's sister)": "stryná",
                "Uncle (father's brother)": "strýko",
                "Siblings": "súrodenci",
                "Grandson": "vnuk",
                "Granddaughter": "vnučka",
                "Male cousin": "bratranec",
                "Female cousin": "sesternica",
                "Nephew": "synovec",
                "Niece": "neter",
                "Husband": "manžel",
                "Wife": "manželka",
                "Fiancé": "snúbenec",
                "Fiancée": "núbenica",
                "Son-in-law": "zať",
                "Daughter-in-law": "nevesta",
                "Mother-in-law": "svokra",
                "Father-in-law": "svokor",
                "Brother-in-law": "švagor",
                "Sister-in-law": "švagriná",
                "Godfather": "krstný otec",
                "Godmother": "krstná mama",
                "Boyfriend (or close friend)": "priateľ",
                "Girlfriend (or close friend)": "priateľka",
                "Boyfriend": "frajer",
                "Girlfriend": "frajerka",
                "Friend (male)": "kamarát",
                "Friend (female)": "kamarátka"
            },
        house: {
                "House": "dom",
                "Toilet": "záchod",
                "Room": "izba",
                "Bedroom": "spálňa",
                "Kitchen": "kuchyňa",
                "Table": "stôl"
            },
        animals: {
                "Cat": "mačka",
                "Dog": "pes",
                "Mouse": "myš",
                "Bird": "vták",
                "Cow": "krava",
                "Horse": "kôň"
            },
        clothes: {
                "Socks": "ponožky",
                "Shoes": "topánky",
                "Trousers": "nohavice",
                "Shirt": "košeľa",
                "Sweater": "mikina",
                "Coat": "kabát"
            },
        languages: {
                "English (lang)": "angličtina",
                "French (lang)": "francúzština",
                "German (lang)": "nemčina",
                "Spanish (lang)": "španielčina",
                "Italian (lang)": "taliančina",
                "Portuguese (lang)": "portugalčina",
                "Greek (lang)": "gréčtina",
                "Russian (lang)": "ruština",
                "Arabic (lang)": "arabčina",
                "Hindi (lang)": "hindčina",
                "Chinese (lang)": "čínština",
                "Japanese (lang)": "japončina"
            },
        travel: {
                "Taxi": "taxi",
                "Bus": "autobus",
                "Hotel": "hotel",
                "Reservation": "rezervácia",
                "Airport": "letisko",
                "Passport": "cestovný pas"
            },
        school: {
                "Student": "student",
                "Teacher": "učiteľ",
                "Pen": "pero",
                "Books": "knihy",
                "Page": "strana",
                "Dictionary": "slovník"
            },
        bodyParts: {
                "Hand": "ruka",
                "Feet": "chodidlo",
                "Hair": "vlasy",
                "Eye": "oko",
                "Mouth": "ústa",
                "Nose": "nos"
            },
        emergency: {
                "Ambulance": "sanitka",
                "Doctor": "lekár",
                "Hospital": "nemocnica",
                "Pharmacy": "lekáreň",
                "Police": "polícia",
                "Stomach Ache": "bolenie brucha"
            },
        characteristics: {
                "Good": "dobrý",
                "Bad": "zlý",
                "Big": "veľký",
                "Small": "malý",
                "Tall": "vysoký",
                "Short (height)": "nízky",
                "Young": "mladý",
                "Old": "starý",
                "New": "nový",
                "Fat": "tučný",
                "Thin": "chudý",
                "Nice (pretty)": "pekný",
                "Ugly": "škaredý",
                "Attractive": "atraktívny",
                "Wide": "široký",
                "Narrow": "úzky",
                "Long": "dlhý",
                "Short (length)": "krátky",
                "Nice (personality)": "milý",
                "Pleasant": "príjemný",
                "Unpleasant": "nepríjemný",
                "Smart": "múdry",
                "Stupid": "hlúpy",
                "Intelligent": "inteligentný",
                "Strong": "silný",
                "Weak": "slabý",
                "Hard-working": "usilovný",
                "Lazy": "lenivý",
                "Funny (witty)": "vtipný (witty)",
                "Funny (ha-ha)": "smiešny (ha-ha)",
                "Entertaining": "zábavný",
                "Boring": "nudný",
                "Clean": "čistý",
                "Dirty": "špinavý",
                "Humble": "skromný",
                "Arrogant": "arogantný",
                "Happy": "veselý",
                "lucky": "šťastný",
                "Sad": "smutný"
            }
    };
    
    Object.keys(categories).forEach(function (category) {
        Object.keys(categories[category]).forEach(function (key) {
            var pair = {};
            pair.english = key;
            pair.slovak  = categories[category][key];
            pair.category = category;
            Vocabulary.create(pair, function (err, result) {
                if (err) throw err;
                console.log(result);
            });
        });
    });
    
    return;
}());