const mongoose = require('mongoose');
var Vocabulary = require('./models/vocabModel');

// Define model for vocabulary
var url = process.env.DATABASEURL || 'mongodb://localhost:27017/slovak-app';

// Connect to MongoDB
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Sample vocabulary data
var categories = {
    basicPhrases: {
        "Yes" : ["Áno"],
        "No" : ["Nie"],
        "Thank you" : ["Ďakujem"],
        "Please" : ["Prosím"],
        "Excuse me" : ["Prepáčte"],
        "Sorry" : ["Prepáč", "Prepáčte"],
        "You are welcome" : ["Prosím"],
        "Not at all" : ["Niet za čo"],
        "Stop!" : ["Zastavte!"],
        "Help" : ["Pomoc"],
        "I need help" : ["Potrebujem pomoc"],
        "Welcome" : ["Vitaj", "Vitajte"],
        "Of course" : ["Samozrejme"],
        "Ok" : ["Dobre"],
        "Never mind" : ["To nič", "To nevadí"],
        "Nothing happened" : ["Nič sa nestalo"],
        "Cheers" : ["Na zdravie"],
        "Bless you" : ["Na zdravie"],
        "My pleasure" : ["Rado sa stalo"],
        "Not at all" : ["Vôbec nie"],
        "Here you are" : ["Nech sa páči"],
        "After you" : ["Nech sa páči"],
        "How much" : ["Koľko"],
        "How much does it cost?" : ["Koľko to stojí?"],
        "I am American (male)" : ["Ja som američan"],
        "I am American (fem)" : ["Ja som američanka"],
        "I am not English (male)" : ["Ja nie som angličan"],
        "I am not English (fem)" : ["Ja nie som anličanka"],
        "What's your name?" : ["Ako sa voláš?"],
        "My name is Martin" : ["Volám sa Martin"],
        "Mr." : ["Pán"],
        "Mrs." : ["Pani"],
        "Miss" : ["Slečna"],
        "Sit down" : ["Sadnite si"],
        "Happy Birthday" : ["Všetko najlepšie k narodeninám"],
        "Happy Nameday" : ["Všetko najlepšie k meninám"],
        "Happy Valentine's Day" : ["Šťastného Velentína"],
        "Merry Christmas" : ["Veselé vianoce"],
        "Happy New Year" : ["Šťastný Nový Rok"],
        "Basic Conversation" : ["Jednoduchá konverzácia"],
        "How are you? (informal)" : ["Ako sa máš?"],
        "How are you? (formal)" : ["Ako sa máte?"],
        "I am fine, thank you" : ["Ďakujem, mám sa dobre"],
        "Where are you from? (formal)" : ["Odkiaľ pochádzaš?"],
        "Where are you from? (informal)" : ["Odkiaľ si?"],
        "I am from Bratislava" : ["Ja som z Bratislavy"],
        "Where do you live?" : ["Kde bývaš?"],
        "I live in New York" : ["Bývam v New Yorku"],
        "Do you speak English?" : ["Hovoríte anglicky?"],
        "I can speak English very well" : ["Veľmi dobre hovorím Anglicky"],
        "Little bit" : ["Trochu"],
        "Do you understand?" : ["Rozumiete?"],
        "I do not understand" : ["Nerozumiem"],
        "Speak slowly" : ["Hovorte pomaly"],
        "Nice to meet you" : ["Teší ma"],
        "I want" : ["Ja chcem", "Chcem"],
        "I do not want" : ["Ja nechcem"],
        "I would like ..." : ["Chcel by som ..."]
    },
    greetings: {
        "Good morning" : ["Dobré ráno"],
        "Good day" : ["Dobrý deň"],
        "Good afternoon" : ["Dobré popoludnie"],
        "Good evening" : ["Dobrý večer"],
        "Good night" : ["Dobrú noc"],
        "Goodbye, Bye, See you (formal)" : ["Dovidenia"],
        "Hello (informal)" : ["Ahoj", "Ahojte"],
        "Hi (very informal)" : ["Čau", "Čaute"],
        "How are you doing?" : ["Ako sa ti darí?"],
        "As usual" : ["Ako zvyčajne"],
        "Not good" : ["Nie veľmi dobre"],
        "Fine, thank you" : ["Ďakujem, mám sa fajn"],
        "Fine, and you? (formal)" : ["Dobre a vy?"],
        "Fine, and you? (informal)" : ["Dobre a ty?"],
        "Bon appétit" : ["Dobrú chuť"],
        "See you later" : ["Uvidíme sa"],
        "See you tomorrow" : ["Uvidíme sa zajtra"],
        "Congratulations" : ["Gratulujem"],
        "Happy birthday" : ["Všetko najlepšie k narodeninám"],
        "Nice to meet you" : ["Teší ma"],
        "Nice to see you" : ["Rád Vás vidím", "Rada Vás vidím"],
        "Welcome (formal)" : ["Vitajte"],
        "Welcome (informal)" : ["Vitaj"]
    },
    directions: {
        "Straight" : ["Rovno"],
        "Right (Directions)" : ["Vpravo"],
        "Left (Directions)" : ["Vľavo"],
        "Corner" : ["Roh"],
        "Square" : ["Námestie"],
        "Crossroads" : ["križovatka"],
        "At the corner" : ["Na rohu"],
        "At the crossroads" : ["Na križovatke"],
        "Entrance" : ["Vchod"],
        "Exit" : ["Východ"],
        "Where is?" : ["Kde je?"],
        "Where is the post office?" : ["Kde je pošta?"],
        "The post office is on the left" : ["Pošta je vľavo"],
        "It is on the right" : ["Je vpravo"],
        "Go straight" : ["Choďte rovno. "],
        "Road signs" : ["Dopravné značky"],
        "How far is it?" : ["Ako ďaleko je to?"],
        "On the left" : ["Vľavo", "Naľavo"],
        "On the right" : ["Vpravo", "Napravo"],
        "Turn back" : ["Otočte sa"],
        "Next to" : ["vedľa"],
        "Close to" : ["v blízkosti"],
        "Near" : ["blázko"],
        "On foot" : ["pešo"],
        "Opposite" : ["oproti"],
        "To Bratislava" : ["do Bratislavy"],
        "From Bratislava" : ["z Bratislavy"],
        "Can you tell me where the bus stop is?" : ["Prosím vás kde je autobusová zastávka?"],
        "Could you tell me the way to the bus station?" : ["Prosím vás kadiaľ sa dostanem na autobusovú stanicu?"],
        "Is this the right line for ...?" : ["Je toto linka k ...?"],
        "Where to change for ... please?" : ["Kde mám prestúpiť na ... prosím?"],
        "Can you get me to ..." : ["Môžete ma zaviesť do ..."],
        "I want to fly to ..." : ["Chcem letieť do ...", "Ja chcem letieť do ..."],
        "Can you show me the way?" : ["Môžete mi ukázať cestu?"],
        "Turn left" : ["Zabočíte doľava", "Zabočte vľavo"],
        "Turn right" : ["Zabočíte doprava", "Zabočte vpravo"],
        "Go straight" :["Choďte rovno"],
        "Far from" : ["Ďaleko od"],
        "Along/Around" : ["Pozdĺž", "Okolo"],
        "Next" : ["Ďalší"],
        "Crossing" : ["Križovatka"],
        "Ticket" : ["Cestovný lístok"],
        "Near" : ["Blízko"],
        "Far" : ["Ďaleko"],
        "Get off" : ["Vystúpiť"]
    },
    pronouns: {
        "Personal pronouns" : ["Osobné zámená"],
        "I" : ["ja"],
        "You (informal)" : ["ty"],
        "He" : ["on"],
        "She" : ["ona"],
        "It" : ["ono"],
        "We" : ["my"],
        "You (formal)" : ["vy"],
        "They (masc)" : ["oni"],
        "They (fem)" : ["ony"],
        "Possessive pronouns" : ["Privlastňovacie zámená"],
        "My (masc)" : ["môj"],
        "My (fem)" : ["moja"],
        "My (neuter)" : ["moje"],
        "Your (informal masc)" : ["tvoj"],
        "Your (informal fem)" : ["tvoja"],
        "Your (informal neuter)" : ["tvoje"],
        "His (masc)" : ["jeho"],
        "His (fem)" : ["jeho"],
        "His (neuter)" : ["jeho"],
        "Her (masc)" : ["jej"],
        "Her (fem)" : ["jej"],
        "Her (neuter)" : ["jej"],
        "Our (masc)" : ["náš"],
        "Our (fem)" : ["naša"],
        "Our (neuter)" : ["naše"],
        "Your (formal/pl masc)" : ["váš"],
        "Your (formal/pl fem)" : ["vaša"],
        "Your (formal/pl neuter)" : ["vaše"],
        "Their (masc)" : ["ich"],
        "Their (fem)" : ["ich"],
        "Their (neuter)" : ["ich"],
        "Interrogative pronouns" : ["Opytovacie zámená"],
        "Where (place)" : ["Kde"],
        "Where (direction)" : ["kam"],
        "What" : ["Čo"],
        "Why" : ["Prečo"],
        "When" : ["Kedy"],
        "Which" : ["Ktorý"],
        "Who" : ["Kto"],
        "How much" : ["Koľko"],
        "How many" : ["Koľko"]
    },
    numbers: {
        "Ordinal numbers" : ["Radové číslice"],
        "First" : ["Prvý"],
        "Second" : ["Druhý"],
        "Third" : ["Tretí"],
        "Forth" : ["Štvrtý"],
        "Fifth" : ["Piaty"],
        "Sixth" : ["Šiesty"],
        "Seventh" : ["Siedmy"],
        "Eighth" : ["Ôsmy"],
        "Ninth" : ["Deviaty"],
        "Tenth" : ["Desiaty"],
        "Numbers" : ["Čísla"],
        "One" : ["Jeden"],
        "Two" : ["Dva"],
        "Three" : ["Tri"],
        "Four" : ["Štyri"],
        "Five" : ["Päť"],
        "Six" : ["Šesť"],
        "Seven" : ["Sedem"],
        "Eight" : ["Osem"],
        "Nine" : ["Deväť"],
        "Ten" : ["Desať"],
        "Twenty" : ["Dvadsať"],
        "Thirty" : ["Tridsať"],
        "Forty" : ["Štyridsať"],
        "Fifty" : ["Päťdesiat"],
        "Sixty" : ["Šesťdesiat"],
        "Seventy" : ["Sedemdesiat"],
        "Eighty" : ["Osemdesiat"],
        "Ninety" : ["Deväťdesiat"],
        "Hundred" : ["Sto"],
        "Thousand" : ["Tisíc"],
        "5" : ["Päť"],
        "25" : ["Dvadsaťpäť"],
        "125" : ["Stodvadsaťpäť"],
        "1825" : ["Tisícosemstodvadsaťpäť"]
    },
    emergency: {
        "Ambulance" : ["Sanitka"],
        "Police" : ["Polícia"],
        "Fire Brigade" : ["Hasiči"],
        "Fire" : ["Oheň"],
        "Help" : ["Pomoc"],
        "Accident" : ["Nehoda"],
        "Police Station" : ["Policajná stanica"],
        "Attention please!" : ["Prosím pozor!"],
        "Doctor" : ["Lekár"],
        "Hospital" : ["Nemocnica"],
        "Pharmacy" : ["Lekáreň"],
        "Emergency" : ["Pohotovosť"],
        "Emergency exit" : ["Únikový východ"],
        "Entry" : ["Vchod"],
        "Exit" : ["Východ"],
        "Can you help me" : ["Môžete mi pomôcť"],
        "I need help" : ["Potrebujem pomoc"],
        "Call the ambulance" : ["Zavolajte pohotovosť"],
        "Call the police" : ["Zavolajte políciu"],
        "I have been robbed" : ["Okradli ma"],
        "I am injured" : ["Som zranený"]
    },
    adjectives: {
        "Small" : ["Malý"],
        "Little" : ["Malý"],
        "Big" : ["Veľký"],
        "Hot (Adjective)" : ["Horúci"],
        "Cold (Adjective)" : ["Studený", "Chladný"],
        "Good (Adjective)" : ["Dobrý"],
        "Bad" : ["Zlý"],
        "Right (Correct)" : ["Správny"],
        "Wrong" : ["Nesprávny"],
        "Open" : ["Otvorený"],
        "Closed" : ["Zatvorený"],
        "Cheap" : ["Lacný"],
        "Expensive" : ["Drahý"],
        "Old" : ["Starý"],
        "Young" : ["Mladý"],
        "New" : ["Nový"],
        "Nice" : ["Milý"],
        "Pretty" : ["Pekný"],
        "Ugly" : ["škaredý"],
        "Thick" : ["Hrubý"],
        "Thin" : ["Chudý", "Tenký"],
        "Fat" : ["Tučný", "Tlstý"],
        "Slim" : ["štíhly"],
        "Tall" : ["Vysoký"],
        "Short" : ["Krátky"],
        "Long" : ["Dlhý"],
        "Heavy" : ["ťažký"],
        "Light (Adjective)" : ["ľahký"]
    },
    colors: {
        "White" : ["biely"],
        "Black" : ["čierny"],
        "Red" : ["červený"],
        "Blue" : ["modrý"],
        "Green" : ["zelený"],
        "Yellow" : ["žltý"],
        "Brown" : ["hendý"],
        "Grey" : ["šedý"],
        "Orange" : ["oranžový"],
        "Purple" : ["fialový"],
        "Pink" : ["ružový"]
    },
    periods: {
        "Days of the week" : ["Dni v týždni"],
        "Monday" : ["Pondelok"],
        "Tuesday" : ["Utorok"],
        "Wednesday" : ["Streda"],
        "Thursday" : ["Štvrtok"],
        "Friday" : ["Piatok"],
        "Saturday" : ["Sobota"],
        "Sunday" : ["Nedeľa"],
        "Months" : ["Mesiace"],
        "January" : ["Január"],
        "Február" : ["Február"],
        "March" : ["Marec"],
        "April" : ["Apríl"],
        "May (Month)" : ["Máj"],
        "June" : ["Jún"],
        "July" : ["Júl"],
        "August" : ["August"],
        "September" : ["September"],
        "October" : ["Október"],
        "November" : ["November"],
        "December" : ["December"],
        "Seasons of the year" : ["Ročné obdobia"],
        "Spring" : ["Jar"],
        "Summer" : ["Leto"],
        "Autumn" : ["Jeseň"],
        "Winter" : ["Zima"],
        "Day" : ["Deň"],
        "Week" : ["týždeň"],
        "Month" : ["mesiac"],
        "Year" : ["rok"],
        "Decade" : ["desaťročie"],
        "Century" : ["storočie"],
        "Morning" : ["ráno"],
        "Afternoon" : ["popoludnie"],
        "Evening" : ["večer"],
        "Noon" : ["poludnie"],
        "Midnight" : ["polnoc"]
    },
    timeExpressions: {
        "What is the time?" : ["Koľko je hodín?"],
        "It is 5 o’clock" : ["Je päť hodín"],
        "Half past 5" : ["Pol 6", "Pol šiestej"],
        "Quarter past 5" : ["Štvrť na 6", "Štvrť na šesť"],
        "Quarter to 6" : ["Trištvrte na 6", "Trištvrte na šesť"],
        "6:10" : ["6 hodín a 10 minút", "Šesť hodín a desať minút", "Šesť hodín a 10 minút", "Šesť hodín a 10 minút"],
        "As soon as possible" : ["Čo najskôr", "Čím skôr"],
        "Early" : ["Skoro", "Zavčasu"],
        "Late" : ["Neskoro"],
        "In the morning" : ["Ráno"],
        "In the afternoon" : ["Popoludní"],
        "In the evening" : ["Večer"],
        "At seven o’clock" : ["O siedmej"],
        "Today" : ["Dnes"],
        "Tomorrow" : ["Zajtra"],
        "Yesterday" : ["Včera"],
        "Now" : ["Teraz"],
        "The day before yesterday" : ["Predvčerom"],
        "The day after tomorrow" : ["Pozajtra"],
        "This month" : ["Tento mesiac"]
    },
    carRental: {
        "I would like to rent a car please" : ["Rád by som si požičal auto"],
        "How long would you like it?" : ["Na ako dlho?"],
        "How much it cost per day?" : ["Koľko to stojí na deň?"],
        "Rent a car" : ["Požičať auto"],
        "Driving licence" : ["Vodičský preukaz"],
        "To reserve/To book" : ["Rezervovať"],
        "Door" : ["Dvere"],
        "Keys" : ["Kľúče"],
        "Breakdown" : ["Porucha"],
        "Petrol" : ["Benzín"],
        "Diesel" : ["Nafta"],
        "Car insurance" : ["Poistenie automobilu", "Poistka automobilu"],
        "Pick up date" : ["Dátum vyzdvihnutia"],
        "Return date" : ["Dátum odovzdania"]
    },
    restaurant: {
        "Restaurant" : ["Reštaurácia"],
        "Menu" : ["Menu", "Jedálny lístok"],
        "Appetizers" : ["Predjedlá"],
        "Meal" : ["Jedlo"],
        "Main dish" : ["Hlavné jedlo"],
        "Soup" : ["Polievka"],
        "Dessert" : ["Dezert"],
        "Beverage" : ["Nápoj"],
        "Meat" : ["Mäso"],
        "Pasta" : ["Cestoviny"],
        "Salad" : ["Šalát"],
        "Beef" : ["Hovädzie"],
        "Pork" : ["Bravčové"],
        "Chicken" : ["Kura", "Kuracie"],
        "Fish" : ["Ryba"],
        "Coffee" : ["Káva"],
        "Beer" : ["Pivo"],
        "Red wine" : ["Červené vino"],
        "White wine" : ["Biele víno"],
        "Side dishes" : ["Prílohy"],
        "Cutlery" : ["príbor"],
        "Fork" : ["vidlička"],
        "Knife" : ["nôž"],
        "Spoon" : ["lyžička"],
        "Cup" : ["šálka"],
        "Glass" : ["pohár"],
        "Tissues" : ["servítky"],
        "Bottle" : ["fľaša"],
        "Waiter" : ["čiašnik"],
        "Waitress" : ["čiašnička"],
        "Bill" : ["Účet"],
        "Do you have an English menu?" : ["Máte anglické menu?"],
        "I would like ..." : ["Dal by som si ..."],
        "Can I get the bill?" : ["Môžem dostať účet?"],
        "Tip" : ["Sprepitné", "Tringelt"]
    },
    food: {
        "Milk" : ["Mlieko"],
        "Coffee" : ["Káva"],
        "Tea" : ["Čaj"],
        "Water" : ["Voda"],
        "Salt" : ["Soľ"],
        "Sugar" : ["Cukor"],
        "Bread" : ["Chlieb"],
        "Fruit" : ["Ovocie"],
        "Butter" : ["maslo"],
        "Egg" : ["vajce"],
        "Ham" : ["šunka"],
        "Vegetables" : ["Zelenina"],
        "Cheese" : ["syr"],
        "Rise" : ["Ryža"],
        "Potato" : ["Zemiaky"],
        "Chips" : ["Hranolky"],
        "Wine" : ["Víno"],
        "Apple" : ["Jablko"],
        "Pear" : ["Hruška"],
        "Peach" : ["Broskyňa"],
        "Apricot" : ["Marhuľa"],
        "Plum" : ["Slivka"],
        "Grapes" : ["Hrozno"],
        "Water melon" : ["Melón"],
        "Orange" : ["Pomaranč"],
        "Banana" : ["Banán"],
        "Pineapple" : ["Ananás"],
        "Tomato" : ["Rajčina", "Paradajka"],
        "Pepper" : ["Paprika"],
        "Cabbage" : ["Kapusta"],
        "Iceberg lettuce" : ["Šalát"],
        "Carrot" : ["Mrkva"],
        "Parsley" : ["Petržlen"],
        "Onion" : ["Cibuľa"],
        "Garlic" : ["Cesnak"],
        "Broccoli" : ["Brokolica"],
        "Cucumber" : ["Uhorka"],
        "Potatoes" : ["Zemiaky"],
        "Biscuits" : ["keksy"],
        "Chocolate" : ["čokoláda"],
        "Sweets" : ["cukríky"],
        "Chewing gum" : ["žuvačka"],
        "Apples": ["jablká"],
        "Bananas": ["banány"],
        "Tomatoes": ["paradajky"],
        "Onions": ["cibuľa"]
    },
    shopping: {
        "Shop" : ["Obchod"],
        "Supermarket" : ["supermarket"],
        "Butcher" : ["Mäso"],
        "Sale" : ["výpredaj"],
        "Cotton" : ["bavlna"],
        "Wool" : ["Vlna"],
        "Shoe Shop" : ["Obuv"],
        "Toys" : ["hračky"],
        "Clothes" : ["obelčenie"],
        "Bag" : ["taška"],
        "Open" : ["Otvorené"],
        "Closed" : ["Zatvorené"],
        "Opening hours" : ["Otváracie hodiny"],
        "Push" : ["Tlačiť", "Tam"],
        "Pull" : ["Ťahať", "Sem"],
        "Out for Lunch" : ["Obedná prestávka"],
        "I would like to pay (male)" : ["Chcel by som zaplatiť"],
        "I would like to pay (fem)" : ["Chcela by som zaplatiť"],
        "I would like a bigger size (male)" : ["Chcel by som väčšie čislo"],
        "I would like a bigger size (fem)" : ["Chcela by som väčšie čislo"],
        "I would like a smaller size (male)" : ["Chcel by som menšie čislo"],
        "I would like a smaller size (fem)" : ["Chcela by som menšie čislo"],
        "Changing room" : ["Skúšobná kabínka"],
        "How much is it?" : ["Koľko to stojí?"]
    },
    accomodation: {
        "Room" : ["Izba"],
        "Bed" : ["Posteľ"],
        "Single room" : ["jednopostelová izba"],
        "Double room" : ["Dvojpostelová izba"],
        "Hotel" : ["Hotel"],
        "Reception" : ["Recepcia"],
        "Breakfast" : ["raňajky"],
        "Lunch": ["obed"],
        "Dinner": ["večera"],
        "Full board" : ["plná peniza"],
        "Half board" : ["polpenzia"],
        "To book" : ["rezervovať"]
    },
    doctor: {
        "Doctor" : ["Lekár"],
        "Ambulance" : ["Sanitka"],
        "Emergency" : ["Pohotovosť"],
        "Hospital" : ["Nemocnica"],
        "Pharmacy" : ["Lekáreň"],
        "Dentist" : ["Zubár"],
        "Pain" : ["Bolesť"],
        "Headache" : ["Bolesť hlavy"],
        "Stomachache" : ["Bolesť brucha"],
        "Toothache" : ["blesť zubov"],
        "Flu" : ["Chrípka"],
        "Call the doctor" : ["Zavolajte lekára"],
        "Call the ambulance" : ["Zavolajte sanitku"],
        "Fracture" : ["zlomenina"],
        "I have a toothache" : ["Bolí ma zub"],
        "Injection" : ["injekcia"],
        "Thermometer" : ["teplomer"]
    },
    travel: {
        "Airport" : ["Letisko"],
        "Aircraft" : ["Lietadlo"],
        "Bus station" : ["Autobusová stanica"],
        "Railway station" : ["Železničná stanica"],
        "Bus" : ["Autobus"],
        "Car" : ["Auto"],
        "Train" : ["Vlak"],
        "Tram" : ["Električka"],
        "Motorbike" : ["Motorka"],
        "Bicycle" : ["Bicykel"],
        "Taxi" : ["Taxík", "Taxi"],
        "Public Transport" : ["Verejná doprava"]
    },
    places: {
        "School" : ["škola"],
        "University" : ["unverzita"],
        "Post office" : ["pošta"],
        "Bank" : ["banka"],
        "Supermarket" : ["supermarket"],
        "Shopping center" : ["obchodné centrum"],
        "Hotel" : ["hotel"],
        "Church" : ["kostol"],
        "Mosque" : ["mešita"],
        "Synagogue" : ["sinagóga"],
        "Cathedral" : ["katedrála"],
        "Castle" : ["hrad"],
        "Mountain range" : ["pohorie"],
        "River" : ["rieka"],
        "Lake" : ["jazero"],
        "Town/city" : ["mesto"],
        "Village" : ["dedina"],
        "Exchange buro" : ["zmenáreň"],
        "Gas station" : ["čerpacia stanica", "Benzinka"],
        "Museum" : ["múzeum"],
        "Gallery" : ["galéria"],
        "Restaurant" : ["reštaurácia"],
        "Café" : ["kaviareň"],
        "Bar" : ["bar"],
        "Fast food" : ["rýchle občerstvenie"],
        "Town centre" : ["centrum mesta"],
        "Police station" : ["policajná stanica"],
        "Toilettes" : ["WC", "Toalety"]
    },
    weather: {
        "Sunny": ["slnečno"],
        "Windy": ["veterno"],
        "Rainy": ["prší"],
        "Snowy": ["sneženie"],
        "Cold (Weather)": ["zima"],
        "Hot (Weather)": ["horúco"],
    },
    family: {
        "Boy": ["chlapec"],
        "Girl": ["dievča"],
        "Son": ["syn"],
        "Daughter": ["dcéra"],
        "Brother": ["brat"],
        "Sister": ["sestra"],
        "Man": ["muž"],
        "Woman": ["žena"],
        "Father": ["otec"],
        "Mother": ["matka"],
        "Grandfather": ["dedko"],
        "Grandmother": ["babka"],
        "Parents": ["rodičia"],
        "Aunt (mother's sister)": ["teta"],
        "Uncle (mother's brother)": ["ujo"],
        "Aunt (father's sister)": ["stryná"],
        "Uncle (father's brother)": ["strýko"],
        "Siblings": ["súrodenci"],
        "Grandson": ["vnuk"],
        "Granddaughter": ["vnučka"],
        "Male cousin": ["bratranec"],
        "Female cousin": ["sesternica"],
        "Nephew": ["synovec"],
        "Niece": ["neter"],
        "Husband": ["manžel"],
        "Wife": ["manželka"],
        "Fiancé": ["snúbenec"],
        "Fiancée": ["núbenica"],
        "Son-in-law": ["zať"],
        "Daughter-in-law": ["nevesta"],
        "Mother-in-law": ["svokra"],
        "Father-in-law": ["svokor"],
        "Brother-in-law": ["švagor"],
        "Sister-in-law": ["švagriná"],
        "Godfather": ["krstný otec"],
        "Godmother": ["krstná mama"],
        "Boyfriend (or close friend)": ["priateľ"],
        "Girlfriend (or close friend)": ["priateľka"],
        "Boyfriend": ["frajer"],
        "Girlfriend": ["frajerka"],
        "Friend (male)": ["kamarát"],
        "Friend (female)": ["kamarátka"]
    },
    animals: {
        "Cat": ["mačka"],
        "Dog": ["pes"],
        "Mouse": ["myš"],
        "Bird": ["vták"],
        "Cow": ["krava"],
        "Horse": ["kôň"]
    },
    clothes: {
        "Socks": ["ponožky"],
        "Shoes": ["topánky"],
        "Trousers": ["nohavice"],
        "Shirt": ["košeľa"],
        "Sweatshirt": ["mikina"],
        "Hoodie": ["mikina"],
        "Sweater": ["sveter"],
        "Coat": ["kabát"]
    },
    languages: {
        "English (lang)": ["angličtina"],
        "French (lang)": ["francúzština"],
        "German (lang)": ["nemčina"],
        "Spanish (lang)": ["španielčina"],
        "Italian (lang)": ["taliančina"],
        "Portuguese (lang)": ["portugalčina"],
        "Greek (lang)": ["gréčtina"],
        "Russian (lang)": ["ruština"],
        "Arabic (lang)": ["arabčina"],
        "Hindi (lang)": ["hindčina"],
        "Chinese (lang)": ["čínština"],
        "Japanese (lang)": ["japončina"]
    },
    bodyParts: {
        "Hand": ["ruka"],
        "Feet": ["chodidlo"],
        "Hair": ["vlasy"],
        "Eye": ["oko"],
        "Mouth": ["ústa"],
        "Nose": ["nos"]
    },
    characteristics: {
        "Good": ["dobrý"],
        "Bad": ["zlý"],
        "Big": ["veľký"],
        "Small": ["malý"],
        "Tall": ["vysoký"],
        "Short (height)": ["nízky"],
        "Young": ["mladý"],
        "Old": ["starý"],
        "New": ["nový"],
        "Fat": ["tučný"],
        "Thin": ["chudý"],
        "Nice (pretty)": ["pekný"],
        "Ugly": ["škaredý"],
        "Attractive": ["atraktívny"],
        "Wide": ["široký"],
        "Narrow": ["úzky"],
        "Long": ["dlhý"],
        "Short (length)": ["krátky"],
        "Nice (personality)": ["milý"],
        "Pleasant": ["príjemný"],
        "Unpleasant": ["nepríjemný"],
        "Smart": ["múdry"],
        "Stupid": ["hlúpy"],
        "Intelligent": ["inteligentný"],
        "Strong": ["silný"],
        "Weak": ["slabý"],
        "Hard-working": ["usilovný"],
        "Lazy": ["lenivý"],
        "Funny (witty)": ["vtipný"],
        "Funny (ha-ha)": ["smiešny"],
        "Entertaining": ["zábavný"],
        "Boring": ["nudný"],
        "Clean": ["čistý"],
        "Dirty": ["špinavý"],
        "Humble": ["skromný"],
        "Arrogant": ["arogantný"],
        "Happy": ["veselý"],
        "Lucky": ["šťastný"],
        "Sad": ["smutný"]
    }
};

async function populateVocab() {
    try {
        // Fetch existing data
        const existingVocab = await Vocabulary.find({});

        // Prepare new data
        const vocabData = [];
        Object.keys(categories).forEach(function (category) {
            Object.keys(categories[category]).forEach(function (key) {
                var vocabElement = {};
                vocabElement.english = key;
                vocabElement.slovak  = categories[category][key];
                vocabElement.category = category;
                vocabData.push(vocabElement);
            });
        });

        // Get changes
        const changes = getChangedEntries(existingVocab, vocabData);

        // Apply changes
        if (changes.length > 0) {
            await Vocabulary.bulkWrite(changes);
            console.log('Vocabulary data updated successfully');
        } else {
            console.log('No changes detected');
        }
    } catch (error) {
        console.error('Error updating vocabulary data', error);
    } finally {
        mongoose.disconnect();
    }
}

function getChangedEntries(existingVocab, newVocabData) {
    const changes = [];

    newVocabData.forEach(newEntry => {
        const existingEntry = existingVocab.find(
                entry => entry.english === newEntry.english && entry.category === newEntry.category
        );

        if (existingEntry) {
            // Check if slovak words are different
            const isDifferent = existingEntry.slovak.length !== newEntry.slovak.length ||
                                existingEntry.slovak.some((word, index) => word !== newEntry.slovak[index]);

            if (isDifferent) {
                changes.push({
                    updateOne: {
                        filter: { _id: existingEntry._id },
                        update: { $set: { slovak: newEntry.slovak } }
                    }
                });
            }
        } else {
            // New entry that doesn't exist in the current database
            changes.push({
                insertOne: { document: newEntry }
            });
        }
    });

    return changes;
}

populateVocab()
