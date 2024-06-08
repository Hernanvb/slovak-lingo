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
        "Yes": ["Áno"],
        "No": ["Nie"],
        "Thank you": ["Ďakujem"],
        "Please": ["Prosím"],
        "Excuse me": ["Prepáčte"],
        "Sorry": ["Prepáč", "Prepáčte"],
        "You are welcome": ["Prosím"],
        "Not at all": ["Niet za čo"],
        "Stop!": ["Zastavte!"],
        "Help": ["Pomoc"],
        "I need help": ["Potrebujem pomoc"],
        "Welcome": ["Vitaj", "Vitajte"],
        "Of course": ["Samozrejme"],
        "Ok": ["Dobre"],
        "Never mind": ["To nič", "To nevadí"],
        "Nothing happened": ["Nič sa nestalo"],
        "Cheers": ["Na zdravie"],
        "Bless you": ["Na zdravie"],
        "My pleasure": ["Rado sa stalo"],
        "Not at all": ["Vôbec nie"],
        "Here you are": ["Nech sa páči"],
        "After you": ["Nech sa páči"],
        "How much": ["Koľko"],
        "How much does it cost?": ["Koľko to stojí?"],
        "I am American (male)": ["Ja som američan"],
        "I am American (fem)": ["Ja som američanka"],
        "I am not English (male)": ["Ja nie som angličan"],
        "I am not English (fem)": ["Ja nie som anličanka"],
        "What's your name?": ["Ako sa voláš?"],
        "My name is ...": ["Volám sa ..."],
        "Mr.": ["Pán"],
        "Mrs.": ["Pani"],
        "Miss": ["Slečna"],
        "Sit down": ["Sadnite si"],
        "Happy Birthday": ["Všetko najlepšie k narodeninám"],
        "Happy Nameday": ["Všetko najlepšie k meninám"],
        "Happy Valentine's Day": ["Šťastného Velentína"],
        "Merry Christmas": ["Veselé vianoce"],
        "Happy New Year": ["Šťastný Nový Rok"],
        "Basic Conversation": ["Jednoduchá konverzácia"],
        "How are you? (informal)": ["Ako sa máš?"],
        "How are you? (formal)": ["Ako sa máte?"],
        "I am fine, thank you": ["Mám sa dobre, ďakujem", "Ďakujem, mám sa dobre"],
        "Where are you from? (formal)": ["Odkiaľ pochádzaš?"],
        "Where are you from? (informal)": ["Odkiaľ si?"],
        "I am from Bratislava": ["Ja som z Bratislavy"],
        "Where do you live?": ["Kde bývaš?"],
        "I live in New York": ["Bývam v New Yorku"],
        "Do you speak English?": ["Hovoríte anglicky?", "Hovoríte po anglicky?"],
        "I can speak English very well": ["Veľmi dobre hovorím Anglicky"],
        "Little bit": ["Trochu"],
        "Do you understand?": ["Rozumiete?"],
        "I do not understand": ["Nerozumiem"],
        "Speak slowly": ["Hovorte pomaly"],
        "Nice to meet you": ["Teší ma"],
        "I want": ["Ja chcem", "Chcem"],
        "I do not want": ["Ja nechcem"],
        "I would like ...": ["Chcel by som ..."],
        "Where is the bathroom?": ["Kde je toaleta?"],
        "I speak a little Slovak": ["Hovorím trochu po slovensky"],
        "I love you": ["Milujem ťa"]
    },
    greetings: {
        "Good morning": ["Dobré ráno"],
        "Good day": ["Dobrý deň"],
        "Good afternoon": ["Dobré popoludnie"],
        "Good evening": ["Dobrý večer"],
        "Good night": ["Dobrú noc"],
        "Goodbye, Bye, See you (formal)": ["Dovidenia"],
        "Hello (informal)": ["Ahoj", "Ahojte"],
        "Hi (very informal)": ["Čau", "Čaute"],
        "How are you doing?": ["Ako sa ti darí?"],
        "As usual": ["Ako zvyčajne"],
        "Not good": ["Nie veľmi dobre"],
        "Fine, thank you": ["Mám sa fajn, ďakujem", "Ďakujem, mám sa fajn"],
        "Fine, and you? (formal)": ["Dobre a vy?"],
        "Fine, and you? (informal)": ["Dobre a ty?"],
        "Bon appétit": ["Dobrú chuť"],
        "See you later": ["Vidíme sa neskôr", "Vidíme sa"],
        "See you tomorrow": ["Vidíme sa zajtra"],
        "Congratulations": ["Gratulujem"],
        "Happy birthday": ["Všetko najlepšie k narodeninám"],
        "Nice to meet you": ["Teší ma"],
        "Nice to see you": ["Rád Vás vidím", "Rada Vás vidím"],
        "Welcome (formal)": ["Vitajte"],
        "Welcome (informal)": ["Vitaj"]
    },
    directions: {
        "Straight": ["Rovno"],
        "Right (Directions)": ["Vpravo"],
        "Left (Directions)": ["Vľavo"],
        "Corner": ["Roh"],
        "Square": ["Námestie"],
        "Crossroads": ["križovatka"],
        "At the corner": ["Na rohu"],
        "At the crossroads": ["Na križovatke"],
        "Entrance": ["Vchod"],
        "Exit": ["Východ"],
        "Where is?": ["Kde je?"],
        "Where is the post office?": ["Kde je pošta?"],
        "The post office is on the left": ["Pošta je vľavo"],
        "It is on the right": ["Je vpravo"],
        "Go straight": ["Choďte rovno. "],
        "Road signs": ["Dopravné značky"],
        "How far is it?": ["Ako ďaleko je to?"],
        "On the left": ["Vľavo", "Naľavo"],
        "On the right": ["Vpravo", "Napravo"],
        "Turn back": ["Otočte sa"],
        "Next to": ["vedľa"],
        "Close to": ["v blízkosti"],
        "Near": ["blázko"],
        "On foot": ["pešo"],
        "Opposite": ["oproti"],
        "To Bratislava": ["do Bratislavy"],
        "From Bratislava": ["z Bratislavy"],
        "Can you tell me where the bus stop is?": ["Prosím vás kde je autobusová zastávka?"],
        "Could you tell me the way to the bus station?": ["Prosím vás kadiaľ sa dostanem na autobusovú stanicu?"],
        "Is this the right line for ...?": ["Je toto linka k ...?"],
        "Where to change for ... please?": ["Kde mám prestúpiť na ... prosím?"],
        "Can you get me to ...": ["Môžete ma zaviesť do ..."],
        "I want to fly to ...": ["Chcem letieť do ...", "Ja chcem letieť do ..."],
        "Can you show me the way?": ["Môžete mi ukázať cestu?"],
        "Turn left": ["Zabočíte doľava", "Zabočte vľavo"],
        "Turn right": ["Zabočíte doprava", "Zabočte vpravo"],
        "Go straight" :["Choďte rovno"],
        "Far from": ["Ďaleko od"],
        "Along/Around": ["Pozdĺž", "Okolo"],
        "Next": ["Ďalší"],
        "Crossing": ["Križovatka"],
        "Ticket": ["Cestovný lístok"],
        "Near": ["Blízko"],
        "Far": ["Ďaleko"],
        "Get off": ["Vystúpiť"]
    },
    pronouns: {
        "Personal pronouns": ["Osobné zámená"],
        "I": ["ja"],
        "You (informal)": ["ty"],
        "He": ["on"],
        "She": ["ona"],
        "It": ["ono"],
        "We": ["my"],
        "You (formal)": ["vy"],
        "They (masc)": ["oni"],
        "They (fem)": ["ony"],
        "Possessive pronouns": ["Privlastňovacie zámená"],
        "My (masc)": ["môj"],
        "My (fem)": ["moja"],
        "My (neuter)": ["moje"],
        "Your (informal masc)": ["tvoj"],
        "Your (informal fem)": ["tvoja"],
        "Your (informal neuter)": ["tvoje"],
        "His (masc)": ["jeho"],
        "His (fem)": ["jeho"],
        "His (neuter)": ["jeho"],
        "Her (masc)": ["jej"],
        "Her (fem)": ["jej"],
        "Her (neuter)": ["jej"],
        "Our (masc)": ["náš"],
        "Our (fem)": ["naša"],
        "Our (neuter)": ["naše"],
        "Your (formal/pl masc)": ["váš"],
        "Your (formal/pl fem)": ["vaša"],
        "Your (formal/pl neuter)": ["vaše"],
        "Their (masc)": ["ich"],
        "Their (fem)": ["ich"],
        "Their (neuter)": ["ich"],
        "Interrogative pronouns": ["Opytovacie zámená"],
        "Where (place)": ["Kde"],
        "Where (direction)": ["kam"],
        "What": ["Čo"],
        "Why": ["Prečo"],
        "When": ["Kedy"],
        "Which": ["Ktorý"],
        "Who": ["Kto"],
        "How much": ["Koľko"],
        "How many": ["Koľko"]
    },
    numbers: {
        "Ordinal numbers": ["Radové číslice"],
        "First": ["Prvý"],
        "Second": ["Druhý"],
        "Third": ["Tretí"],
        "Forth": ["Štvrtý"],
        "Fifth": ["Piaty"],
        "Sixth": ["Šiesty"],
        "Seventh": ["Siedmy"],
        "Eighth": ["Ôsmy"],
        "Ninth": ["Deviaty"],
        "Tenth": ["Desiaty"],
        "Numbers": ["Čísla"],
        "One": ["Jeden"],
        "Two": ["Dva"],
        "Three": ["Tri"],
        "Four": ["Štyri"],
        "Five": ["Päť"],
        "Six": ["Šesť"],
        "Seven": ["Sedem"],
        "Eight": ["Osem"],
        "Nine": ["Deväť"],
        "Ten": ["Desať"],
        "Twenty": ["Dvadsať"],
        "Thirty": ["Tridsať"],
        "Forty": ["Štyridsať"],
        "Fifty": ["Päťdesiat"],
        "Sixty": ["Šesťdesiat"],
        "Seventy": ["Sedemdesiat"],
        "Eighty": ["Osemdesiat"],
        "Ninety": ["Deväťdesiat"],
        "Hundred": ["Sto"],
        "Thousand": ["Tisíc"],
        "5": ["Päť"],
        "25": ["Dvadsaťpäť"],
        "125": ["Stodvadsaťpäť"],
        "1825": ["Tisícosemstodvadsaťpäť"]
    },
    emergency: {
        "Ambulance": {
            slovak: ["Sanitka"],
            engDefinition: "A vehicle for transporting sick or injured people.",
            svkDefinition: "Vozidlo na prepravu chorých alebo zranených ľudí.",
            engSentence: "Call an ambulance!",
            svkSentence: "Zavolajte sanitku!"
        },
        "Police": {
            slovak: ["Polícia"],
            engDefinition: "An organized civil force for maintaining order.",
            svkDefinition: "Organizovaná civilná sila na udržiavanie poriadku.",
            engSentence: "The police are on their way.",
            svkSentence: "Polícia je na ceste."
        },
        "Fire Brigade": {
            slovak: ["Hasiči"],
            engDefinition: "An organized body of people trained to fight fires.",
            svkDefinition: "Organizovaná skupina ľudí vyškolených na hasenie požiarov.",
            engSentence: "Call the fire brigade!",
            svkSentence: "Zavolajte hasičov!"
        },
        "Fire": {
            slovak: ["Oheň"],
            engDefinition: "Combustion or burning.",
            svkDefinition: "Horenie alebo spaľovanie.",
            engSentence: "There is a fire in the building.",
            svkSentence: "V budove je oheň."
        },
        "Help": {
            slovak: ["Pomoc"],
            engDefinition: "To assist or aid.",
            svkDefinition: "Pomôcť alebo pomáhať.",
            engSentence: "I need help!",
            svkSentence: "Potrebujem pomoc!"
        },
        "Accident": {
            slovak: ["Nehoda"],
            engDefinition: "An unexpected event, typically involving damage or injury.",
            svkDefinition: "Neočakávaná udalosť, zvyčajne spojená s poškodením alebo zranením.",
            engSentence: "There was a car accident.",
            svkSentence: "Došlo k autonehode."
        },
        "Police Station": {
            slovak: ["Policajná stanica"],
            engDefinition: "The headquarters of a police force.",
            svkDefinition: "Ústredie polície.",
            engSentence: "Take him to the police station.",
            svkSentence: "Odveďte ho na policajnú stanicu."
        },
        "Attention please!": {
            slovak: ["Prosím pozor!"],
            engDefinition: "Used to call for immediate focus.",
            svkDefinition: "Používa sa na vyzvanie k okamžitej pozornosti.",
            engSentence: "Attention please! The store is closing.",
            svkSentence: "Prosím pozor! Obchod sa zatvára."
        },
        "Doctor": {
            slovak: ["Lekár"],
            engDefinition: "A qualified practitioner of medicine.",
            svkDefinition: "Kvalifikovaný lekár.",
            engSentence: "I need to see a doctor.",
            svkSentence: "Potrebujem navštíviť lekára."
        },
        "Hospital": {
            slovak: ["Nemocnica"],
            engDefinition: "An institution providing medical and surgical treatment.",
            svkDefinition: "Inštitúcia poskytujúca lekársku a chirurgickú liečbu.",
            engSentence: "She was taken to the hospital.",
            svkSentence: "Bola odvezená do nemocnice."
        },
        "Pharmacy": {
            slovak: ["Lekáreň"],
            engDefinition: "A store where medicinal drugs are dispensed.",
            svkDefinition: "Obchod, kde sa vydávajú lieky.",
            engSentence: "I need to go to the pharmacy.",
            svkSentence: "Potrebujem ísť do lekárne."
        },
        "Emergency": {
            slovak: ["Pohotovosť"],
            engDefinition: "A serious, unexpected situation requiring immediate action.",
            svkDefinition: "Vážna, neočakávaná situácia vyžadujúca okamžitý zásah.",
            engSentence: "This is an emergency!",
            svkSentence: "Toto je pohotovosť!"
        },
        "Emergency exit": {
            slovak: ["Únikový východ"],
            engDefinition: "An exit used in case of an emergency.",
            svkDefinition: "Východ používaný v prípade núdze.",
            engSentence: "Use the emergency exit.",
            svkSentence: "Použite únikový východ."
        },
        "Entry": {
            slovak: ["Vchod"],
            engDefinition: "An act of going or coming in.",
            svkDefinition: "Akt vstupu alebo príchodu.",
            engSentence: "The entry is on the left.",
            svkSentence: "Vchod je naľavo."
        },
        "Exit": {
            slovak: ["Východ"],
            engDefinition: "A way out of a place.",
            svkDefinition: "Cesta von z miesta.",
            engSentence: "The exit is over there.",
            svkSentence: "Východ je tam."
        },
        "Can you help me": ["Môžete mi pomôcť"],
        "I need help": ["Potrebujem pomoc"],
        "Call the ambulance": ["Zavolajte pohotovosť"],
        "Call the police": ["Zavolajte políciu"],
        "I have been robbed": ["Okradli ma"],
        "I am injured": ["Som zranený"]
    },
    adjectives: {
        "Small": {
            slovak: ["Malý"],
            engDefinition: "Not large in size.",
            svkDefinition: "Nie veľký v rozmeroch.",
            engSentence: "The small dog barked loudly.",
            svkSentence: "Malý pes hlasno štekal."
        },
        "Little": {
            slovak: ["Malý"],
            engDefinition: "Of small size or amount.",
            svkDefinition: "Malého rozmeru alebo množstva.",
            engSentence: "She has a little cat.",
            svkSentence: "Má malú mačku."
        },
        "Big": {
            slovak: ["Veľký"],
            engDefinition: "Large in size.",
            svkDefinition: "Veľký v rozmeroch.",
            engSentence: "He lives in a big house.",
            svkSentence: "Žije vo veľkom dome."
        },
        "Hot (Adjective)": {
            slovak: ["Horúci"],
            engDefinition: "Having a high temperature.",
            svkDefinition: "Majúci vysokú teplotu.",
            engSentence: "The soup is hot.",
            svkSentence: "Polievka je horúca."
        },
        "Cold (Adjective)": {
            slovak: ["Studený", "Chladný"],
            engDefinition: "Having a low temperature.",
            svkDefinition: "Majúci nízku teplotu.",
            engSentence: "The water is cold.",
            svkSentence: "Voda je studená."
        },
        "Good (Adjective)": {
            slovak: ["Dobrý"],
            engDefinition: "Of high quality.",
            svkDefinition: "Vysokej kvality.",
            engSentence: "She did a good job.",
            svkSentence: "Urobila dobrú prácu."
        },
        "Bad": {
            slovak: ["Zlý"],
            engDefinition: "Of poor quality.",
            svkDefinition: "Nízkej kvality.",
            engSentence: "This is a bad idea.",
            svkSentence: "Toto je zlý nápad."
        },
        "Right (Correct)": {
            slovak: ["Správny"],
            engDefinition: "Correct or true.",
            svkDefinition: "Správny alebo pravdivý.",
            engSentence: "Your answer is right.",
            svkSentence: "Tvoja odpoveď je správna."
        },
        "Wrong": {
            slovak: ["Nesprávny"],
            engDefinition: "Not correct.",
            svkDefinition: "Nie správny.",
            engSentence: "His answer was wrong.",
            svkSentence: "Jeho odpoveď bola nesprávna."
        },
        "Open": {
            slovak: ["Otvorený"],
            engDefinition: "Not closed.",
            svkDefinition: "Nie zatvorený.",
            engSentence: "The door is open.",
            svkSentence: "Dvere sú otvorené."
        },
        "Closed": {
            slovak: ["Zatvorený"],
            engDefinition: "Not open.",
            svkDefinition: "Nie otvorený.",
            engSentence: "The shop is closed.",
            svkSentence: "Obchod je zatvorený."
        },
        "Cheap": {
            slovak: ["Lacný"],
            engDefinition: "Not expensive.",
            svkDefinition: "Nie drahý.",
            engSentence: "This book is cheap.",
            svkSentence: "Táto kniha je lacná."
        },
        "Expensive": {
            slovak: ["Drahý"],
            engDefinition: "Costing a lot of money.",
            svkDefinition: "Stojí veľa peňazí.",
            engSentence: "The watch is expensive.",
            svkSentence: "Hodinky sú drahé."
        },
        "Old": {
            slovak: ["Starý"],
            engDefinition: "Having lived for a long time.",
            svkDefinition: "Žijúci dlhú dobu.",
            engSentence: "He has an old car.",
            svkSentence: "Má staré auto."
        },
        "Young": {
            slovak: ["Mladý"],
            engDefinition: "Having lived for a short time.",
            svkDefinition: "Žijúci krátku dobu.",
            engSentence: "She is a young girl.",
            svkSentence: "Je mladé dievča."
        },
        "New": {
            slovak: ["Nový"],
            engDefinition: "Not old or used.",
            svkDefinition: "Nie starý alebo používaný.",
            engSentence: "I bought a new phone.",
            svkSentence: "Kúpil som nový telefón."
        },
        "Nice": {
            slovak: ["Milý"],
            engDefinition: "Pleasant or kind.",
            svkDefinition: "Príjemný alebo milý.",
            engSentence: "He is a nice person.",
            svkSentence: "Je to milý človek."
        },
        "Pretty": {
            slovak: ["Pekný"],
            engDefinition: "Attractive in a delicate way.",
            svkDefinition: "Príťažlivý jemným spôsobom.",
            engSentence: "She has a pretty dress.",
            svkSentence: "Má pekné šaty."
        },
        "Ugly": {
            slovak: ["Škaredý"],
            engDefinition: "Unpleasant to look at.",
            svkDefinition: "Nepríjemný na pohľad.",
            engSentence: "The building looks ugly.",
            svkSentence: "Budova vyzerá škaredo."
        },
        "Thick": {
            slovak: ["Hrubý"],
            engDefinition: "Having a large distance between opposite sides.",
            svkDefinition: "Majúci veľkú vzdialenosť medzi protiľahlými stranami.",
            engSentence: "The book is thick.",
            svkSentence: "Kniha je hrubá."
        },
        "Thin": {
            slovak: ["Chudý", "Tenký"],
            engDefinition: "Having a small distance between opposite sides.",
            svkDefinition: "Majúci malú vzdialenosť medzi protiľahlými stranami.",
            engSentence: "She has a thin notebook.",
            svkSentence: "Má tenký zošit."
        },
        "Fat": {
            slovak: ["Tučný", "Tlstý"],
            engDefinition: "Having a lot of excess flesh.",
            svkDefinition: "Majúci veľa nadbytočného mäsa.",
            engSentence: "The cat is fat.",
            svkSentence: "Mačka je tučná."
        },
        "Slim": {
            slovak: ["Štíhly"],
            engDefinition: "Attractively thin.",
            svkDefinition: "Príťažlivo tenký.",
            engSentence: "She has a slim figure.",
            svkSentence: "Má štíhlu postavu."
        },
        "Tall": {
            slovak: ["Vysoký"],
            engDefinition: "Having a greater height than average.",
            svkDefinition: "Majúci väčšiu výšku ako priemer.",
            engSentence: "He is a tall man.",
            svkSentence: "Je vysoký muž."
        },
        "Short": {
            slovak: ["Krátky"],
            engDefinition: "Having a small length.",
            svkDefinition: "Majúci malú dĺžku.",
            engSentence: "The meeting was short.",
            svkSentence: "Stretnutie bolo krátke."
        },
        "Long": {
            slovak: ["Dlhý"],
            engDefinition: "Having a great length.",
            svkDefinition: "Majúci veľkú dĺžku.",
            engSentence: "She has long hair.",
            svkSentence: "Má dlhé vlasy."
        },
        "Heavy": {
            slovak: ["Ťažký"],
            engDefinition: "Having a lot of weight.",
            svkDefinition: "Majúci veľkú váhu.",
            engSentence: "The box is heavy.",
            svkSentence: "Krabica je ťažká."
        },
        "Light (Adjective)": {
            slovak: ["Ľahký"],
            engDefinition: "Having little weight.",
            svkDefinition: "Majúci malú váhu.",
            engSentence: "The bag is light.",
            svkSentence: "Taška je ľahká."
        }
    },
    colors: {
        "Red": {
            slovak: ["Červená", "Červený"],
            engDefinition: "A color at the end of the spectrum next to orange.",
            svkDefinition: "Farba na konci spektra vedľa oranžovej.",
            engSentence: "She wore a red dress.",
            svkSentence: "Mala na sebe červené šaty."
        },
        "Blue": {
            slovak: ["Modrá", "Modrý"],
            engDefinition: "A color like that of a clear sky.",
            svkDefinition: "Farba ako jasná obloha.",
            engSentence: "The sky is blue.",
            svkSentence: "Obloha je modrá."
        },
        "Green": {
            slovak: ["Zelená", "Zelený"],
            engDefinition: "The color of grass.",
            svkDefinition: "Farba trávy.",
            engSentence: "The leaves are green.",
            svkSentence: "Listy sú zelené."
        },
        "Yellow": {
            slovak: ["Žltá", "Žltý"],
            engDefinition: "The color of the sun.",
            svkDefinition: "Farba slnka.",
            engSentence: "She likes yellow flowers.",
            svkSentence: "Má rada žlté kvety."
        },
        "Black": {
            slovak: ["Čierna", "Čierny"],
            engDefinition: "The color of coal.",
            svkDefinition: "Farba uhlia.",
            engSentence: "He has a black cat.",
            svkSentence: "Má čiernu mačku."
        },
        "White": {
            slovak: ["Biela", "Biely"],
            engDefinition: "The color of snow.",
            svkDefinition: "Farba snehu.",
            engSentence: "She wore a white dress.",
            svkSentence: "Mala na sebe biele šaty."
        },
        "Orange": {
            slovak: ["Oranžová", "Oranžový"],
            engDefinition: "A color between red and yellow.",
            svkDefinition: "Farba medzi červenou a žltou.",
            engSentence: "He likes orange juice.",
            svkSentence: "Má rád pomarančový džús."
        },
        "Pink": {
            slovak: ["Ružová", "Ružový"],
            engDefinition: "A pale red color.",
            svkDefinition: "Bledá červená farba.",
            engSentence: "She has a pink dress.",
            svkSentence: "Má ružové šaty."
        },
        "Purple": {
            slovak: ["Fialová", "Fialový"],
            engDefinition: "A color between red and blue.",
            svkDefinition: "Farba medzi červenou a modrou.",
            engSentence: "He bought a purple shirt.",
            svkSentence: "Kúpil si fialovú košeľu."
        },
        "Brown": {
            slovak: ["Hnedá", "Hnedý"],
            engDefinition: "The color of chocolate.",
            svkDefinition: "Farba čokolády.",
            engSentence: "The table is brown.",
            svkSentence: "Stôl je hnedý."
        },
        "Gray": {
            slovak: ["Sivá", "Sivý", "Šedý"],
            engDefinition: "A color between black and white.",
            svkDefinition: "Farba medzi čiernou a bielou.",
            engSentence: "The sky is gray today.",
            svkSentence: "Dnes je obloha sivá."
        },
        "Light (color)": {
            slovak: ["Svetlý"],
            engDefinition: "A pale or less intense color.",
            svkDefinition: "Bledá alebo menej intenzívna farba.",
            engSentence: "She prefers light colors.",
            svkSentence: "Uprednostňuje svetlé farby."
        },
        "Dark (color)": {
            slovak: ["Tmavý"],
            engDefinition: "A color that is closer to black.",
            svkDefinition: "Farba, ktorá je bližšie k čiernej.",
            engSentence: "He likes dark blue.",
            svkSentence: "Má rád tmavomodrú."
        }
    },
    periods: {
        "Days of the week": {
            slovak: ["Dni v týždni"],
            engDefinition: "The seven days from Monday to Sunday.",
            svkDefinition: "Sedem dní od pondelka do nedele.",
            engSentence: "There are seven days of the week.",
            svkSentence: "Týždeň má sedem dní."
        },
        "Monday": {
            slovak: ["Pondelok"],
            engDefinition: "The first day of the workweek.",
            svkDefinition: "Prvý deň pracovného týždňa.",
            engSentence: "She starts work on Monday.",
            svkSentence: "V pondelok začína pracovať."
        },
        "Tuesday": {
            slovak: ["Utorok"],
            engDefinition: "The second day of the workweek.",
            svkDefinition: "Druhý deň pracovného týždňa.",
            engSentence: "We have a meeting on Tuesday.",
            svkSentence: "V utorok máme stretnutie."
        },
        "Wednesday": {
            slovak: ["Streda"],
            engDefinition: "The third day of the workweek.",
            svkDefinition: "Tretí deň pracovného týždňa.",
            engSentence: "Wednesday is the middle of the week.",
            svkSentence: "Streda je uprostred týždňa."
        },
        "Thursday": {
            slovak: ["Štvrtok"],
            engDefinition: "The fourth day of the workweek.",
            svkDefinition: "Štvrtý deň pracovného týždňa.",
            engSentence: "She has an appointment on Thursday.",
            svkSentence: "Vo štvrtok má schôdzku."
        },
        "Friday": {
            slovak: ["Piatok"],
            engDefinition: "The fifth day of the workweek.",
            svkDefinition: "Piaty deň pracovného týždňa.",
            engSentence: "Friday is the last day of the workweek.",
            svkSentence: "Piatok je posledný deň pracovného týždňa."
        },
        "Saturday": {
            slovak: ["Sobota"],
            engDefinition: "The first day of the weekend.",
            svkDefinition: "Prvý deň víkendu.",
            engSentence: "We relax on Saturday.",
            svkSentence: "V sobotu odpočívame."
        },
        "Sunday": {
            slovak: ["Nedeľa"],
            engDefinition: "The second day of the weekend.",
            svkDefinition: "Druhý deň víkendu.",
            engSentence: "Sunday is a day of rest.",
            svkSentence: "Nedeľa je deň odpočinku."
        },
        "Months": {
            slovak: ["Mesiace"],
            engDefinition: "The twelve divisions of the year.",
            svkDefinition: "Dvanásť častí roka.",
            engSentence: "There are twelve months in a year.",
            svkSentence: "Rok má dvanásť mesiacov."
        },
        "January": {
            slovak: ["Január"],
            engDefinition: "The first month of the year.",
            svkDefinition: "Prvý mesiac v roku.",
            engSentence: "January is a cold month.",
            svkSentence: "Január je studený mesiac."
        },
        "February": {
            slovak: ["Február"],
            engDefinition: "The second month of the year.",
            svkDefinition: "Druhý mesiac v roku.",
            engSentence: "February has 28 or 29 days.",
            svkSentence: "Február má 28 alebo 29 dní."
        },
        "March": {
            slovak: ["Marec"],
            engDefinition: "The third month of the year.",
            svkDefinition: "Tretí mesiac v roku.",
            engSentence: "March is the start of spring.",
            svkSentence: "Marec je začiatok jari."
        },
        "April": {
            slovak: ["Apríl"],
            engDefinition: "The fourth month of the year.",
            svkDefinition: "Štvrtý mesiac v roku.",
            engSentence: "April has many rainy days.",
            svkSentence: "Apríl má veľa daždivých dní."
        },
        "May (Month)": {
            slovak: ["Máj"],
            engDefinition: "The fifth month of the year.",
            svkDefinition: "Piaty mesiac v roku.",
            engSentence: "May is a warm month.",
            svkSentence: "Máj je teplý mesiac."
        },
        "June": {
            slovak: ["Jún"],
            engDefinition: "The sixth month of the year.",
            svkDefinition: "Šiesty mesiac v roku.",
            engSentence: "June is the start of summer.",
            svkSentence: "Jún je začiatok leta."
        },
        "July": {
            slovak: ["Júl"],
            engDefinition: "The seventh month of the year.",
            svkDefinition: "Siedmy mesiac v roku.",
            engSentence: "July is a hot month.",
            svkSentence: "Júl je horúci mesiac."
        },
        "August": {
            slovak: ["August"],
            engDefinition: "The eighth month of the year.",
            svkDefinition: "Ôsmy mesiac v roku.",
            engSentence: "August is a summer month.",
            svkSentence: "August je letný mesiac."
        },
        "September": {
            slovak: ["September"],
            engDefinition: "The ninth month of the year.",
            svkDefinition: "Deviaty mesiac v roku.",
            engSentence: "September is the start of autumn.",
            svkSentence: "September je začiatok jesene."
        },
        "October": {
            slovak: ["Október"],
            engDefinition: "The tenth month of the year.",
            svkDefinition: "Desiaty mesiac v roku.",
            engSentence: "October has Halloween.",
            svkSentence: "Október má Halloween."
        },
        "November": {
            slovak: ["November"],
            engDefinition: "The eleventh month of the year.",
            svkDefinition: "Jedenásty mesiac v roku.",
            engSentence: "November is a cool month.",
            svkSentence: "November je chladný mesiac."
        },
        "December": {
            slovak: ["December"],
            engDefinition: "The twelfth month of the year.",
            svkDefinition: "Dvanásty mesiac v roku.",
            engSentence: "December has Christmas.",
            svkSentence: "December má Vianoce."
        },
        "Seasons of the year": {
            slovak: ["Ročné obdobia"],
            engDefinition: "The four divisions of the year: spring, summer, autumn, and winter.",
            svkDefinition: "Štyri časti roka: jar, leto, jeseň a zima.",
            engSentence: "There are four seasons in a year.",
            svkSentence: "V roku sú štyri ročné obdobia."
        },
        "Spring": {
            slovak: ["Jar"],
            engDefinition: "The season between winter and summer.",
            svkDefinition: "Obdobie medzi zimou a letom.",
            engSentence: "Spring is full of flowers.",
            svkSentence: "Jar je plná kvetov."
        },
        "Summer": {
            slovak: ["Leto"],
            engDefinition: "The warmest season of the year.",
            svkDefinition: "Najteplejšie obdobie v roku.",
            engSentence: "Summer is very hot.",
            svkSentence: "Leto je veľmi horúce."
        },
        "Autumn": {
            slovak: ["Jeseň"],
            engDefinition: "The season between summer and winter.",
            svkDefinition: "Obdobie medzi letom a zimou.",
            engSentence: "Autumn leaves are beautiful.",
            svkSentence: "Jesenné listy sú krásne."
        },
        "Winter": {
            slovak: ["Zima"],
            engDefinition: "The coldest season of the year.",
            svkDefinition: "Najchladnejšie obdobie v roku.",
            engSentence: "Winter is very cold.",
            svkSentence: "Zima je veľmi studená."
        },
        "Day": {
            slovak: ["Deň"],
            engDefinition: "A 24-hour period from midnight to midnight.",
            svkDefinition: "24-hodinové obdobie od polnoci do polnoci.",
            engSentence: "Today is a sunny day.",
            svkSentence: "Dnes je slnečný deň."
        },
        "Week": {
            slovak: ["týždeň"],
            engDefinition: "A period of seven days.",
            svkDefinition: "Obdobie siedmich dní.",
            engSentence: "We will meet next week.",
            svkSentence: "Stretneme sa budúci týždeň."
        },
        "Month": {
            slovak: ["mesiac"],
            engDefinition: "A period of roughly 30 days.",
            svkDefinition: "Obdobie približne 30 dní.",
            engSentence: "February is a short month.",
            svkSentence: "Február je krátky mesiac."
        },
        "Year": {
            slovak: ["rok"],
            engDefinition: "A period of 12 months.",
            svkDefinition: "Obdobie 12 mesiacov.",
            engSentence: "There are 365 days in a year.",
            svkSentence: "Rok má 365 dní."
        },
        "Decade": {
            slovak: ["desaťročie"],
            engDefinition: "A period of 10 years.",
            svkDefinition: "Obdobie 10 rokov.",
            engSentence: "A decade is ten years long.",
            svkSentence: "Desaťročie trvá desať rokov."
        },
        "Century": {
            slovak: ["storočie"],
            engDefinition: "A period of 100 years.",
            svkDefinition: "Obdobie 100 rokov.",
            engSentence: "A century is 100 years.",
            svkSentence: "Storočie má 100 rokov."
        },
        "Morning": {
            slovak: ["ráno"],
            engDefinition: "The early part of the day.",
            svkDefinition: "Skorá časť dňa.",
            engSentence: "Good morning!",
            svkSentence: "Dobré ráno!"
        },
        "Afternoon": {
            slovak: ["popoludnie"],
            engDefinition: "The period after noon until evening.",
            svkDefinition: "Obdobie po poludní do večera.",
            engSentence: "Good afternoon!",
            svkSentence: "Dobrý popoludnie!"
        },
        "Evening": {
            slovak: ["večer"],
            engDefinition: "The period from the end of the afternoon to night.",
            svkDefinition: "Obdobie od konca popoludnia do noci.",
            engSentence: "Good evening!",
            svkSentence: "Dobrý večer!"
        },
        "Noon": {
            slovak: ["poludnie"],
            engDefinition: "12:00 in the daytime.",
            svkDefinition: "12:00 počas dňa.",
            engSentence: "We will meet at noon.",
            svkSentence: "Stretneme sa na poludnie."
        },
        "Midnight": {
            slovak: ["polnoc"],
            engDefinition: "12:00 at night.",
            svkDefinition: "12:00 v noci.",
            engSentence: "It was midnight when we got home.",
            svkSentence: "Bola polnoc, keď sme prišli domov."
        }
    },
    timeExpressions: {
        "What is the time?": ["Koľko je hodín?"],
        "It is 5 o’clock": ["Je päť hodín"],
        "Half past 5": ["Pol 6", "Pol šiestej"],
        "Quarter past 5": ["Štvrť na 6", "Štvrť na šesť"],
        "Quarter to 6": ["Trištvrte na 6", "Trištvrte na šesť"],
        "6:10": ["6 hodín a 10 minút", "Šesť hodín a desať minút", "Šesť hodín a 10 minút", "Šesť hodín a 10 minút"],
        "As soon as possible": ["Čo najskôr", "Čím skôr"],
        "Early": ["Skoro", "Zavčasu"],
        "Late": ["Neskoro"],
        "In the morning": ["Ráno"],
        "In the afternoon": ["Popoludní"],
        "In the evening": ["Večer"],
        "At seven o’clock": ["O siedmej"],
        "Today": ["Dnes"],
        "Tomorrow": ["Zajtra"],
        "Yesterday": ["Včera"],
        "Now": ["Teraz"],
        "The day before yesterday": ["Predvčerom"],
        "The day after tomorrow": ["Pozajtra"],
        "This month": ["Tento mesiac"]
    },
    carRental: {
        "Drivers license": {
            slovak: ["Vodičský preukaz"],
            engDefinition: "A permit to drive a car.",
            svkDefinition: "Povolenie na šoférovanie auta.",
            engSentence: "You need a driver's license to rent a car.",
            svkSentence: "Na prenájom auta potrebujete vodičský preukaz."
        },
        "To reserve/To book": {
            slovak: ["Rezervovať"],
            engDefinition: "To arrange in advance.",
            svkDefinition: "Dohodnúť vopred.",
            engSentence: "I want to reserve a car.",
            svkSentence: "Chcem rezervovať auto."
        },
        "Door": {
            slovak: ["Dvere"],
            engDefinition: "A movable barrier for entering or leaving a car.",
            svkDefinition: "Pohyblivá bariéra pre vstup alebo výstup z auta.",
            engSentence: "Open the car door.",
            svkSentence: "Otvorte dvere auta."
        },
        "Keys": {
            slovak: ["Kľúče"],
            engDefinition: "Metal objects used to open or start a car.",
            svkDefinition: "Kovové predmety používané na otvorenie alebo naštartovanie auta.",
            engSentence: "Where are the car keys?",
            svkSentence: "Kde sú kľúče od auta?"
        },
        "Breakdown": {
            slovak: ["Porucha"],
            engDefinition: "Failure of a car to function.",
            svkDefinition: "Zlyhanie auta.",
            engSentence: "The car had a breakdown.",
            svkSentence: "Auto malo poruchu."
        },
        "Petrol": {
            slovak: ["Benzín"],
            engDefinition: "A liquid fuel for cars.",
            svkDefinition: "Kvapalné palivo pre autá.",
            engSentence: "We need to fill up with petrol.",
            svkSentence: "Musíme natankovať benzín."
        },
        "Diesel": {
            slovak: ["Nafta"],
            engDefinition: "A type of fuel for cars.",
            svkDefinition: "Typ paliva pre autá.",
            engSentence: "This car uses diesel.",
            svkSentence: "Toto auto používa naftu."
        },
        "Car insurance": {
            slovak: ["Poistenie automobilu", "Poistka automobilu"],
            engDefinition: "Financial protection for a car.",
            svkDefinition: "Finančná ochrana pre auto.",
            engSentence: "Do you have car insurance?",
            svkSentence: "Máte poistenie automobilu?"
        },
        "Pick up date": {
            slovak: ["Dátum vyzdvihnutia"],
            engDefinition: "The date to collect a rental car.",
            svkDefinition: "Dátum na vyzdvihnutie prenajatého auta.",
            engSentence: "What is the pick up date?",
            svkSentence: "Aký je dátum vyzdvihnutia?"
        },
        "Return date": {
            slovak: ["Dátum odovzdania"],
            engDefinition: "The date to return a rental car.",
            svkDefinition: "Dátum na odovzdanie prenajatého auta.",
            engSentence: "What is the return date?",
            svkSentence: "Aký je dátum odovzdania?"
        },
        "I would like to rent a car please": ["Rád by som si požičal auto"],
        "How long would you like it?": ["Na ako dlho?"],
        "How much it cost per day?": ["Koľko to stojí na deň?"],
        "Rent a car": ["Požičať auto"]
    },
    restaurant: {
        "Restaurant": {
            slovak: ["Reštaurácia"],
            engDefinition: "A place where people pay to eat meals.",
            svkDefinition: "Miesto, kde ľudia platia za jedlo.",
            engSentence: "We went to a restaurant for dinner.",
            svkSentence: "Išli sme na večeru do reštaurácie."
        },
        "Menu": {
            slovak: ["Menu", "Jedálny lístok"],
            engDefinition: "A list of food and drinks offered in a restaurant.",
            svkDefinition: "Zoznam jedál a nápojov ponúkaných v reštaurácii.",
            engSentence: "The waiter gave us the menu.",
            svkSentence: "Čašník nám dal menu."
        },
        "Appetizers": {
            slovak: ["Predjedlá"],
            engDefinition: "Small dishes served before the main meal.",
            svkDefinition: "Malé jedlá podávané pred hlavným jedlom.",
            engSentence: "We ordered appetizers to start.",
            svkSentence: "Objednali sme si predjedlá na začiatok."
        },
        "Meal": {
            slovak: ["Jedlo"],
            engDefinition: "Food eaten at one time.",
            svkDefinition: "Jedlo zjedené naraz.",
            engSentence: "He enjoyed his meal.",
            svkSentence: "Užil si svoje jedlo."
        },
        "Main dish": {
            slovak: ["Hlavné jedlo"],
            engDefinition: "The primary course of a meal.",
            svkDefinition: "Hlavný chod jedla.",
            engSentence: "The main dish was delicious.",
            svkSentence: "Hlavné jedlo bolo vynikajúce."
        },
        "Soup": {
            slovak: ["Polievka"],
            engDefinition: "A liquid dish made by boiling ingredients.",
            svkDefinition: "Tekuté jedlo pripravené varením prísad.",
            engSentence: "She ordered a bowl of soup.",
            svkSentence: "Objednala si misku polievky."
        },
        "Dessert": {
            slovak: ["Dezert"],
            engDefinition: "Sweet food eaten at the end of a meal.",
            svkDefinition: "Sladké jedlo konzumované na konci jedla.",
            engSentence: "Ice cream is a popular dessert.",
            svkSentence: "Zmrzlina je obľúbený dezert."
        },
        "Beverage": {
            slovak: ["Nápoj"],
            engDefinition: "A drink.",
            svkDefinition: "Nápoj.",
            engSentence: "What kind of beverage would you like?",
            svkSentence: "Aký nápoj by ste chceli?"
        },
        "Meat": {
            slovak: ["Mäso"],
            engDefinition: "Animal flesh used as food.",
            svkDefinition: "Mäso zvierat používané ako jedlo.",
            engSentence: "He likes to eat meat.",
            svkSentence: "Rád je mäso."
        },
        "Pasta": {
            slovak: ["Cestoviny"],
            engDefinition: "Italian food made from dough.",
            svkDefinition: "Talianske jedlo vyrobené z cesta.",
            engSentence: "Pasta is his favorite food.",
            svkSentence: "Cestoviny sú jeho obľúbené jedlo."
        },
        "Salad": {
            slovak: ["Šalát"],
            engDefinition: "A dish of mixed raw vegetables.",
            svkDefinition: "Jedlo z miešanej surovej zeleniny.",
            engSentence: "She made a fresh salad.",
            svkSentence: "Pripravila čerstvý šalát."
        },
        "Beef": {
            slovak: ["Hovädzie"],
            engDefinition: "Meat from a cow.",
            svkDefinition: "Mäso z kravy.",
            engSentence: "He ordered beef steak.",
            svkSentence: "Objednal si hovädzí steak."
        },
        "Pork": {
            slovak: ["Bravčové"],
            engDefinition: "Meat from a pig.",
            svkDefinition: "Mäso z prasaťa.",
            engSentence: "They cooked pork for dinner.",
            svkSentence: "Na večeru uvarili bravčové."
        },
        "Chicken": {
            slovak: ["Kura", "Kuracie"],
            engDefinition: "Meat from a chicken.",
            svkDefinition: "Mäso z kuraťa.",
            engSentence: "She likes grilled chicken.",
            svkSentence: "Má rada grilované kura."
        },
        "Fish": {
            slovak: ["Ryba"],
            engDefinition: "An aquatic animal used as food.",
            svkDefinition: "Vodné zviera používané ako jedlo.",
            engSentence: "Fish is very healthy.",
            svkSentence: "Ryby sú veľmi zdravé."
        },
        "Coffee": {
            slovak: ["Káva"],
            engDefinition: "A dark, bitter drink made from coffee beans.",
            svkDefinition: "Tmavý, horký nápoj vyrobený z kávových zŕn.",
            engSentence: "She loves to drink coffee.",
            svkSentence: "Rada pije kávu."
        },
        "Beer": {
            slovak: ["Pivo"],
            engDefinition: "An alcoholic drink made from grain.",
            svkDefinition: "Alkoholický nápoj vyrobený z obilia.",
            engSentence: "He ordered a pint of beer.",
            svkSentence: "Objednal si polliter piva."
        },
        "Red wine": {
            slovak: ["Červené víno"],
            engDefinition: "Wine made from dark-colored grapes.",
            svkDefinition: "Víno vyrobené z tmavých hrozien.",
            engSentence: "They enjoyed a bottle of red wine.",
            svkSentence: "Užili si fľašu červeného vína."
        },
        "White wine": {
            slovak: ["Biele víno"],
            engDefinition: "Wine made from green or yellow grapes.",
            svkDefinition: "Víno vyrobené zo zelených alebo žltých hrozien.",
            engSentence: "She prefers white wine.",
            svkSentence: "Uprednostňuje biele víno."
        },
        "Side dishes": {
            slovak: ["Prílohy"],
            engDefinition: "Food items that accompany the main course.",
            svkDefinition: "Jedlá, ktoré sprevádzajú hlavný chod.",
            engSentence: "They served several side dishes.",
            svkSentence: "Podávali niekoľko príloh."
        },
        "Cutlery": {
            slovak: ["Príbor"],
            engDefinition: "Utensils used for eating and serving food.",
            svkDefinition: "Nádoby používané na jedenie a servírovanie jedla.",
            engSentence: "The cutlery is on the table.",
            svkSentence: "Príbor je na stole."
        },
        "Fork": {
            slovak: ["Vidlička"],
            engDefinition: "A utensil with prongs used to eat food.",
            svkDefinition: "Nádoba s hrotmi používaná na jedenie jedla.",
            engSentence: "He used a fork to eat the salad.",
            svkSentence: "Použil vidličku na jedenie šalátu."
        },
        "Knife": {
            slovak: ["Nôž"],
            engDefinition: "A utensil with a sharp blade used to cut food.",
            svkDefinition: "Nádoba s ostrou čepeľou používaná na krájanie jedla.",
            engSentence: "She used a knife to cut the meat.",
            svkSentence: "Použila nôž na krájanie mäsa."
        },
        "Spoon": {
            slovak: ["Lyžička"],
            engDefinition: "A utensil with a rounded bowl used to eat food.",
            svkDefinition: "Nádoba s okrúhlou miskou používaná na jedenie jedla.",
            engSentence: "He used a spoon to eat the soup.",
            svkSentence: "Použil lyžičku na jedenie polievky."
        },
        "Cup": {
            slovak: ["Šálka"],
            engDefinition: "A small container used to drink beverages.",
            svkDefinition: "Malá nádoba používaná na pitie nápojov.",
            engSentence: "She drank tea from a cup.",
            svkSentence: "Pila čaj zo šálky."
        },
        "Glass": {
            slovak: ["Pohár"],
            engDefinition: "A container made of glass used to drink beverages.",
            svkDefinition: "Nádoba vyrobená zo skla používaná na pitie nápojov.",
            engSentence: "He poured water into the glass.",
            svkSentence: "Nalial vodu do pohára."
        },
        "Tissues": {
            slovak: ["Servítky"],
            engDefinition: "Soft paper used for wiping hands or mouth.",
            svkDefinition: "Mäkký papier používaný na utieranie rúk alebo úst.",
            engSentence: "She used tissues to clean up the spill.",
            svkSentence: "Použila servítky na vyčistenie rozliatia."
        },
        "Bottle": {
            slovak: ["Fľaša"],
            engDefinition: "A container with a narrow neck used for storing liquids.",
            svkDefinition: "Nádoba s úzkym hrdlom používaná na uchovávanie tekutín.",
            engSentence: "He drank water from the bottle.",
            svkSentence: "Pil vodu z fľaše."
        },
        "Waiter": {
            slovak: ["Čašník"],
            engDefinition: "A person who serves food and drinks in a restaurant.",
            svkDefinition: "Osoba, ktorá podáva jedlo a nápoje v reštaurácii.",
            engSentence: "The waiter took our order.",
            svkSentence: "Čašník prijal našu objednávku."
        },
        "Waitress": {
            slovak: ["Čašníčka"],
            engDefinition: "A female waiter.",
            svkDefinition: "Žena čašníčka.",
            engSentence: "The waitress was very friendly.",
            svkSentence: "Čašníčka bola veľmi priateľská."
        },
        "Bill": {
            slovak: ["Účet"],
            engDefinition: "A statement of the total amount to be paid for goods or services.",
            svkDefinition: "Výpis celkovej sumy na úhradu za tovar alebo služby.",
            engSentence: "He asked for the bill after dinner.",
            svkSentence: "Po večeri požiadal o účet."
        },
        "Tip": {
            slovak: ["Sprepitné", "Tringelt"],
            engDefinition: "An extra amount of money given for good service.",
            svkDefinition: "Dodatočná suma peňazí daná za dobrú službu.",
            engSentence: "They left a tip for the waiter.",
            svkSentence: "Nechali čašníkovi sprepitné."
        },
        "Do you have an English menu?": ["Máte anglické menu?"],
        "I would like ...": ["Dal by som si ..."],
        "Can I get the bill?": ["Môžem dostať účet?"]
    },
    food: {
        "Milk": {
            slovak: ["Mlieko"],
            engDefinition: "A white liquid produced by cows.",
            svkDefinition: "Biela tekutina produkovaná kravami.",
            engSentence: "I drink milk every morning.",
            svkSentence: "Pijem mlieko každé ráno."
        },
        "Coffee": {
            slovak: ["Káva"],
            engDefinition: "A dark, bitter drink made from coffee beans.",
            svkDefinition: "Tmavý, horký nápoj vyrobený z kávových zŕn.",
            engSentence: "She loves to drink coffee.",
            svkSentence: "Rada pije kávu."
        },
        "Tea": {
            slovak: ["Čaj"],
            engDefinition: "A hot drink made by infusing dried tea leaves.",
            svkDefinition: "Horúci nápoj vyrobený z lúhovaných čajových lístkov.",
            engSentence: "We drink tea in the afternoon.",
            svkSentence: "Popoludní pijeme čaj."
        },
        "Water": {
            slovak: ["Voda"],
            engDefinition: "A clear, colorless liquid essential for life.",
            svkDefinition: "Číra, bezfarebná tekutina nevyhnutná pre život.",
            engSentence: "He drinks a lot of water.",
            svkSentence: "Pije veľa vody."
        },
        "Salt": {
            slovak: ["Soľ"],
            engDefinition: "A white crystalline substance used to season food.",
            svkDefinition: "Biela kryštalická látka používaná na dochucovanie jedla.",
            engSentence: "Please pass the salt.",
            svkSentence: "Prosím, podaj soľ."
        },
        "Sugar": {
            slovak: ["Cukor"],
            engDefinition: "A sweet substance used to sweeten food and drinks.",
            svkDefinition: "Sladká látka používaná na sladenie jedál a nápojov.",
            engSentence: "I like sugar in my tea.",
            svkSentence: "Mám rád cukor v čaji."
        },
        "Bread": {
            slovak: ["Chlieb"],
            engDefinition: "A staple food made from flour and water.",
            svkDefinition: "Základná potravina vyrobená z múky a vody.",
            engSentence: "She bakes bread every week.",
            svkSentence: "Každý týždeň pečie chlieb."
        },
        "Fruit": {
            slovak: ["Ovocie"],
            engDefinition: "Edible, sweet, and fleshy part of a plant.",
            svkDefinition: "Jedlá, sladká a mäsitá časť rastliny.",
            engSentence: "I eat fruit every day.",
            svkSentence: "Každý deň jem ovocie."
        },
        "Butter": {
            slovak: ["Maslo"],
            engDefinition: "A dairy product made from churning cream.",
            svkDefinition: "Mliečny výrobok vyrobený z maslenia smotany.",
            engSentence: "She spreads butter on her toast.",
            svkSentence: "Na svoj toast si natiera maslo."
        },
        "Egg": {
            slovak: ["Vajce"],
            engDefinition: "An oval object laid by hens, often eaten as food.",
            svkDefinition: "Okrúhly predmet znášaný sliepkami, často konzumovaný ako jedlo.",
            engSentence: "He likes eggs for breakfast.",
            svkSentence: "Má rád vajcia na raňajky."
        },
        "Ham": {
            slovak: ["Šunka"],
            engDefinition: "Cured meat from a pig's hind leg.",
            svkDefinition: "Sušené mäso z bravčovej zadnej nohy.",
            engSentence: "We had ham for dinner.",
            svkSentence: "Na večeru sme mali šunku."
        },
        "Vegetables": {
            slovak: ["Zelenina"],
            engDefinition: "Edible plants or their parts.",
            svkDefinition: "Jedlé rastliny alebo ich časti.",
            engSentence: "She grows vegetables in her garden.",
            svkSentence: "Pestuje zeleninu v záhrade."
        },
        "Cheese": {
            slovak: ["Syr"],
            engDefinition: "A dairy product made from curdled milk.",
            svkDefinition: "Mliečny výrobok vyrobený z kyslého mlieka.",
            engSentence: "He likes cheese on his sandwich.",
            svkSentence: "Má rád syr na svojom sendviči."
        },
        "Rice": {
            slovak: ["Ryža"],
            engDefinition: "Small, white grains used as a staple food.",
            svkDefinition: "Malé biele zrná používané ako základná potravina.",
            engSentence: "They eat rice with every meal.",
            svkSentence: "Jedia ryžu pri každom jedle."
        },
        "French Fries": {
            slovak: ["Hranolky"],
            engDefinition: "Thin strips of fried potato.",
            svkDefinition: "Tenké prúžky smažených zemiakov.",
            engSentence: "Kids love French fries.",
            svkSentence: "Deti milujú hranolky."
        },
        "Wine": {
            slovak: ["Víno"],
            engDefinition: "An alcoholic drink made from fermented grapes.",
            svkDefinition: "Alkoholický nápoj vyrobený z kvaseného hrozna.",
            engSentence: "They enjoy wine with dinner.",
            svkSentence: "Pri večeri si radi doprajú víno."
        },
        "Apple": {
            slovak: ["Jablko"],
            engDefinition: "A sweet fruit with a round shape and red or green skin.",
            svkDefinition: "Sladké ovocie s guľatým tvarom a červenou alebo zelenou šupkou.",
            engSentence: "An apple a day keeps the doctor away.",
            svkSentence: "Jablko denne odháňa lekára."
        },
        "Pear": {
            slovak: ["Hruška"],
            engDefinition: "A sweet fruit with a bell shape.",
            svkDefinition: "Sladké ovocie v tvare zvona.",
            engSentence: "She loves the taste of pears.",
            svkSentence: "Miluje chuť hrušiek."
        },
        "Peach": {
            slovak: ["Broskyňa"],
            engDefinition: "A sweet fruit with a fuzzy skin.",
            svkDefinition: "Sladké ovocie s chlpatou šupkou.",
            engSentence: "We have peach jam.",
            svkSentence: "Máme broskyňový džem."
        },
        "Apricot": {
            slovak: ["Marhuľa"],
            engDefinition: "A small, orange fruit with a sweet taste.",
            svkDefinition: "Malé, oranžové ovocie so sladkou chuťou.",
            engSentence: "She made apricot pie.",
            svkSentence: "Urobila marhuľový koláč."
        },
        "Plum": {
            slovak: ["Slivka"],
            engDefinition: "A sweet fruit with a smooth skin and a pit.",
            svkDefinition: "Sladké ovocie s hladkou šupkou a kôstkou.",
            engSentence: "They picked plums from the tree.",
            svkSentence: "Zbierali slivky zo stromu."
        },
        "Grapes": {
            slovak: ["Hrozno"],
            engDefinition: "Small, round fruits that grow in clusters.",
            svkDefinition: "Malé, guľaté plody, ktoré rastú v strapcoch.",
            engSentence: "Grapes are my favorite snack.",
            svkSentence: "Hrozno je môj obľúbený snack."
        },
        "Watermelon": {
            slovak: ["Melón"],
            engDefinition: "A large fruit with green skin and red, juicy flesh.",
            svkDefinition: "Veľké ovocie so zelenou šupkou a červenou, šťavnatou dužinou.",
            engSentence: "Watermelon is refreshing on a hot day.",
            svkSentence: "Melón je osviežujúci v horúcom dni."
        },
        "Orange": {
            slovak: ["Pomaranč"],
            engDefinition: "A citrus fruit with a tough skin and juicy interior.",
            svkDefinition: "Citrusové ovocie s tvrdou šupkou a šťavnatým vnútrom.",
            engSentence: "I like to drink orange juice.",
            svkSentence: "Rád pijem pomarančový džús."
        },
        "Banana": {
            slovak: ["Banán"],
            engDefinition: "A long, curved fruit with a yellow skin.",
            svkDefinition: "Dlhé, zakrivené ovocie so žltou šupkou.",
            engSentence: "Monkeys love bananas.",
            svkSentence: "Opice milujú banány."
        },
        "Pineapple": {
            slovak: ["Ananás"],
            engDefinition: "A tropical fruit with a rough skin and sweet inside.",
            svkDefinition: "Tropické ovocie s drsnou šupkou a sladkým vnútrom.",
            engSentence: "Pineapple is great in smoothies.",
            svkSentence: "Ananás je skvelý v smoothie."
        },
        "Tomato": {
            slovak: ["Paradajka", "Rajčina"],
            engDefinition: "A red or yellow fruit often used in salads.",
            svkDefinition: "Červené alebo žlté ovocie často používané v šalátoch.",
            engSentence: "She grows tomatoes in her garden.",
            svkSentence: "Pestuje paradajky vo svojej záhrade."
        },
        "Pepper": {
            slovak: ["Paprika"],
            engDefinition: "A vegetable that can be sweet or spicy.",
            svkDefinition: "Zelenina, ktorá môže byť sladká alebo štipľavá.",
            engSentence: "I like green peppers on my pizza.",
            svkSentence: "Mám rád zelené papriky na svojej pizze."
        },
        "Cabbage": {
            slovak: ["Kapusta"],
            engDefinition: "A leafy green vegetable.",
            svkDefinition: "Listová zelenina.",
            engSentence: "Cabbage is used in salads and soups.",
            svkSentence: "Kapusta sa používa v šalátoch a polievkach."
        },
        "Lettuce": {
            slovak: ["Šalát"],
            engDefinition: "A leafy vegetable often used in salads.",
            svkDefinition: "Listová zelenina často používaná v šalátoch.",
            engSentence: "She bought fresh lettuce.",
            svkSentence: "Kúpila čerstvý šalát."
        },
        "Carrot": {
            slovak: ["Mrkva"],
            engDefinition: "A long, orange root vegetable.",
            svkDefinition: "Dlhá, oranžová koreňová zelenina.",
            engSentence: "Rabbits love carrots.",
            svkSentence: "Zajace milujú mrkvu."
        },
        "Parsley": {
            slovak: ["Petržlen"],
            engDefinition: "A herb used for seasoning.",
            svkDefinition: "Bylinka používaná na dochucovanie.",
            engSentence: "She added parsley to the soup.",
            svkSentence: "Do polievky pridala petržlen."
        },
        "Onion": {
            slovak: ["Cibuľa"],
            engDefinition: "A vegetable with a strong flavor used in cooking.",
            svkDefinition: "Zelenina so silnou chuťou používaná pri varení.",
            engSentence: "She chopped an onion for the salad.",
            svkSentence: "Nakrájala cibuľu do šalátu."
        },
        "Garlic": {
            slovak: ["Cesnak"],
            engDefinition: "A bulb used to add flavor to food.",
            svkDefinition: "Cibuľka používaná na dochucovanie jedla.",
            engSentence: "Garlic is great in pasta sauces.",
            svkSentence: "Cesnak je skvelý v omáčkach na cestoviny."
        },
        "Broccoli": {
            slovak: ["Brokolica"],
            engDefinition: "A green vegetable with a tree-like structure.",
            svkDefinition: "Zelená zelenina so štruktúrou podobnou stromu.",
            engSentence: "She steamed some broccoli for dinner.",
            svkSentence: "Na večeru pripravila brokolicu v pare."
        },
        "Cucumber": {
            slovak: ["Uhorka"],
            engDefinition: "A long, green vegetable used in salads.",
            svkDefinition: "Dlhá zelená zelenina používaná v šalátoch.",
            engSentence: "He likes cucumber in his sandwiches.",
            svkSentence: "Má rád uhorku vo svojich sendvičoch."
        },
        "Potatoes": {
            slovak: ["Zemiaky"],
            engDefinition: "A starchy tuber often eaten as a vegetable.",
            svkDefinition: "Škrobovitá hľuza často konzumovaná ako zelenina.",
            engSentence: "She makes mashed potatoes.",
            svkSentence: "Robí zemiakovú kašu."
        },
        "Biscuits": {
            slovak: ["Keksy"],
            engDefinition: "Small, sweet baked goods.",
            svkDefinition: "Malé sladké pečivo.",
            engSentence: "She loves to eat biscuits with tea.",
            svkSentence: "Rada si dáva keksy s čajom."
        },
        "Chocolate": {
            slovak: ["Čokoláda"],
            engDefinition: "A sweet treat made from cocoa.",
            svkDefinition: "Sladká pochúťka vyrobená z kakaa.",
            engSentence: "I like dark chocolate.",
            svkSentence: "Mám rád horkú čokoládu."
        },
        "Sweets": {
            slovak: ["Cukríky"],
            engDefinition: "Small pieces of candy.",
            svkDefinition: "Malé kúsky cukroviniek.",
            engSentence: "Children love sweets.",
            svkSentence: "Deti milujú cukríky."
        },
        "Chewing gum": {
            slovak: ["Žuvačka"],
            engDefinition: "A flavored gum for chewing.",
            svkDefinition: "Ochutená guma na žuvanie.",
            engSentence: "He always has chewing gum.",
            svkSentence: "Vždy má žuvačku."
        },
        "Apples": {
            slovak: ["Jablká"],
            engDefinition: "Multiple round fruits with red or green skin.",
            svkDefinition: "Viacero guľatých plodov s červenou alebo zelenou šupkou.",
            engSentence: "We picked apples from the orchard.",
            svkSentence: "Zbierali sme jablká z ovocného sadu."
        },
        "Bananas": {
            slovak: ["Banány"],
            engDefinition: "Multiple long, curved fruits with yellow skin.",
            svkDefinition: "Viacero dlhých, zakrivených plodov so žltou šupkou.",
            engSentence: "She bought a bunch of bananas.",
            svkSentence: "Kúpila zväzok banánov."
        }
    },
    shopping: {
        "Shop": {
            slovak: ["Obchod"],
            engDefinition: "A place where goods are sold.",
            svkDefinition: "Miesto, kde sa predávajú tovary.",
            engSentence: "I went to the shop to buy milk.",
            svkSentence: "Išiel som do obchodu kúpiť mlieko."
        },
        "Supermarket": {
            slovak: ["Supermarket"],
            engDefinition: "A large store selling food and other goods.",
            svkDefinition: "Veľký obchod, kde sa predáva jedlo a iné tovary.",
            engSentence: "We buy groceries at the supermarket.",
            svkSentence: "Nakupujeme potraviny v supermarkete."
        },
        "Butcher": {
            slovak: ["Mäso"],
            engDefinition: "A shop where meat is sold.",
            svkDefinition: "Obchod, kde sa predáva mäso.",
            engSentence: "I bought some beef at the butcher.",
            svkSentence: "Kúpil som hovädzie mäso u mäsiara."
        },
        "Sale": {
            slovak: ["Výpredaj"],
            engDefinition: "A period when goods are sold at lower prices.",
            svkDefinition: "Obdobie, keď sa tovar predáva za nižšie ceny.",
            engSentence: "I got this dress on sale.",
            svkSentence: "Túto šaty som kúpil vo výpredaji."
        },
        "Cotton": {
            slovak: ["Bavlna"],
            engDefinition: "A soft white material used for making clothes.",
            svkDefinition: "Mäkký biely materiál používaný na výrobu oblečenia.",
            engSentence: "This shirt is made of cotton.",
            svkSentence: "Táto košeľa je vyrobená z bavlny."
        },
        "Wool": {
            slovak: ["Vlna"],
            engDefinition: "A soft material from sheep used for making clothes.",
            svkDefinition: "Mäkký materiál z oviec používaný na výrobu oblečenia.",
            engSentence: "She wore a wool sweater.",
            svkSentence: "Mala na sebe vlnený sveter."
        },
        "Shoe Shop": {
            slovak: ["Obuv"],
            engDefinition: "A shop where shoes are sold.",
            svkDefinition: "Obchod, kde sa predávajú topánky.",
            engSentence: "I need to go to the shoe shop for new sneakers.",
            svkSentence: "Musím ísť do obuvi pre nové tenisky."
        },
        "Toys": {
            slovak: ["Hračky"],
            engDefinition: "Objects for children to play with.",
            svkDefinition: "Predmety na hranie pre deti.",
            engSentence: "The store has a big section for toys.",
            svkSentence: "Obchod má veľkú sekciu s hračkami."
        },
        "Clothes": {
            slovak: ["Obelčenie"],
            engDefinition: "Items worn to cover the body.",
            svkDefinition: "Predmety nosené na zakrytie tela.",
            engSentence: "She bought new clothes for the party.",
            svkSentence: "Kúpila si nové oblečenie na párty."
        },
        "Bag": {
            slovak: ["Taška"],
            engDefinition: "A container used for carrying things.",
            svkDefinition: "Kontajner používaný na prenášanie vecí.",
            engSentence: "She put the books in her bag.",
            svkSentence: "Knihy dala do tašky."
        },
        "Open": {
            slovak: ["Otvorené"],
            engDefinition: "Not closed, available for business.",
            svkDefinition: "Nezatvorené, dostupné na podnikanie.",
            engSentence: "The shop is open from 9 AM.",
            svkSentence: "Obchod je otvorený od 9 ráno."
        },
        "Closed": {
            slovak: ["Zatvorené"],
            engDefinition: "Not open, not available for business.",
            svkDefinition: "Zatvorené, nedostupné na podnikanie.",
            engSentence: "The store is closed on Sundays.",
            svkSentence: "Obchod je v nedeľu zatvorený."
        },
        "Opening hours": {
            slovak: ["Otváracie hodiny"],
            engDefinition: "The hours when a shop is open.",
            svkDefinition: "Hodiny, keď je obchod otvorený.",
            engSentence: "Check the opening hours before you go.",
            svkSentence: "Pred odchodom si skontrolujte otváracie hodiny."
        },
        "Push": {
            slovak: ["Tlačiť", "Tam"],
            engDefinition: "To press against something to move it away.",
            svkDefinition: "Stlačiť niečo, aby sa to posunulo preč.",
            engSentence: "Push the door to open it.",
            svkSentence: "Potlačte dvere, aby ste ich otvorili."
        },
        "Pull": {
            slovak: ["Ťahať", "Sem"],
            engDefinition: "To draw or haul towards oneself.",
            svkDefinition: "Ťahať alebo ťahať k sebe.",
            engSentence: "Pull the door to close it.",
            svkSentence: "Potiahnite dvere, aby ste ich zatvorili."
        },
        "Out for Lunch": ["Obedná prestávka"],
        "I would like to pay (male)": ["Chcel by som zaplatiť"],
        "I would like to pay (fem)": ["Chcela by som zaplatiť"],
        "I would like a bigger size (male)": ["Chcel by som väčšie čislo"],
        "I would like a bigger size (fem)": ["Chcela by som väčšie čislo"],
        "I would like a smaller size (male)": ["Chcel by som menšie čislo"],
        "I would like a smaller size (fem)": ["Chcela by som menšie čislo"],
        "Changing room": ["Skúšobná kabínka"],
        "How much is it?": ["Koľko to stojí?"]
    },
    accommodation: {
        "Room": {
            slovak: ["Izba"],
            engDefinition: "A space in a building for living or working.",
            svkDefinition: "Priestor v budove na bývanie alebo prácu.",
            engSentence: "The hotel room is very clean.",
            svkSentence: "Hotelová izba je veľmi čistá."
        },
        "Bed": {
            slovak: ["Posteľ"],
            engDefinition: "A piece of furniture for sleeping on.",
            svkDefinition: "Kus nábytku na spanie.",
            engSentence: "The bed is very comfortable.",
            svkSentence: "Posteľ je veľmi pohodlná."
        },
        "Single room": {
            slovak: ["Jednopostelová izba"],
            engDefinition: "A room with one bed for one person.",
            svkDefinition: "Izba s jednou posteľou pre jednu osobu.",
            engSentence: "I booked a single room for my stay.",
            svkSentence: "Rezervoval som si jednopostelovú izbu na môj pobyt."
        },
        "Double room": {
            slovak: ["Dvojpostelová izba"],
            engDefinition: "A room with a bed for two people.",
            svkDefinition: "Izba s posteľou pre dve osoby.",
            engSentence: "They stayed in a double room.",
            svkSentence: "Oni zostali v dvojpostelovej izbe."
        },
        "Hotel": {
            slovak: ["Hotel"],
            engDefinition: "A building providing lodging and meals for travelers.",
            svkDefinition: "Budova poskytujúca ubytovanie a stravu pre cestujúcich.",
            engSentence: "We checked into the hotel.",
            svkSentence: "Ubytovali sme sa v hoteli."
        },
        "Reception": {
            slovak: ["Recepcia"],
            engDefinition: "The area in a hotel where guests check in.",
            svkDefinition: "Priestor v hoteli, kde sa hostia registrujú.",
            engSentence: "She asked for help at the reception.",
            svkSentence: "Požiadala o pomoc na recepcii."
        },
        "Breakfast": {
            slovak: ["Raňajky"],
            engDefinition: "The first meal of the day.",
            svkDefinition: "Prvé jedlo dňa.",
            engSentence: "Breakfast is served from 7 AM.",
            svkSentence: "Raňajky sa podávajú od 7 ráno."
        },
        "Lunch": {
            slovak: ["Obed"],
            engDefinition: "The meal eaten in the middle of the day.",
            svkDefinition: "Jedlo konzumované uprostred dňa.",
            engSentence: "We had lunch at a nearby restaurant.",
            svkSentence: "Obedovali sme v neďalekej reštaurácii."
        },
        "Dinner": {
            slovak: ["Večera"],
            engDefinition: "The main meal of the evening.",
            svkDefinition: "Hlavné jedlo večera.",
            engSentence: "They are having dinner together.",
            svkSentence: "Večerajú spolu."
        },
        "Full board": {
            slovak: ["Plná peniza"],
            engDefinition: "Accommodation including all meals.",
            svkDefinition: "Ubytovanie vrátane všetkých jedál.",
            engSentence: "The hotel offers full board options.",
            svkSentence: "Hotel ponúka možnosti plnej penzie."
        },
        "Half board": {
            slovak: ["Polpenzia"],
            engDefinition: "Accommodation including breakfast and one main meal.",
            svkDefinition: "Ubytovanie vrátane raňajok a jedného hlavného jedla.",
            engSentence: "We chose the half board package.",
            svkSentence: "Vybrali sme si balíček s polpenziou."
        },
        "To book": {
            slovak: ["Rezervovať"],
            engDefinition: "To arrange in advance.",
            svkDefinition: "Dohodnúť vopred.",
            engSentence: "I need to book a room for tonight.",
            svkSentence: "Potrebujem rezervovať izbu na dnešnú noc."
        }
    },
    doctor: {
        "Doctor": {
            slovak: ["Lekár"],
            engDefinition: "A person trained to treat sick people.",
            svkDefinition: "Osoba vyškolená na liečbu chorých ľudí.",
            engSentence: "The doctor examined the patient.",
            svkSentence: "Lekár vyšetril pacienta."
        },
        "Ambulance": {
            slovak: ["Sanitka"],
            engDefinition: "A vehicle for taking sick or injured people to the hospital.",
            svkDefinition: "Vozidlo na prepravu chorých alebo zranených ľudí do nemocnice.",
            engSentence: "The ambulance arrived quickly.",
            svkSentence: "Sanitka prišla rýchlo."
        },
        "Emergency": {
            slovak: ["Pohotovosť"],
            engDefinition: "A serious, unexpected situation requiring immediate action.",
            svkDefinition: "Vážna, neočakávaná situácia vyžadujúca okamžité opatrenie.",
            engSentence: "They went to the emergency room.",
            svkSentence: "Išli na pohotovosť."
        },
        "Hospital": {
            slovak: ["Nemocnica"],
            engDefinition: "A place where sick or injured people are given medical treatment.",
            svkDefinition: "Miesto, kde sa chorým alebo zraneným ľuďom poskytuje lekárska starostlivosť.",
            engSentence: "She was admitted to the hospital.",
            svkSentence: "Bola prijatá do nemocnice."
        },
        "Pharmacy": {
            slovak: ["Lekáreň"],
            engDefinition: "A store where medicinal drugs are dispensed and sold.",
            svkDefinition: "Obchod, kde sa vydávajú a predávajú liečivé lieky.",
            engSentence: "I need to go to the pharmacy.",
            svkSentence: "Potrebujem ísť do lekárne."
        },
        "Dentist": {
            slovak: ["Zubár"],
            engDefinition: "A doctor who treats teeth.",
            svkDefinition: "Lekár, ktorý lieči zuby.",
            engSentence: "I have an appointment with the dentist.",
            svkSentence: "Mám stretnutie so zubárom."
        },
        "Pain": {
            slovak: ["Bolesť"],
            engDefinition: "An unpleasant feeling in the body.",
            svkDefinition: "Nepríjemný pocit v tele.",
            engSentence: "He is experiencing a lot of pain.",
            svkSentence: "Zažíva veľkú bolesť."
        },
        "Headache": {
            slovak: ["Bolesť hlavy"],
            engDefinition: "Pain in the head.",
            svkDefinition: "Bolesť v hlave.",
            engSentence: "She has a bad headache.",
            svkSentence: "Má silnú bolesť hlavy."
        },
        "Stomachache": {
            slovak: ["Bolesť brucha"],
            engDefinition: "Pain in the stomach.",
            svkDefinition: "Bolesť v bruchu.",
            engSentence: "He complained of a stomachache.",
            svkSentence: "Sťažoval sa na bolesť brucha."
        },
        "Toothache": {
            slovak: ["Bolesť zubov"],
            engDefinition: "Pain in a tooth.",
            svkDefinition: "Bolesť v zube.",
            engSentence: "She went to the dentist for her toothache.",
            svkSentence: "Išla k zubárovi kvôli bolesti zubov."
        },
        "Flu": {
            slovak: ["Chrípka"],
            engDefinition: "A common viral infection.",
            svkDefinition: "Bežná vírusová infekcia.",
            engSentence: "He is recovering from the flu.",
            svkSentence: "Zotavuje sa z chrípky."
        },
        "Fracture": {
            slovak: ["Zlomenina"],
            engDefinition: "A break in a bone.",
            svkDefinition: "Zlomenina kosti.",
            engSentence: "She has a fracture in her arm.",
            svkSentence: "Má zlomeninu v ruke."
        },
        "Injection": {
            slovak: ["Injekcia"],
            engDefinition: "A shot of medicine.",
            svkDefinition: "Dávka lieku.",
            engSentence: "He received an injection for pain relief.",
            svkSentence: "Dostal injekciu na zmiernenie bolesti."
        },
        "Thermometer": {
            slovak: ["Teplomer"],
            engDefinition: "An instrument for measuring temperature.",
            svkDefinition: "Nástroj na meranie teploty.",
            engSentence: "The nurse used a thermometer to check his temperature.",
            svkSentence: "Sestra použila teplomer na kontrolu jeho teploty."
        },
        "I have a toothache": ["Bolí ma zub"],
        "Call the doctor": ["Zavolajte lekára"],
        "Call the ambulance": ["Zavolajte sanitku"]
    },
    travel: {
        "Airport": {
            slovak: ["Letisko"],
            engDefinition: "A place where airplanes take off and land.",
            svkDefinition: "Miesto, kde lietadlá vzlietajú a pristávajú.",
            engSentence: "We arrived at the airport early.",
            svkSentence: "Prišli sme na letisko skoro."
        },
        "Aircraft": {
            slovak: ["Lietadlo"],
            engDefinition: "A vehicle designed for air travel.",
            svkDefinition: "Vozidlo určené na cestovanie vzduchom.",
            engSentence: "The aircraft is ready for boarding.",
            svkSentence: "Lietadlo je pripravené na nastupovanie."
        },
        "Bus station": {
            slovak: ["Autobusová stanica"],
            engDefinition: "A place where buses pick up and drop off passengers.",
            svkDefinition: "Miesto, kde autobusy naberajú a vykladajú cestujúcich.",
            engSentence: "The bus station was crowded.",
            svkSentence: "Autobusová stanica bola preplnená."
        },
        "Railway station": {
            slovak: ["Železničná stanica"],
            engDefinition: "A place where trains pick up and drop off passengers.",
            svkDefinition: "Miesto, kde vlaky naberajú a vykladajú cestujúcich.",
            engSentence: "We waited for the train at the railway station.",
            svkSentence: "Čakali sme na vlak na železničnej stanici."
        },
        "Bus": {
            slovak: ["Autobus"],
            engDefinition: "A large vehicle that carries passengers by road.",
            svkDefinition: "Veľké vozidlo, ktoré prepravuje cestujúcich po ceste.",
            engSentence: "The bus was full of people.",
            svkSentence: "Autobus bol plný ľudí."
        },
        "Car": {
            slovak: ["Auto"],
            engDefinition: "A road vehicle, typically with four wheels, powered by an engine.",
            svkDefinition: "Cestné vozidlo, zvyčajne so štyrmi kolesami, poháňané motorom.",
            engSentence: "We rented a car for the trip.",
            svkSentence: "Na výlet sme si prenajali auto."
        },
        "Train": {
            slovak: ["Vlak"],
            engDefinition: "A series of connected vehicles that run on tracks and transport people or goods.",
            svkDefinition: "Séria prepojených vozidiel, ktoré jazdia po koľajniciach a prepravujú ľudí alebo tovar.",
            engSentence: "The train was on time.",
            svkSentence: "Vlak bol načas."
        },
        "Tram": {
            slovak: ["Električka"],
            engDefinition: "A rail vehicle that runs on tracks in the city streets.",
            svkDefinition: "Koľajové vozidlo, ktoré jazdí po koľajniciach v mestských uliciach.",
            engSentence: "We took the tram to the city center.",
            svkSentence: "Do centra mesta sme išli električkou."
        },
        "Motorbike": {
            slovak: ["Motorka"],
            engDefinition: "A two-wheeled vehicle powered by an engine.",
            svkDefinition: "Dvojkolesové vozidlo poháňané motorom.",
            engSentence: "He rides his motorbike to work.",
            svkSentence: "Do práce jazdí na motorke."
        },
        "Bicycle": {
            slovak: ["Bicykel"],
            engDefinition: "A two-wheeled vehicle that you pedal to move.",
            svkDefinition: "Dvojkolesové vozidlo, ktoré sa pohybuje šliapaním do pedálov.",
            engSentence: "She rides her bicycle every morning.",
            svkSentence: "Každé ráno jazdí na bicykli."
        },
        "Taxi": {
            slovak: ["Taxík", "Taxi"],
            engDefinition: "A car that you pay to take you somewhere.",
            svkDefinition: "Auto, za ktoré platíte, aby vás odviezlo niekam.",
            engSentence: "We took a taxi to the hotel.",
            svkSentence: "Vzali sme si taxík do hotela."
        },
        "Public Transport": {
            slovak: ["Verejná doprava"],
            engDefinition: "A system of buses, trains, etc., that is available for use by the public.",
            svkDefinition: "Systém autobusov, vlakov atď., ktorý je k dispozícii na použitie verejnosťou.",
            engSentence: "Public transport is very convenient here.",
            svkSentence: "Verejná doprava je tu veľmi pohodlná."
        }
    },
    places: {
        "School": {
            slovak: ["Škola"],
            engDefinition: "A place for education.",
            svkDefinition: "Miesto na vzdelávanie.",
            engSentence: "Children go to school to learn.",
            svkSentence: "Deti chodia do školy učiť sa."
        },
        "University": {
            slovak: ["Univerzita"],
            engDefinition: "Higher education institution.",
            svkDefinition: "Inštitúcia vyššieho vzdelávania.",
            engSentence: "He studied at the university for five years.",
            svkSentence: "Študoval na univerzite päť rokov."
        },
        "Post office": {
            slovak: ["Pošta"],
            engDefinition: "Place for sending letters and parcels.",
            svkDefinition: "Miesto na odosielanie listov a balíkov.",
            engSentence: "She went to the post office to mail a package.",
            svkSentence: "Išla na poštu poslať balík."
        },
        "Bank": {
            slovak: ["Banka"],
            engDefinition: "Place for financial services.",
            svkDefinition: "Miesto na finančné služby.",
            engSentence: "He deposited money in the bank.",
            svkSentence: "Vložil peniaze do banky."
        },
        "Supermarket": {
            slovak: ["Supermarket"],
            engDefinition: "Place for buying groceries.",
            svkDefinition: "Miesto na nákup potravín.",
            engSentence: "They went to the supermarket to buy food.",
            svkSentence: "Išli do supermarketu nakúpiť jedlo."
        },
        "Shopping center": {
            slovak: ["Obchodné centrum"],
            engDefinition: "Large retail complex.",
            svkDefinition: "Veľký maloobchodný komplex.",
            engSentence: "She likes to shop at the shopping center.",
            svkSentence: "Rada nakupuje v obchodnom centre."
        },
        "Hotel": {
            slovak: ["Hotel"],
            engDefinition: "Place for accommodation.",
            svkDefinition: "Miesto na ubytovanie.",
            engSentence: "They stayed at a nice hotel during their vacation.",
            svkSentence: "Počas dovolenky bývali v peknom hoteli."
        },
        "Church": {
            slovak: ["Kostol"],
            engDefinition: "Place for Christian worship.",
            svkDefinition: "Miesto na kresťanské bohoslužby.",
            engSentence: "They go to church every Sunday.",
            svkSentence: "Chodia do kostola každú nedeľu."
        },
        "Mosque": {
            slovak: ["Mešita"],
            engDefinition: "Place for Muslim worship.",
            svkDefinition: "Miesto na modlitby muslimov.",
            engSentence: "He goes to the mosque for prayers.",
            svkSentence: "Chodí do mešity na modlitby."
        },
        "Synagogue": {
            slovak: ["Synagóga"],
            engDefinition: "Place for Jewish worship.",
            svkDefinition: "Miesto na kresťanské bohoslužby.",
            engSentence: "They celebrate Hanukkah at the synagogue.",
            svkSentence: "Oslavujú Hanuku v synagóge."
        },
        "Cathedral": {
            slovak: ["Katedrála"],
            engDefinition: "Large Christian church.",
            svkDefinition: "Veľký kresťanský kostol.",
            engSentence: "The cathedral is a popular tourist attraction.",
            svkSentence: "Katedrála je obľúbenou turistickou atrakciou."
        },
        "Castle": {
            slovak: ["Hrad"],
            engDefinition: "Fortified building.",
            svkDefinition: "Opevnená budova.",
            engSentence: "They visited the old castle.",
            svkSentence: "Navštívili starý hrad."
        },
        "Mountain range": {
            slovak: ["Pohorie"],
            engDefinition: "Series of mountains.",
            svkDefinition: "Séria hôr.",
            engSentence: "They went hiking in the mountain range.",
            svkSentence: "Šli na túru do pohoria."
        },
        "River": {
            slovak: ["Rieka"],
            engDefinition: "Large flowing water.",
            svkDefinition: "Veľký tok vody.",
            engSentence: "They went fishing by the river.",
            svkSentence: "Išli na rybolov pri rieke."
        },
        "Lake": {
            slovak: ["Jazero"],
            engDefinition: "Large body of water.",
            svkDefinition: "Veľké množstvo vody.",
            engSentence: "They swam in the lake during the summer.",
            svkSentence: "Počas leta plávali v jazere."
        },
        "Town/city": {
            slovak: ["Mesto"],
            engDefinition: "Urban area.",
            svkDefinition: "Mestská oblasť.",
            engSentence: "They live in a small town.",
            svkSentence: "Žijú v malebnom meste."
        },
        "Village": {
            slovak: ["Dedina"],
            engDefinition: "Rural area with houses.",
            svkDefinition: "Vesnická oblasť s domami.",
            engSentence: "The village is peaceful.",
            svkSentence: "Dedina je pokojná."
        },
        "Exchange buro": {
            slovak: ["Zmenáreň"],
            engDefinition: "Place for currency exchange.",
            svkDefinition: "Miesto na výmenu meny.",
            engSentence: "They exchanged dollars at the bureau.",
            svkSentence: "Vymenili doláre v zmenárni."
        },
        "Gas station": {
            slovak: ["Čerpacia stanica", "Benzínka"],
            engDefinition: "Place for refueling vehicles.",
            svkDefinition: "Miesto na natankovanie vozidiel.",
            engSentence: "They stopped at the gas station to fill up the tank.",
            svkSentence: "Zastavili na čerpacej stanici, aby doplnili nádrž."
        },
        "Museum": {
            slovak: ["Múzeum"],
            engDefinition: "Place for historical artifacts.",
            svkDefinition: "Miesto pre historické artefakty.",
            engSentence: "They visited the museum to see the exhibits.",
            svkSentence: "Navštívili múzeum, aby videli exponáty."
        },
        "Gallery": {
            slovak: ["Galéria"],
            engDefinition: "Place for art exhibitions.",
            svkDefinition: "Miesto pre výstavy umenia.",
            engSentence: "They went to the gallery to see the paintings.",
            svkSentence: "Išli do galérie pozrieť si obrazy."
        },
        "Restaurant": {
            slovak: ["Reštaurácia"],
            engDefinition: "Place for dining out.",
            svkDefinition: "Miesto na jedlo mimo domova.",
            engSentence: "They had dinner at a fancy restaurant.",
            svkSentence: "Večerali v reštaurácii."
        },
        "Café": {
            slovak: ["Kaviareň"],
            engDefinition: "Place for coffee and light meals.",
            svkDefinition: "Miesto na kávu a ľahké jedlá.",
            engSentence: "They met at the café for coffee.",
            svkSentence: "Stretnuli sa v kaviarni na kávu."
        },
        "Bar": {
            slovak: ["Bar"],
            engDefinition: "Place for alcoholic beverages.",
            svkDefinition: "Miesto na alkoholické nápoje.",
            engSentence: "They went to the bar for drinks.",
            svkSentence: "Išli do baru na nápoje."
        },
        "Fast food": {
            slovak: ["Rýchle občerstvenie"],
            engDefinition: "Place for quick meals.",
            svkDefinition: "Miesto na rýchle občerstvenie.",
            engSentence: "They grabbed lunch at the fast food restaurant.",
            svkSentence: "Zobrali si obed v reštaurácii s rýchlym občerstvením."
        },
        "Town centre": {
            slovak: ["Centrum mesta"],
            engDefinition: "Central area of a town.",
            svkDefinition: "Centrálna časť mesta.",
            engSentence: "They met in the town center.",
            svkSentence: "Stretnuli sa v centre mesta."
        },
        "Police station": {
            slovak: ["Policajná stanica"],
            engDefinition: "Place for police operations.",
            svkDefinition: "Miesto pre policejné operácie.",
            engSentence: "They reported the incident at the police station.",
            svkSentence: "Nahlásili incident na policajnej stanici."
        },
        "Toilettes": {
            slovak: ["WC", "Toalety"],
            engDefinition: "Place for sanitary needs.",
            svkDefinition: "Miesto pre hygienické potreby.",
            engSentence: "He went to the toilets to wash his hands.",
            svkSentence: "Išiel na toalety umyť si ruky."
        }
    },
    weather: {
        "Weather": {
            slovak: ["Počasie"],
            engDefinition: "Atmospheric conditions at a specific time and place.",
            svkDefinition: "Atmosférické podmienky v konkrétnom čase a mieste.",
            engSentence: "The weather forecast predicts rain tomorrow.",
            svkSentence: "Predpoveď počasia predpovedá dážď zajtra."
        },
        "Sun": {
            slovak: ["Slnko"],
            engDefinition: "Star at the center of the solar system.",
            svkDefinition: "Hviezda v strede slnečnej sústavy.",
            engSentence: "The sun shines brightly in the sky.",
            svkSentence: "Slnko svieti jasne na oblohe."
        },
        "Sunny": {
            slovak: ["Slnečno"],
            engDefinition: "Weather characterized by a clear sky and abundant sunshine.",
            svkDefinition: "Počasie charakterizované jasnou oblohou a hojným slnečným svetlom.",
            engSentence: "It's sunny today, perfect for a picnic.",
            svkSentence: "Dnes je slnečno, ideálne na piknik."
        },
        "Rain": {
            slovak: ["Dážď"],
            engDefinition: "Precipitation in the form of liquid water drops.",
            svkDefinition: "Zrážky vo forme kvapalných vodných kvapiek.",
            engSentence: "We need an umbrella because of the rain.",
            svkSentence: "Potrebujeme dáždnik kvôli dážďu."
        },
        "Rainy": {
            slovak: ["Daždivo", "Prší"],
            engDefinition: "Weather characterized by rain.",
            svkDefinition: "Počasie charakterizované dážďom.",
            engSentence: "It's rainy today, so we'll stay indoors.",
            svkSentence: "Dnes prší, takže ostaneme doma."
        },
        "Cloud": {
            slovak: ["Oblak"],
            engDefinition: "Visible mass of water droplets suspended in the atmosphere.",
            svkDefinition: "Viditeľná hmota vodných kvapiek suspendovaných v atmosfére.",
            engSentence: "The clouds block the sun.",
            svkSentence: "Oblaky blokujú slnko."
        },
        "Cloudy": {
            slovak: ["Oblačno"],
            engDefinition: "Weather characterized by many clouds in the sky.",
            svkDefinition: "Počasie charakterizované mnohými oblakmi na oblohe.",
            engSentence: "It's cloudy today, but it might clear up later.",
            svkSentence: "Dnes je oblačno, ale neskôr by sa to mohlo vyjasniť."
        },
        "Snow": {
            slovak: ["Sneh"],
            engDefinition: "Frozen precipitation in the form of white flakes.",
            svkDefinition: "Zmrazené zrážky vo forme bielych vločiek.",
            engSentence: "The snow covers the ground in winter.",
            svkSentence: "Sneh pokrýva zem v zime."
        },
        "Snowy": {
            slovak: ["Sneží"],
            engDefinition: "Weather characterized by falling snow.",
            svkDefinition: "Počasie charakterizované padajúcim snehom.",
            engSentence: "It's snowy today, so we'll build a snowman.",
            svkSentence: "Dnes sneží, takže postavíme snehuliaka."
        },
        "Wind": {
            slovak: ["Vietor"],
            engDefinition: "Natural movement of air in the atmosphere.",
            svkDefinition: "Prirodzený pohyb vzduchu v atmosfére.",
            engSentence: "The wind rustles the leaves.",
            svkSentence: "Vietor šustí lístím."
        },
        "Windy": {
            slovak: ["Veterno"],
            engDefinition: "Weather characterized by strong winds.",
            svkDefinition: "Počasie charakterizované silnými vetrami.",
            engSentence: "It's windy today, so hold onto your hat.",
            svkSentence: "Dnes je veterno, takže držte sa svojho klobúka."
        },
        "Storm": {
            slovak: ["Búrka"],
            engDefinition: "Violent weather with strong winds and usually rain, thunder, lightning, or snow.",
            svkDefinition: "Násilné počasie s silnými vetrami a zvyčajne dážďom, hromom, bleskom alebo snehom.",
            engSentence: "The storm knocked out the power.",
            svkSentence: "Búrka vypla elektrinu."
        },
        "Thunder": {
            slovak: ["Hrom"],
            engDefinition: "Sound caused by lightning.",
            svkDefinition: "Zvuk spôsobený bleskom.",
            engSentence: "The thunder shook the windows.",
            svkSentence: "Hrom zatriasol oknami."
        },
        "Lightning": {
            slovak: ["Blesk"],
            engDefinition: "Flash of light produced by electrical discharge.",
            svkDefinition: "Blesk svetelný lúč vytvorený elektrickým výbojom.",
            engSentence: "They saw lightning in the distance.",
            svkSentence: "V diaľke videli blesk."
        },
        "Fog": {
            slovak: ["Hmla"],
            engDefinition: "Thick cloud of tiny water droplets suspended in the atmosphere.",
            svkDefinition: "Hustá hmlovina drobných vodných kvapiek suspendovaná v atmosfére.",
            engSentence: "The fog obscures visibility.",
            svkSentence: "Hmla zatemňuje viditeľnosť."
        },
        "Foggy": {
            slovak: ["Hmlisto"],
            engDefinition: "Weather characterized by fog.",
            svkDefinition: "Počasie charakterizované hmlou.",
            engSentence: "It's foggy today, drive carefully.",
            svkSentence: "Dnes je hmlisto, jazdite opatrne."
        },
        "Temperature": {
            slovak: ["Teplota"],
            engDefinition: "Degree of hotness or coldness measured with a thermometer.",
            svkDefinition: "Stupeň tepla alebo chladu meraný teplomerom.",
            engSentence: "The temperature dropped below freezing.",
            svkSentence: "Teplota klesla pod bod mrazu."
        },
        "Hot (Weather)": {
            slovak: ["Horúco"],
            engDefinition: "High temperature.",
            svkDefinition: "Vysoká teplota.",
            engSentence: "It's hot today, so we'll go swimming.",
            svkSentence: "Dnes je horúco, takže pôjdeme plávať."
        },
        "Warm (Weather)": {
            slovak: ["Teplo"],
            engDefinition: "Moderately high temperature.",
            svkDefinition: "Mierne vysoká teplota.",
            engSentence: "It's warm outside, perfect for a walk.",
            svkSentence: "Vonku je teplo, ideálne na prechádzku."
        },
        "Cool (Weather)": {
            slovak: ["Chladno"],
            engDefinition: "Moderately low temperature.",
            svkDefinition: "Mierne nízka teplota.",
            engSentence: "It's cool in the evenings.",
            svkSentence: "Večer je chladno."
        },
        "Cold (Weather)": {
            slovak: ["Zima"],
            engDefinition: "Low temperature.",
            svkDefinition: "Nízka teplota.",
            engSentence: "It's cold outside, don't forget your jacket.",
            svkSentence: "Vonku je zima, nezabudni na svoju bundu."
        },
        "Ice": {
            slovak: ["Ľad"],
            engDefinition: "Frozen water.",
            svkDefinition: "Zmrazená voda.",
            engSentence: "The lake is covered with ice in winter.",
            svkSentence: "Jazero je v zime pokryté ľadom."
        },
        "Icy": {
            slovak: ["Ľadovo"],
            engDefinition: "Weather characterized by ice or icy conditions.",
            svkDefinition: "Počasie charakterizované ľadom alebo ľadovými podmienkami.",
            engSentence: "The roads are icy, drive carefully.",
            svkSentence: "Cesty sú ľadové, jazdite opatrne."
        },
        "Humidity": {
            slovak: ["Vlhkosť"],
            engDefinition: "Amount of water vapor in the air.",
            svkDefinition: "Množstvo vodnej pary vo vzduchu.",
            engSentence: "High humidity makes it feel hotter.",
            svkSentence: "Vysoká vlhkosť robí, že sa cítime teplejšie."
        },
        "Humid": {
            slovak: ["Vlhko"],
            engDefinition: "Weather characterized by high humidity.",
            svkDefinition: "Počasie charakterizované vysokou vlhkosťou.",
            engSentence: "It's humid today, so it feels sticky.",
            svkSentence: "Dnes je vlhko, takže je to lepkavé."
        }
    },
    family: {
        "Boy": {
            slovak: ["Chlapec"],
            engDefinition: "A male child or young man.",
            svkDefinition: "Mužské dieťa alebo mladý muž.",
            engSentence: "The boy played with his toy car.",
            svkSentence: "Chlapec si hral so svojím autíčkom."
        },
        "Girl": {
            slovak: ["Dievča"],
            engDefinition: "A female child or young woman.",
            svkDefinition: "Ženské dieťa alebo mladá žena.",
            engSentence: "The girl skipped happily down the path.",
            svkSentence: "Dievča veselo švihlo po ceste."
        },
        "Son": {
            slovak: ["Syn"],
            engDefinition: "A boy or man in relation to either or both of his parents.",
            svkDefinition: "Chlapec alebo muž vo vzťahu k jednému alebo obidvom svojim rodičom.",
            engSentence: "The son helped his father fix the car.",
            svkSentence: "Syn pomohol svojmu otcovi opraviť auto."
        },
        "Daughter": {
            slovak: ["Dcéra"],
            engDefinition: "A girl or woman in relation to either or both of her parents.",
            svkDefinition: "Dievča alebo žena vo vzťahu k jednému alebo obidvom svojim rodičom.",
            engSentence: "The daughter baked cookies with her mother.",
            svkSentence: "Dcéra pekla sušienky so svojou mamou."
        },
        "Brother": {
            slovak: ["Brat"],
            engDefinition: "A male sibling.",
            svkDefinition: "Mužský súrodenec.",
            engSentence: "The brothers went fishing together.",
            svkSentence: "Bratia išli spolu na rybolov."
        },
        "Sister": {
            slovak: ["Sestra"],
            engDefinition: "A female sibling.",
            svkDefinition: "Ženský súrodenec.",
            engSentence: "The sisters shared a bedroom.",
            svkSentence: "Sestry si zdieľali spálňu."
        },
        "Man": {
            slovak: ["Muž"],
            engDefinition: "An adult human male.",
            svkDefinition: "Dospelý mužský človek.",
            engSentence: "The man greeted his neighbor with a smile.",
            svkSentence: "Muž pozdravil svojho suseda s úsmevom."
        },
        "Woman": {
            slovak: ["žena"],
            engDefinition: "An adult human female.",
            svkDefinition: "Dospelá ženská osoba.",
            engSentence: "The woman carried groceries into her house.",
            svkSentence: "Žena niesla potraviny do domu."
        },
        "Father": {
            slovak: ["Otec"],
            engDefinition: "A man in relation to his child or children.",
            svkDefinition: "Muž vo vzťahu k svojmu dieťaťu alebo deťom.",
            engSentence: "The father taught his son how to ride a bike.",
            svkSentence: "Otec učil svojho syna, ako jazdiť na bicykli."
        },
        "Mother": {
            slovak: ["Matka"],
            engDefinition: "A woman in relation to her child or children.",
            svkDefinition: "Žena vo vzťahu k svojmu dieťaťu alebo deťom.",
            engSentence: "The mother kissed her daughter goodnight.",
            svkSentence: "Matka pobozkala svoju dcéru dobrú noc."
        },
        "Grandfather": {
            slovak: ["Dedko"],
            engDefinition: "A father of one's father or mother.",
            svkDefinition: "Otec svojho otca alebo matky.",
            engSentence: "The grandfather told stories of his youth.",
            svkSentence: "Dedko rozprával príbehy zo svojej mladosti."
        },
        "Grandmother": {
            slovak: ["Babka"],
            engDefinition: "A mother of one's father or mother.",
            svkDefinition: "Matka svojho otca alebo matky.",
            engSentence: "The grandmother baked delicious pies.",
            svkSentence: "Babka piekla chutné koláče."
        },
        "Parents": {
            slovak: ["Rodičia"],
            engDefinition: "A father or mother.",
            svkDefinition: "Otec alebo matka.",
            engSentence: "The parents attended the school meeting.",
            svkSentence: "Rodičia sa zúčastnili školskej schôdzky."
        },
        "Aunt (mother's sister)": {
            slovak: ["Teta"],
            engDefinition: "The sister of one's father or mother or the wife of one's uncle.",
            svkDefinition: "Sestra svojho otca alebo matky alebo manželka jedného z tvojich strýkov.",
            engSentence: "The aunt baked cookies for her nieces and nephews.",
            svkSentence: "Teta pekla sušienky pre svoje neterky a synovcov."
        },
        "Uncle (mother's brother)": {
            slovak: ["Ujo"],
            engDefinition: "The brother of one's father or mother or the husband of one's aunt.",
            svkDefinition: "Brat svojho otca alebo matky alebo manžel jednej z tvojich tety.",
            engSentence: "The uncle took his nephew fishing for the first time.",
            svkSentence: "Ujo vzal svojho synovca prvýkrát na rybolov."
        },
        "Aunt (father's sister)": {
            slovak: ["Stryná"],
            engDefinition: "The sister of one's father or mother or the wife of one's uncle.",
            svkDefinition: "Sestra svojho otca alebo matky alebo manželka jedného z tvojich strýkov.",
            engSentence: "The aunt gave her niece a beautiful necklace.",
            svkSentence: "Stryná dala svojej neteri krásny náhrdelník."
        },
        "Uncle (father's brother)": {
            slovak: ["Strýko"],
            engDefinition: "The brother of one's father or mother or the husband of one's aunt.",
            svkDefinition: "Brat svojho otca alebo matky alebo manžel jednej z tvojich tety.",
            engSentence: "The uncle taught his nephew how to play soccer.",
            svkSentence: "Strýko učil svojho synovca hruť futbal."
        },
        "Siblings": {
            slovak: ["Súrodenci"],
            engDefinition: "Each of two or more children or offspring having one or both parents in common; a brother or sister.",
            svkDefinition: "Každý z dvoch alebo viacerých detí alebo potomkov, ktorí majú aspoň jedného rodiča spoločného; brat alebo sestra.",
            engSentence: "The siblings fought over who got to sit in the front seat of the car.",
            svkSentence: "Súrodenci sa hádali o to, kto si sadne na predné sedadlo auta."
        },
        "Grandson": {
            slovak: ["Vnuk"],
            engDefinition: "A son of one's son or daughter.",
            svkDefinition: "Syn jedného z jeho syna alebo dcéry.",
            engSentence: "The grandson brought his grandfather a drawing he made.",
            svkSentence: "Vnuk priniesol svojmu dedovi kresbu, ktorú nakreslil."
        },
        "Granddaughter": {
            slovak: ["Vnučka"],
            engDefinition: "A daughter of one's son or daughter.",
            svkDefinition: "Dcéra jedného z jeho syna alebo dcéry.",
            engSentence: "The granddaughter gave her grandmother a bouquet of flowers.",
            svkSentence: "Vnučka dala svojej babke kyticu kvetov."
        },
        "Male cousin": {
            slovak: ["Bratranec"],
            engDefinition: "A son of one's uncle or aunt.",
            svkDefinition: "Syn jedného z jeho strýka alebo tety.",
            engSentence: "The male cousin and his female cousin played hide and seek together.",
            svkSentence: "Bratranec a jeho sesternica sa spolu hrali na schovávačku."
        },
        "Female cousin": {
            slovak: ["Sesternica"],
            engDefinition: "A daughter of one's uncle or aunt.",
            svkDefinition: "Dcéra jedného z jeho strýka alebo tety.",
            engSentence: "The female cousin and her male cousin raced to the finish line.",
            svkSentence: "Sesternica a jej bratranec súťažili o cieľovú čiaru."
        },
        "Nephew": {
            slovak: ["Synovec"],
            engDefinition: "A son of one's brother or sister, or of one's brother-in-law or sister-in-law.",
            svkDefinition: "Syn jeho brata alebo sestry, alebo jeho švagra alebo švagrinnej.",
            engSentence: "The nephew asked his uncle to help him build a model airplane.",
            svkSentence: "Synovec poprosil svojho uja, aby mu pomohol postaviť model lietadla."
        },
        "Niece": {
            slovak: ["Neter"],
            engDefinition: "A daughter of one's brother or sister, or of one's brother-in-law or sister-in-law.",
            svkDefinition: "Dcéra jeho brata alebo sestry, alebo jeho švagra alebo švagrinnej.",
            engSentence: "The niece baked cookies with her aunt.",
            svkSentence: "Neter pekla sušienky so svojou tetou."
        },
        "Husband": {
            slovak: ["Manžel"],
            engDefinition: "A married man, especially in relation to his wife.",
            svkDefinition: "Ženatý muž, najmä vo vzťahu k jeho manželke.",
            engSentence: "The husband brought his wife breakfast in bed.",
            svkSentence: "Manžel priniesol svojej manželke raňajky do postele."
        },
        "Wife": {
            slovak: ["Manželka"],
            engDefinition: "A married woman, especially in relation to her husband.",
            svkDefinition: "Vydatá žena, najmä vo vzťahu k svojmu manželovi.",
            engSentence: "The wife surprised her husband with a homemade dinner.",
            svkSentence: "Manželka prekvapila svojho manžela domácou večerou."
        },
        "Fiancé": {
            slovak: ["Snúbenec"],
            engDefinition: "A man to whom someone is engaged to be married.",
            svkDefinition: "Muž, ktorý je zasnúbený s niekým, s kým sa má oženiť.",
            engSentence: "The fiancé gave his fiancée a diamond ring.",
            svkSentence: "Snúbenec dal svojej snúbenici diamantový prsteň."
        },
        "Fiancée": {
            slovak: ["Snúbenica"],
            engDefinition: "A woman to whom someone is engaged to be married.",
            svkDefinition: "Žena, ktorá je zasnúbená s niekým, s kým sa má vydať.",
            engSentence: "The fiancée hugged her fiancé tightly.",
            svkSentence: "Snúbenica pevne objala svojho snúbenca."
        },
        "Son-in-law": {
            slovak: ["Zať"],
            engDefinition: "The husband of one's daughter.",
            svkDefinition: "Manžel jeho dcéry.",
            engSentence: "The son-in-law helped his father-in-law with gardening.",
            svkSentence: "Zať pomohol svojmu svokrovi s záhradkárením."
        },
        "Daughter-in-law": {
            slovak: ["Nevesta"],
            engDefinition: "The wife of one's son.",
            svkDefinition: "Manželka jeho syna.",
            engSentence: "The daughter-in-law baked a cake for her mother-in-law's birthday.",
            svkSentence: "Nevesta upiekla tortu na narodeniny svojej svokry."
        },
        "Mother-in-law": {
            slovak: ["Svokra"],
            engDefinition: "The mother of one's spouse.",
            svkDefinition: "Matka jeho manželky alebo manžela.",
            engSentence: "The mother-in-law gave her daughter-in-law advice on gardening.",
            svkSentence: "Svokra dala svojej neviste rady o záhradkárení."
        },
        "Father-in-law": {
            slovak: ["Svokor"],
            engDefinition: "The father of one's spouse.",
            svkDefinition: "Otec jeho manželky alebo manžela.",
            engSentence: "The father-in-law taught his son-in-law how to fix the fence.",
            svkSentence: "Svokor naučil svojho zaťa, ako opraviť plot."
        },
        "Brother-in-law": {
            slovak: ["švagor"],
            engDefinition: "The brother of one's spouse.",
            svkDefinition: "Brat jeho manželky alebo manžela.",
            engSentence: "The brother-in-law and his wife visited for the weekend.",
            svkSentence: "Švagor a jeho manželka prišli na víkendovú návštevu."
        },
        "Sister-in-law": {
            slovak: ["švagriná"],
            engDefinition: "The sister of one's spouse.",
            svkDefinition: "Sestra jeho manželky alebo manžela.",
            engSentence: "The sister-in-law and her husband went on a hiking trip.",
            svkSentence: "Švagriná a jej manžel išli na túru."
        },
        "Godfather": {
            slovak: ["Krstný otec"],
            engDefinition: "A male godparent, often in a baptism ceremony.",
            svkDefinition: "Mužský krstný rodič, často v obradu krstu.",
            engSentence: "The godfather gave his godson a special gift for his birthday.",
            svkSentence: "Krstný otec dal svojmu krstnému synovi špeciálny dar na jeho narodeniny."
        },
        "Godmother": {
            slovak: ["Krstná mama"],
            engDefinition: "A female godparent, often in a baptism ceremony.",
            svkDefinition: "Ženský krstný rodič, často v obradu krstu.",
            engSentence: "The godmother attended her goddaughter's school play.",
            svkSentence: "Krstná mama sa zúčastnila školského predstavenia jej krstnej dcéry."
        },
        "Boyfriend (or close friend)": {
            slovak: ["Priateľ"],
            engDefinition: "A male partner in a romantic or sexual relationship, or a male friend.",
            svkDefinition: "Mužský partner v romantickom alebo sexuálnom vzťahu, alebo mužský priateľ.",
            engSentence: "The boyfriend and his girlfriend went on a picnic together.",
            svkSentence: "Priateľ a jeho priateľka išli spolu na piknik."
        },
        "Girlfriend (or close friend)": {
            slovak: ["Priateľka"],
            engDefinition: "A female partner in a romantic or sexual relationship, or a female friend.",
            svkDefinition: "Ženský partner v romantickom alebo sexuálnom vzťahu, alebo ženský priateľ.",
            engSentence: "The girlfriend and her boyfriend watched a movie at home.",
            svkSentence: "Priateľka a jej priateľ sledovali doma film."
        },
        "Boyfriend": {
            slovak: ["Frajer"],
            engDefinition: "A male partner in a romantic or sexual relationship.",
            svkDefinition: "Mužský partner v romantickom alebo sexuálnom vzťahu.",
            engSentence: "The boyfriend gave his girlfriend flowers for their anniversary.",
            svkSentence: "Frajer dal svojej priateľke kvety k ich výročiu."
        },
        "Girlfriend": {
            slovak: ["Frajerka"],
            engDefinition: "A female partner in a romantic or sexual relationship.",
            svkDefinition: "Ženský partner v romantickom alebo sexuálnom vzťahu.",
            engSentence: "The girlfriend surprised her boyfriend with tickets to a concert.",
            svkSentence: "Frajerka prekvapila svojho priateľa lístkami na koncert."
        },
        "Friend (male)": {
            slovak: ["Kamarát"],
            engDefinition: "A person with whom one has a bond of mutual affection, typically one exclusive of sexual or family relations.",
            svkDefinition: "Osoba, s ktorou máte väzbu vzájomnej náklonnosti, zvyčajne výlučnej vzhľadom na sexuálne alebo rodinné vzťahy.",
            engSentence: "The friend offered to help his friend move to a new apartment.",
            svkSentence: "Kamarát ponúkol pomoc svojmu kamarátovi, aby sa presťahoval do nového bytu."
        },
        "Friend (female)": {
            slovak: ["Kamarátka"],
            engDefinition: "A person with whom one has a bond of mutual affection, typically one exclusive of sexual or family relations.",
            svkDefinition: "Osoba, s ktorou máte väzbu vzájomnej náklonnosti, zvyčajne výlučnej vzhľadom na sexuálne alebo rodinné vzťahy.",
            engSentence: "The friend and her friend went shopping together.",
            svkSentence: "Kamarátka a jej kamarátka išli spolu nakupovať."
        }
    },
    animals: {
        "Dog": {
            slovak: ["Pes"],
            engDefinition: "Domesticated carnivorous mammal.",
            svkDefinition: "Domestikovaný masožravý cicavec.",
            engSentence: "The dog barks at strangers.",
            svkSentence: "Pes šteká na cudzincov."
        },
        "Cat": {
            slovak: ["Mačka"],
            engDefinition: "Small domesticated carnivorous mammal.",
            svkDefinition: "Malý domestikovaný masožravý cicavec.",
            engSentence: "The cat purrs when it's petted.",
            svkSentence: "Mačka prede, keď je hladkaná."
        },
        "Bird": {
            slovak: ["Vták"],
            engDefinition: "Warm-blooded egg-laying vertebrate with feathers.",
            svkDefinition: "Teplomilný vajcia kladúci stavovčiak s periami.",
            engSentence: "The bird sings in the morning.",
            svkSentence: "Vták spieva ráno."
        },
        "Fish": {
            slovak: ["Ryba"],
            engDefinition: "Aquatic vertebrate with gills and fins.",
            svkDefinition: "Vodný stavovčiak s žabernými a plôškami.",
            engSentence: "The fish swims gracefully in the pond.",
            svkSentence: "Ryba elegantne pláva v jazere."
        },
        "Horse": {
            slovak: ["Kôň"],
            engDefinition: "Large domesticated mammal used for riding and draft work.",
            svkDefinition: "Veľký domestikovaný cicavec používaný na jazdenie a ťah.",
            engSentence: "The horse gallops across the field.",
            svkSentence: "Kôň galopuje cez pole."
        },
        "Cow": {
            slovak: ["Krava"],
            engDefinition: "Large domesticated ruminant mammal with horns.",
            svkDefinition: "Veľký domestikovaný prežúvavý cicavec s rohmi.",
            engSentence: "The cow grazes in the pasture.",
            svkSentence: "Krava sa pasie na pastvách."
        },
        "Pig": {
            slovak: ["Prasa"],
            engDefinition: "Domesticated mammal raised for its meat.",
            svkDefinition: "Domestikovaný cicavec chovaný pre svoje mäso.",
            engSentence: "The pig oinks in the barn.",
            svkSentence: "Prasa chrčí v stajni."
        },
        "Sheep": {
            slovak: ["Ovca"],
            engDefinition: "Domesticated ruminant mammal with wool.",
            svkDefinition: "Domestikovaný prežúvavý cicavec s vlnou.",
            engSentence: "The sheep bleats in the meadow.",
            svkSentence: "Ovca bečí na lúke."
        },
        "Goat": {
            slovak: ["Koza"],
            engDefinition: "Domesticated ruminant mammal raised for its milk and meat.",
            svkDefinition: "Domestikovaný prežúvavý cicavec chovaný pre svoje mlieko a mäso.",
            engSentence: "The goat climbs the rocky hill.",
            svkSentence: "Koza stúpa na skalnatý kopec."
        },
        "Chicken": {
            slovak: ["Sliepka"],
            engDefinition: "Domesticated fowl raised for meat or eggs.",
            svkDefinition: "Domestikovaná hydina chovaná pre mäso alebo vajcia.",
            engSentence: "The chicken pecks at the ground.",
            svkSentence: "Sliepka piká do zeme."
        },
        "Duck": {
            slovak: ["Kačka"],
            engDefinition: "Waterfowl with a broad blunt bill.",
            svkDefinition: "Vodná hydina s širokým tupým zobákom.",
            engSentence: "The duck quacks as it swims in the pond.",
            svkSentence: "Kačka kváká, keď pláva v jazere."
        },
        "Goose": {
            slovak: ["Hus"],
            engDefinition: "Large waterbird with a long neck and webbed feet.",
            svkDefinition: "Veľká vodná vták s dlhým krkom a plávajúcimi nohami.",
            engSentence: "The goose honks as it flies overhead.",
            svkSentence: "Hus hukotá, keď lieta cez hlavu."
        },
        "Rabbit": {
            slovak: ["Zajac"],
            engDefinition: "Small mammal with long ears and a short fluffy tail.",
            svkDefinition: "Malý cicavec s dlhými ušami a krátkym chmýreným chvostom.",
            engSentence: "The rabbit hops through the field.",
            svkSentence: "Zajac hopká po poli."
        },
        "Mouse": {
            slovak: ["Myš"],
            engDefinition: "Small rodent with a pointed snout and long tail.",
            svkDefinition: "Malý hlodavec s ukázkovým chvostom a dlhým chvostom.",
            engSentence: "The mouse nibbles on cheese.",
            svkSentence: "Myš sa hryzie do syra."
        },
        "Rat": {
            slovak: ["Potkan"],
            engDefinition: "Medium-sized rodent with a long tail.",
            svkDefinition: "Stredne veľký hlodavec s dlhým chvostom.",
            engSentence: "The rat scurries along the wall.",
            svkSentence: "Potkan sa plíži popri stene."
        },
        "Deer": {
            slovak: ["Jeleň"],
            engDefinition: "Large antlered mammal.",
            svkDefinition: "Veľký rohatý cicavec.",
            engSentence: "The deer grazes peacefully in the forest.",
            svkSentence: "Jeleň sa pokojne pasie v lese."
        },
        "Bear": {
            slovak: ["Medveď"],
            engDefinition: "Large mammal with a stocky build and shaggy coat.",
            svkDefinition: "Veľký cicavec s robustnou postavou a chlpatým kožuchom.",
            engSentence: "The bear roams through the woods.",
            svkSentence: "Medveď sa túla lesom."
        },
        "Wolf": {
            slovak: ["Vlk"],
            engDefinition: "Carnivorous mammal of the dog family.",
            svkDefinition: "Masožravý cicavec z rodiny psov.",
            engSentence: "The wolf howls at the moon.",
            svkSentence: "Vlk vylieka na mesiac."
        },
        "Fox": {
            slovak: ["Líška"],
            engDefinition: "Small omnivorous mammal with a pointed muzzle.",
            svkDefinition: "Malý všetkožravý cicavec s ostrým čumákom.",
            engSentence: "The fox trots through the field.",
            svkSentence: "Líška kroší po poli."
        },
        "Lion": {
            slovak: ["Lev"],
            engDefinition: "Large cat with a tawny coat and a tufted tail.",
            svkDefinition: "Veľká mačka s svetlohnedým kožuchom a zopár prechov.",
            engSentence: "The lion roars loudly in the savanna.",
            svkSentence: "Lev hlasno rúca na savane."
        },
        "Tiger": {
            slovak: ["Tiger"],
            engDefinition: "Large carnivorous feline with distinctive stripes.",
            svkDefinition: "Veľký masožravý mačac s charakteristickými pruhmi.",
            engSentence: "The tiger prowls through the jungle.",
            svkSentence: "Tiger sa túla džungľou."
        },
        "Elephant": {
            slovak: ["Slon"],
            engDefinition: "Large herbivorous mammal with a trunk and tusks.",
            svkDefinition: "Veľký bylinožravý cicavec s chobotom a kly.",
            engSentence: "The elephant trumpets loudly.",
            svkSentence: "Slon trúbí hlasno."
        },
        "Monkey": {
            slovak: ["Opica"],
            engDefinition: "Primate with a long tail and opposable thumbs.",
            svkDefinition: "Prímát s dlhým chvostom a opačnými palcami.",
            engSentence: "The monkey swings from branch to branch.",
            svkSentence: "Opica sa húpa z konára na konár."
        },
        "Snake": {
            slovak: ["Had"],
            engDefinition: "Long limbless reptile.",
            svkDefinition: "Dlhý beznohý plaz.",
            engSentence: "The snake slithers silently through the grass.",
            svkSentence: "Had sa potichu plazí trávou."
        },
        "Frog": {
            slovak: ["Žaba"],
            engDefinition: "Amphibian with a short squat body.",
            svkDefinition: "Obojživelník s krátkym chodením.",
            engSentence: "The frog leaps into the pond.",
            svkSentence: "Žaba skáče do jazera."
        },
        "Turtle": {
            slovak: ["Korytnačka"],
            engDefinition: "Reptile with a bony shell.",
            svkDefinition: "Plaz s kostným krytom.",
            engSentence: "The turtle basks in the sun.",
            svkSentence: "Korytnačka sa vyhrieva na slnku."
        },
        "Insect": {
            slovak: ["Hmyz"],
            engDefinition: "Small invertebrate animal with six legs.",
            svkDefinition: "Malý bezstavovčí cicavec s šiestimi nohami.",
            engSentence: "The insect buzzes around the flowers.",
            svkSentence: "Hmyz bzučí okolo kvetov."
        },
        "Butterfly": {
            slovak: ["Motýľ"],
            engDefinition: "Insect with large brightly colored wings.",
            svkDefinition: "Hmyz s veľkými svetlo farebnými krídlami.",
            engSentence: "The butterfly flutters gracefully.",
            svkSentence: "Motýľ sa elegantne plachtí."
        },
        "Bee": {
            slovak: ["Včela"],
            engDefinition: "Insect that collects nectar and makes honey.",
            svkDefinition: "Hmyz, ktorý zbiera nektár a robí med.",
            engSentence: "The bee buzzes from flower to flower.",
            svkSentence: "Včela bzučí z kvetu na kvet."
        },
        "Ant": {
            slovak: ["Mravec"],
            engDefinition: "Small insect that lives in colonies.",
            svkDefinition: "Malý hmyz, ktorý žije v kolóniách.",
            engSentence: "The ant carries a crumb back to the nest.",
            svkSentence: "Mravec nesie drobček späť do hniezda."
        }
    },
    clothes: {
        "Shirt": {
            slovak: ["Košeľa"],
            engDefinition: "Clothing for the upper body, with buttons and a collar.",
            svkDefinition: "Oblečenie pre hornú časť tela s gombíkmi a golierom.",
            engSentence: "He wore a clean shirt to the interview.",
            svkSentence: "Na pohovor si obliekol čistú košeľu."
        },
        "T-shirt": {
            slovak: ["Tričko"],
            engDefinition: "A casual top with short sleeves.",
            svkDefinition: "Voľné tričko s krátkymi rukávmi.",
            engSentence: "She likes to wear T-shirts in the summer.",
            svkSentence: "V lete rada nosí tričká."
        },
        "Blouse": {
            slovak: ["Blúzka"],
            engDefinition: "A woman's top like a shirt.",
            svkDefinition: "Dámsky vrchný odev podobný košeli.",
            engSentence: "She wore a pretty blouse to the party.",
            svkSentence: "Na večierok si obliekla peknú blúzku."
        },
        "Sweater": {
            slovak: ["Sveter"],
            engDefinition: "A warm knitted top.",
            svkDefinition: "Teplý pletený vrchný odev.",
            engSentence: "He put on a warm sweater in the cold weather.",
            svkSentence: "V studenom počasí si obliekol teplý sveter."
        },
        "Jacket": {
            slovak: ["Bunda"],
            engDefinition: "A short coat.",
            svkDefinition: "Krátky kabát.",
            engSentence: "She wore a leather jacket on her motorcycle ride.",
            svkSentence: "Na motocyklovú jazdu si obliekla koženú bundu."
        },
        "Coat": {
            slovak: ["Kabát"],
            engDefinition: "A long, warm outer garment.",
            svkDefinition: "Dlhý, teplý vonkajší odev.",
            engSentence: "He wore a heavy coat in the snowstorm.",
            svkSentence: "V snehovej búrke mal na sebe ťažký kabát."
        },
        "Pants": {
            slovak: ["Nohavice"],
            engDefinition: "Clothing covering each leg separately.",
            svkDefinition: "Odev kryjúci každú nohu samostatne.",
            engSentence: "He bought a new pair of pants.",
            svkSentence: "Kúpil si nové nohavice."
        },
        "Jeans": {
            slovak: ["Džínsy"],
            engDefinition: "Tough, blue cotton pants.",
            svkDefinition: "Odolné modré bavlnené nohavice.",
            engSentence: "She wore ripped jeans to the concert.",
            svkSentence: "Na koncert mala na sebe roztrhané džínsy."
        },
        "Skirt": {
            slovak: ["Sukňa"],
            engDefinition: "A garment hanging from the waist.",
            svkDefinition: "Odev visiaci od pásu.",
            engSentence: "She wore a floral skirt to the party.",
            svkSentence: "Na večierok mala na sebe kvetovanú sukňu."
        },
        "Dress": {
            slovak: ["Šaty"],
            engDefinition: "A one-piece garment for women.",
            svkDefinition: "Jednodielny odev pre ženy.",
            engSentence: "She wore a red dress to the wedding.",
            svkSentence: "Na svadbu mala na sebe červené šaty."
        },
        "Suit": {
            slovak: ["Oblek"],
            engDefinition: "A set of clothes made of the same fabric.",
            svkDefinition: "Súprava odevov z rovnakého materiálu.",
            engSentence: "He wore a black suit to the formal event.",
            svkSentence: "Na formálnu udalosť mal na sebe čierny oblek."
        },
        "Tie": {
            slovak: ["Kravata"],
            engDefinition: "A narrow piece of cloth worn around the neck.",
            svkDefinition: "Úzky kus látky nosený okolo krku.",
            engSentence: "He wore a colorful tie to the wedding.",
            svkSentence: "Na svadbu mal na sebe farebnú kravatu."
        },
        "Belt": {
            slovak: ["Opasok"],
            engDefinition: "A strip of material worn around the waist.",
            svkDefinition: "Pásik materiálu nosený okolo pásu.",
            engSentence: "He tightened his belt after losing weight.",
            svkSentence: "Pripútal si opasok po tom, čo schudol."
        },
        "Socks": {
            slovak: ["Ponožky"],
            engDefinition: "Clothing for the foot and lower leg.",
            svkDefinition: "Odev na nohu a dolnú časť nohy.",
            engSentence: "He wore mismatched socks.",
            svkSentence: "Mal na sebe ponožky, ktoré sa nelíšili."
        },
        "Shoes": {
            slovak: ["Topánky"],
            engDefinition: "Footwear covering the foot.",
            svkDefinition: "Obuv pokrývajúca nohu.",
            engSentence: "She polished her shoes before the job interview.",
            svkSentence: "Pred pohovorom si vyčistila topánky."
        },
        "Boots": {
            slovak: ["Čižmy"],
            engDefinition: "Sturdy footwear covering the foot and ankle.",
            svkDefinition: "Pevná obuv kryjúca nohu a členok.",
            engSentence: "He wore hiking boots on the mountain trail.",
            svkSentence: "Na horskom chodníku mal na sebe turistické čižmy."
        },
        "Sandals": {
            slovak: ["Sandále"],
            engDefinition: "Light footwear with straps.",
            svkDefinition: "Ľahká obuv s popruhmi.",
            engSentence: "She wore sandals to the beach.",
            svkSentence: "Na pláži mala na sebe sandále."
        },
        "Hat": {
            slovak: ["Klobúk"],
            engDefinition: "A covering for the head.",
            svkDefinition: "Pokrývka na hlavu.",
            engSentence: "He tipped his hat as a sign of respect.",
            svkSentence: "Poklonil sa svojmu klobúku ako prejav úcty."
        },
        "Cap": {
            slovak: ["Šiltovka"],
            engDefinition: "A soft hat with a stiff peak.",
            svkDefinition: "Mäkká čiapka s tuhým šiltom.",
            engSentence: "He wore a baseball cap backwards.",
            svkSentence: "Mal na sebe bejzbalovú čiapku obrátenú naruby."
        },
        "Scarf": {
            slovak: ["Šál"],
            engDefinition: "A piece of fabric worn around the neck.",
            svkDefinition: "Kus látky nosený okolo krku.",
            engSentence: "She wrapped a scarf around her neck to keep warm.",
            svkSentence: "Zavinula si šál okolo krku, aby jej bolo teplo."
        },
        "Gloves": {
            slovak: ["Rukavice"],
            engDefinition: "Clothing for the hands.",
            svkDefinition: "Odev na ruky.",
            engSentence: "She put on her gloves before going outside.",
            svkSentence: "Predtým, ako vyšla von, si obliekla rukavice."
        },
        "Underwear": {
            slovak: ["Spodná bielizeň"],
            engDefinition: "Clothes worn under other clothes.",
            svkDefinition: "Oblečenie nosené pod iným oblečením.",
            engSentence: "He folded his underwear and placed it in the drawer.",
            svkSentence: "Zložil svoju spodnú bielizeň a umiestnil ju do zásuvky."
        },
        "Bra": {
            slovak: ["Podprsenka"],
            engDefinition: "A woman's undergarment worn to support the breasts.",
            svkDefinition: "Podprsenka nosená na podporu prsníkov.",
            engSentence: "She bought a new bra at the lingerie store.",
            svkSentence: "Kúpila si novú podprsenku v obchode s dámskym spodným prádlom."
        },
        "Pajamas": {
            slovak: ["Pyžamo"],
            engDefinition: "Clothes worn for sleeping.",
            svkDefinition: "Odev nosený na spanie.",
            engSentence: "He changed into his pajamas before going to bed.",
            svkSentence: "Pred spaním si preobliekol do svojho pyžama."
        },
        "Shorts": {
            slovak: ["Kraťasy"],
            engDefinition: "Short pants worn in warm weather.",
            svkDefinition: "Krátke nohavice nosené v teplom počasí.",
            engSentence: "He wore shorts to the gym.",
            svkSentence: "Na telocvičňu mal na sebe kraťasy."
        },
        "Swimsuit": {
            slovak: ["Plavky"],
            engDefinition: "A garment worn for swimming or bathing.",
            svkDefinition: "Odev nosený pri plávaní alebo kúpaní.",
            engSentence: "She wore a red swimsuit at the beach.",
            svkSentence: "Na pláži mala na sebe červené plavky."
        },
        "Sweatshirt": {
            slovak: ["Mikina"],
            engDefinition: "A loose, long-sleeved, collarless pullover of soft, absorbent fabric.",
            svkDefinition: "Voľná, dlhoročná, bez goliera pulóver z mäkkého, absorpčného materiálu.",
            engSentence: "He wore a hoodie sweatshirt on the chilly evening.",
            svkSentence: "Na chladný večer mal na sebe mikinu s kapucňou."
        },
        "Hoodie": {
            slovak: ["Mikina"],
            engDefinition: "A sweatshirt with a hood.",
            svkDefinition: "Mikina s kapucňou.",
            engSentence: "He pulled the hood of his hoodie over his head.",
            svkSentence: "Tiahol kapucňu svojej mikiny cez hlavu."
        }
    },
    languages: {
        "English (lang)": {
            slovak: ["Angličtina"],
            engDefinition: "The language spoken in England and many other countries.",
            svkDefinition: "Jazyk hovorený v Anglicku a mnohých ďalších krajinách.",
            engSentence: "She speaks English fluently.",
            svkSentence: "Hovorí plynule anglicky."
        },
        "French (lang)": {
            slovak: ["Francúzština"],
            engDefinition: "The language spoken in France and parts of Belgium, Switzerland, and Canada.",
            svkDefinition: "Jazyk hovorený vo Francúzsku a častiach Belgicka, Švajčiarska a Kanady.",
            engSentence: "He is learning French.",
            svkSentence: "Učí sa francúzštinu."
        },
        "German (lang)": {
            slovak: ["Nemčina"],
            engDefinition: "The language spoken in Germany, Austria, and parts of Switzerland.",
            svkDefinition: "Jazyk hovorený v Nemecku, Rakúsku a častiach Švajčiarska.",
            engSentence: "German is a difficult language.",
            svkSentence: "Nemčina je ťažký jazyk."
        },
        "Spanish (lang)": {
            slovak: ["Španielčina"],
            engDefinition: "The language spoken in Spain and many countries in Latin America.",
            svkDefinition: "Jazyk hovorený v Španielsku a mnohých krajinách Latinskej Ameriky.",
            engSentence: "She loves Spanish music.",
            svkSentence: "Miluje španielsku hudbu."
        },
        "Italian (lang)": {
            slovak: ["Taliančina"],
            engDefinition: "The language spoken in Italy.",
            svkDefinition: "Jazyk hovorený v Taliansku.",
            engSentence: "He studied Italian in college.",
            svkSentence: "Študoval taliančinu na vysokej škole."
        },
        "Portuguese (lang)": {
            slovak: ["Portugalčina"],
            engDefinition: "The language spoken in Portugal and Brazil.",
            svkDefinition: "Jazyk hovorený v Portugalsku a Brazílii.",
            engSentence: "Portuguese is spoken in Brazil.",
            svkSentence: "Portugalčina sa hovorí v Brazílii."
        },
        "Greek (lang)": {
            slovak: ["Gréčtina"],
            engDefinition: "The language spoken in Greece.",
            svkDefinition: "Jazyk hovorený v Grécku.",
            engSentence: "They are learning Greek.",
            svkSentence: "Učia sa gréčtinu."
        },
        "Russian (lang)": {
            slovak: ["Ruština"],
            engDefinition: "The language spoken in Russia and many other countries of the former Soviet Union.",
            svkDefinition: "Jazyk hovorený v Rusku a mnohých ďalších krajinách bývalého Sovietskeho zväzu.",
            engSentence: "Russian is written in the Cyrillic script.",
            svkSentence: "Ruština je písaná cyrilikou."
        },
        "Arabic (lang)": {
            slovak: ["Arabčina"],
            engDefinition: "The language spoken in many countries in the Middle East and North Africa.",
            svkDefinition: "Jazyk hovorený v mnohých krajinách na Blízkom východe a v severnej Afrike.",
            engSentence: "Arabic is a Semitic language.",
            svkSentence: "Arabčina je semitský jazyk."
        },
        "Hindi (lang)": {
            slovak: ["Hindčina"],
            engDefinition: "The language spoken in parts of India and the official language of India.",
            svkDefinition: "Jazyk hovorený v častiach Indie a úradný jazyk Indie.",
            engSentence: "She watches Hindi movies.",
            svkSentence: "Sleduje hindské filmy."
        },
        "Chinese (lang)": {
            slovak: ["Čínština"],
            engDefinition: "The language spoken in China and many other Asian countries.",
            svkDefinition: "Jazyk hovorený v Číne a mnohých ďalších ázijských krajinách.",
            engSentence: "Chinese characters are very complex.",
            svkSentence: "Čínske znaky sú veľmi zložité."
        },
        "Japanese (lang)": {
            slovak: ["Japončina"],
            engDefinition: "The language spoken in Japan.",
            svkDefinition: "Jazyk hovorený v Japonsku.",
            engSentence: "He is interested in Japanese culture.",
            svkSentence: "Zaujíma sa o japonskú kultúru."
        }
    },
    bodyParts: {
        "Head (Body)": {
            slovak: ["Hlava"],
            engDefinition: "The upper part of the human body, containing the brain, eyes, ears, nose, and mouth.",
            svkDefinition: "Horná časť ľudského tela obsahujúca mozog, oči, uši, nos a ústa.",
            engSentence: "She has a headache.",
            svkSentence: "Má bolesť hlavy."
        },
        "Hair": {
            slovak: ["Vlasy"],
            engDefinition: "A threadlike outgrowth from the skin of humans and other mammals.",
            svkDefinition: "Nite podobné výrastky zo kože ľudí a iných cicavcov.",
            engSentence: "Her hair is brown.",
            svkSentence: "Má hnedé vlasy."
        },
        "Face": {
            slovak: ["Tvár"],
            engDefinition: "The front part of a person's head from the forehead to the chin.",
            svkDefinition: "Predná časť hlavy osoby od čela po bradu.",
            engSentence: "She has a beautiful face.",
            svkSentence: "Má krásnu tvár."
        },
        "Eye": {
            slovak: ["Oko"],
            engDefinition: "Each of a pair of globular organs in the head through which people and vertebrate animals see.",
            svkDefinition: "Každý z páru guľatých orgánov v hlave, cez ktoré ľudia a stavovce vidia.",
            engSentence: "She has blue eyes.",
            svkSentence: "Má modré oči."
        },
        "Ear": {
            slovak: ["Ucho"],
            engDefinition: "The organ of hearing and balance in humans and other vertebrates.",
            svkDefinition: "Orgán sluchu a rovnováhy u ľudí a iných stavovcov.",
            engSentence: "He whispered in her ear.",
            svkSentence: "Šepkal jej do ucha."
        },
        "Nose": {
            slovak: ["Nos"],
            engDefinition: "The part projecting above the mouth on the face of a person or animal, containing the nostrils and used for breathing and smelling.",
            svkDefinition: "Časť vyčnievajúca nad ústami na tvári osoby alebo zvieraťa, obsahujúca nozdry a slúžiaca na dýchanie a čuchanie.",
            engSentence: "He has a big nose.",
            svkSentence: "Má veľký nos."
        },
        "Mouth": {
            slovak: ["Ústa"],
            engDefinition: "The opening in the face of a person or animal, consisting of the lips and the space between them, or the space behind containing the teeth and the tongue.",
            svkDefinition: "Otvor na tvári osoby alebo zvieraťa pozostávajúci z pier a priestoru medzi nimi, alebo priestoru vzadu obsahujúceho zuby a jazyk.",
            engSentence: "She has a beautiful smile.",
            svkSentence: "Má krásny úsmev."
        },
        "Lip": {
            slovak: ["Pery"],
            engDefinition: "Either of the two fleshy parts which form the upper and lower edges of the opening of the mouth.",
            svkDefinition: "Jeden z dvoch mäsistých častí, ktoré tvoria horný a dolný okraj otvoru úst.",
            engSentence: "She has red lips.",
            svkSentence: "Má červené pery."
        },
        "Tooth": {
            slovak: ["Zub"],
            engDefinition: "Each of a set of hard, bony enamel-coated structures in the jaws of most vertebrates, used for biting and chewing.",
            svkDefinition: "Každý z radu tvrdých, kostných štruktúr s enamelom v čeľustiach väčšiny stavovcov, používaný na hrýzanie a žuvanie.",
            engSentence: "He has a toothache.",
            svkSentence: "Má bolesť zubov."
        },
        "Tongue": {
            slovak: ["Jazyk"],
            engDefinition: "The fleshy muscular organ in the mouth of a mammal, used for tasting, licking, swallowing, and (in humans) articulating speech.",
            svkDefinition: "Mäsistý svalový orgán v ústach cicavca, používaný na ochutnávanie, lízanie, prehĺtanie a (u ľudí) artikuláciu reči.",
            engSentence: "Stick out your tongue.",
            svkSentence: "Vysuni jazyk."
        },
        "Neck": {
            slovak: ["Krk"],
            engDefinition: "The part of a person's or animal's body connecting the head to the rest of the body.",
            svkDefinition: "Časť tela osoby alebo zvieraťa, ktorá spojuje hlavu s ostatným telom.",
            engSentence: "He wore a scarf around his neck.",
            svkSentence: "Mal šatku okolo krku."
        },
        "Shoulder": {
            slovak: ["Rameno"],
            engDefinition: "The upper joint of the human arm and the part of the body between this and the neck.",
            svkDefinition: "Horný kĺb ľudského ramena a časť tela medzi ním a krkom.",
            engSentence: "He dislocated his shoulder.",
            svkSentence: "Vymkol si rameno."
        },
        "Hand": {
            slovak: ["Ruka"],
            engDefinition: "The end part of a person's arm beyond the wrist, including the palm, fingers, and thumb.",
            svkDefinition: "Koncová časť ruky osoby za zápästím, vrátane dlaňa, prstov a palca.",
            engSentence: "He shook her hand.",
            svkSentence: "Podal jej ruku."
        },
        "Finger": {
            slovak: ["Prst"],
            engDefinition: "Each of the four slender jointed parts attached to either hand (or five, if the thumb is included).",
            svkDefinition: "Každý z štyroch štíhlych spojovaných častí pripojených k jednej ruke (alebo päť, ak je zahrnutý palec).",
            engSentence: "He pointed his finger at the map.",
            svkSentence: "Ukázal prstom na mapu."
        },
        "Thumb": {
            slovak: ["Palec"],
            engDefinition: "The short, thick first digit of the human hand, set lower and apart from the other four and opposable to them.",
            svkDefinition: "Krátky, hrubý prvý prst ľudskej ruky, umiestnený nižšie a od seba odlišne od ostatných štyroch a schopný sa im protioperať.",
            engSentence: "He sucked his thumb.",
            svkSentence: "Saľ sáčok."
        },
        "Chest (Body)": {
            slovak: ["Hrudník"],
            engDefinition: "The front surface of a person's or animal's body between the neck and the abdomen.",
            svkDefinition: "Predná plocha tela osoby alebo zvieraťa medzi krkom a bruchom.",
            engSentence: "He has a broad chest.",
            svkSentence: "Má široký hrudník."
        },
        "Back (Body)": {
            slovak: ["Chrbát"],
            engDefinition: "The rear surface of the human body from the shoulders to the hips.",
            svkDefinition: "Zadná plocha ľudského tela od ramien po boky.",
            engSentence: "She has a tattoo on her back.",
            svkSentence: "Má tetovanie na chrbte."
        },
        "Stomach": {
            slovak: ["Brucho"],
            engDefinition: "The internal organ in which the major part of the digestion of food occurs.",
            svkDefinition: "Vnútorný orgán, v ktorom prebieha väčšina trávenia potravy.",
            engSentence: "Her stomach growled.",
            svkSentence: "Hrbole jej v bruchu."
        },
        "Waist": {
            slovak: ["Pás"],
            engDefinition: "The part of the human body below the ribs and above the hips.",
            svkDefinition: "Časť ľudského tela pod rebra a nad bedrámi.",
            engSentence: "She has a slim waist.",
            svkSentence: "Má úzky pás."
        },
        "Hip": {
            slovak: ["Bedro"],
            engDefinition: "The joint between the upper end of the femur and the side of the pelvis.",
            svkDefinition: "Kĺb medzi horným koncom stehennej kosti a bokom panvy.",
            engSentence: "She has wide hips.",
            svkSentence: "Má široké boky."
        },
        "Leg": {
            slovak: ["Noha"],
            engDefinition: "Each of the limbs on which a person or animal walks and stands.",
            svkDefinition: "Každý z končatín, na ktorých človek alebo zviera chodí a stojí.",
            engSentence: "He broke his leg.",
            svkSentence: "Zlomil si nohu."
        },
        "Knee": {
            slovak: ["Koleno"],
            engDefinition: "The joint between the thigh and the lower leg in humans.",
            svkDefinition: "Kĺb medzi stehnom a dolnou nohou u ľudí.",
            engSentence: "She scraped her knee.",
            svkSentence: "Poškriabala si koleno."
        },
        "Foot": {
            slovak: ["Noha", "Chodidlo"],
            engDefinition: "The lower extremity of the leg below the ankle, on which a person stands or walks.",
            svkDefinition: "Dolná časť nohy pod členkom, na ktorej človek stojí alebo chodí.",
            engSentence: "He hurt his foot.",
            svkSentence: "Zranil si nohu."
        },
        "Ankle": {
            slovak: ["Členok"],
            engDefinition: "The joint connecting the foot with the leg.",
            svkDefinition: "Kĺb spojujúci nohu s nohou.",
            engSentence: "She twisted her ankle.",
            svkSentence: "Natiahla si členok."
        },
        "Toe": {
            slovak: ["Prst na nohe"],
            engDefinition: "Any of the five digits at the end of the human foot.",
            svkDefinition: "Akýkoľvek z piatich prstov na konci ľudskej nohy.",
            engSentence: "He stubbed his toe.",
            svkSentence: "Narazil si prst na nohe."
        }
    },
    characteristics: {
        "Good": {
            slovak: ["Dobrý"],
            engDefinition: "Having desirable qualities; morally excellent; virtuous.",
            svkDefinition: "Majúci žiaduce vlastnosti; morálne vynikajúci; cnostný.",
            engSentence: "He is a good person.",
            svkSentence: "Je to dobrý človek."
        },
        "Bad": {
            slovak: ["Zlý"],
            engDefinition: "Having undesirable qualities; morally reprehensible; wicked.",
            svkDefinition: "Majúci nežiaduce vlastnosti; morálne zavrhniteľný; zlý.",
            engSentence: "He has a bad reputation.",
            svkSentence: "Má zlú povesť."
        },
        "Big": {
            slovak: ["Veľký"],
            engDefinition: "Of considerable size, extent, or intensity.",
            svkDefinition: "Značnej veľkosti, rozsahu alebo intenzity.",
            engSentence: "That is a big house.",
            svkSentence: "To je veľký dom."
        },
        "Small": {
            slovak: ["Malý"],
            engDefinition: "Of limited size; not big or large.",
            svkDefinition: "Obmedzených rozmerov; nie veľký ani veľký.",
            engSentence: "She has a small dog.",
            svkSentence: "Má malého psa."
        },
        "Tall": {
            slovak: ["Vysoký"],
            engDefinition: "Of great or more than average height.",
            svkDefinition: "Veľký alebo vyšší ako priemer.",
            engSentence: "He is a tall basketball player.",
            svkSentence: "Je to vysoký basketbalista."
        },
        "Short (height)": {
            slovak: ["Nízky"],
            engDefinition: "Of less than average height; not tall.",
            svkDefinition: "Nižší ako priemer; nie vysoký.",
            engSentence: "She is shorter than her sister.",
            svkSentence: "Je nižšia ako jej sestra."
        },
        "Young": {
            slovak: ["Mladý"],
            engDefinition: "Having lived or existed for only a short time; not old.",
            svkDefinition: "Žijúci alebo existujúci len krátku dobu; nie starý.",
            engSentence: "He is too young to drive.",
            svkSentence: "Je príliš mladý na to, aby šoféroval."
        },
        "Old": {
            slovak: ["Starý"],
            engDefinition: "Having lived or existed for a long time; not young.",
            svkDefinition: "Žijúci alebo existujúci dlhú dobu; nie mladý.",
            engSentence: "She is 80 years old.",
            svkSentence: "Má 80 rokov."
        },
        "New": {
            slovak: ["Nový"],
            engDefinition: "Recently made, invented, or discovered.",
            svkDefinition: "Nedávno vyrobený, vynájdený alebo objavený.",
            engSentence: "They bought a new car.",
            svkSentence: "Kúpili si nové auto."
        },
        "Fat": {
            slovak: ["Tučný"],
            engDefinition: "Having an excess of flesh; obese.",
            svkDefinition: "Majúci nadbytok mäsa; obézny.",
            engSentence: "He is getting fat.",
            svkSentence: "Tlčie sa."
        },
        "Thin": {
            slovak: ["Chudý"],
            engDefinition: "Having a small distance between surfaces.",
            svkDefinition: "Majúci malú vzdialenosť medzi povrchmi.",
            engSentence: "She is very thin.",
            svkSentence: "Je veľmi chudá."
        },
        "Nice (pretty)": {
            slovak: ["Pekný"],
            engDefinition: "Pleasing and attractive to the eye.",
            svkDefinition: "Príjemný a príťažlivý pre oko.",
            engSentence: "She has a nice dress.",
            svkSentence: "Má pekné šaty."
        },
        "Ugly": {
            slovak: ["Škaredý"],
            engDefinition: "Unpleasant or repulsive in appearance.",
            svkDefinition: "Neprijemný alebo odpudzujúci na pohľad.",
            engSentence: "That is an ugly painting.",
            svkSentence: "To je škaredý obraz."
        },
        "Attractive": {
            slovak: ["Atraktívny"],
            engDefinition: "Appealing to look at; sexually alluring.",
            svkDefinition: "Pútavý na pohľad; sexuálne príťažlivý.",
            engSentence: "She finds him very attractive.",
            svkSentence: "Ona ho považuje za veľmi atraktívneho."
        },
        "Wide": {
            slovak: ["Široký"],
            engDefinition: "Of great or more than average width.",
            svkDefinition: "Veľký alebo väčší ako priemer.",
            engSentence: "The river is very wide.",
            svkSentence: "Rieka je veľmi široká."
        },
        "Narrow": {
            slovak: ["Úzky"],
            engDefinition: "Of small width in relation to length.",
            svkDefinition: "Malá šírka vzhľadom na dĺžku.",
            engSentence: "The road is too narrow.",
            svkSentence: "Cesta je príliš úzka."
        },
        "Long": {
            slovak: ["Dlhý"],
            engDefinition: "Of a great distance from end to end.",
            svkDefinition: "Veľká vzdialenosť od konca k koncu.",
            engSentence: "The river is long.",
            svkSentence: "Rieka je dlhá."
        },
        "Short (length)": {
            slovak: ["Krátky"],
            engDefinition: "Of limited extent from end to end.",
            svkDefinition: "Obmedzený rozsah od konca k koncu.",
            engSentence: "The movie is short.",
            svkSentence: "Film je krátky."
        },
        "Nice (personality)": {
            slovak: ["Milý"],
            engDefinition: "Pleasant, agreeable, or satisfactory in nature or character.",
            svkDefinition: "Príjemný, príjemný alebo uspokojivý vo svojej podstate alebo charaktere.",
            engSentence: "He is a very nice person.",
            svkSentence: "Je to veľmi milý človek."
        },
        "Pleasant": {
            slovak: ["Príjemný"],
            engDefinition: "Giving a sense of happy satisfaction or enjoyment.",
            svkDefinition: "Dávajúci pocit šťastného uspokojenia alebo potešenia.",
            engSentence: "It was a pleasant experience.",
            svkSentence: "Bola to príjemná skúsenosť."
        },
        "Unpleasant": {
            slovak: ["Nepríjemný"],
            engDefinition: "Causing discomfort, unhappiness, or revulsion.",
            svkDefinition: "Spôsobujúci nepohodlie, nešťastie alebo odpor.",
            engSentence: "The smell was very unpleasant.",
            svkSentence: "Vôňa bola veľmi nepríjemná."
        },
        "Smart": {
            slovak: ["Múdry"],
            engDefinition: "Intelligent, bright, or clever in practical matters.",
            svkDefinition: "Inteligentný, bystrý alebo múdry v praktických záležitostiach.",
            engSentence: "She is a very smart student.",
            svkSentence: "Je to veľmi múdra študentka."
        },
        "Stupid": {
            slovak: ["Hlúpy"],
            engDefinition: "Lacking intelligence or common sense.",
            svkDefinition: "Chýbajúci inteligenciu alebo zdravý rozum.",
            engSentence: "That was a stupid mistake.",
            svkSentence: "To bola hlúpa chyba."
        },
        "Intelligent": {
            slovak: ["Inteligentný"],
            engDefinition: "Having good understanding or a high mental capacity.",
            svkDefinition: "Majúci dobré porozumenie alebo vysokú mentálnu kapacitu.",
            engSentence: "He is an intelligent person.",
            svkSentence: "Je to inteligentný človek."
        },
        "Strong": {
            slovak: ["Silný"],
            engDefinition: "Having the power to move heavy weights or perform other physically demanding tasks.",
            svkDefinition: "Majúci silu na pohyb ťažkých váh alebo na vykonávanie iných fyzicky náročných úloh.",
            engSentence: "He is very strong.",
            svkSentence: "Je veľmi silný."
        },
        "Weak": {
            slovak: ["Slabý"],
            engDefinition: "Lacking the power to perform physically demanding tasks.",
            svkDefinition: "Chýba sila na vykonávanie fyzicky náročných úloh.",
            engSentence: "She felt weak after the illness.",
            svkSentence: "Po chorobe sa cítila slabá."
        },
        "Hard-working": {
            slovak: ["Usilovný"],
            engDefinition: "Characterized by diligent effort; industrious.",
            svkDefinition: "Charakterizovaný usilovným úsilím; pracovitý.",
            engSentence: "He is a hard-working student.",
            svkSentence: "Je to usilovný študent."
        },
        "Lazy": {
            slovak: ["Lenivý"],
            engDefinition: "Unwilling to work or use energy; inactive.",
            svkDefinition: "Neochotný pracovať alebo používať energiu; neaktívny.",
            engSentence: "She is too lazy to clean her room.",
            svkSentence: "Je príliš lenivá na to, aby si upratala izbu."
        },
        "Funny (witty)": {
            slovak: ["Vtipný"],
            engDefinition: "Amusing or entertaining in a clever or witty way.",
            svkDefinition: "Zábavný alebo zábavný spôsobom chytrý alebo vtipný.",
            engSentence: "He made a witty remark.",
            svkSentence: "Povedal chytrú poznámku."
        },
        "Funny (ha-ha)": {
            slovak: ["Smiešny"],
            engDefinition: "Causing laughter or amusement; humorous.",
            svkDefinition: "Vyvolávanie smiechu alebo zábavy; vtipný.",
            engSentence: "The movie was very funny.",
            svkSentence: "Film bol veľmi vtipný."
        },
        "Entertaining": {
            slovak: ["Zábavný"],
            engDefinition: "Providing amusement or enjoyment.",
            svkDefinition: "Poskytovanie zábavy alebo potešenia.",
            engSentence: "The party was entertaining.",
            svkSentence: "Večierok bol zábavný."
        },
        "Boring": {
            slovak: ["Nudný"],
            engDefinition: "Not interesting or exciting; dull.",
            svkDefinition: "Nie zaujímavý alebo vzrušujúci; nudný.",
            engSentence: "The lecture was boring.",
            svkSentence: "Prednáška bola nudná."
        },
        "Clean": {
            slovak: ["Čistý"],
            engDefinition: "Free from dirt, marks, or unwanted matter.",
            svkDefinition: "Čisté od špiny, škvŕn alebo nežiaducej hmoty.",
            engSentence: "The room is clean.",
            svkSentence: "Izba je čistá."
        },
        "Dirty": {
            slovak: ["Špinavý"],
            engDefinition: "Containing or characterized by dirt, mud, or unwanted matter.",
            svkDefinition: "Obsahujúci alebo charakterizovaný špinou, blatom alebo nežiaducou hmotou.",
            engSentence: "The windows are dirty.",
            svkSentence: "Okná sú špinavé."
        },
        "Humble": {
            slovak: ["Skromný"],
            engDefinition: "Having or showing a modest or low estimate of one's own importance.",
            svkDefinition: "Majúci alebo preukazujúci skromný alebo nízky odhad vlastnej dôležitosti.",
            engSentence: "She is very humble despite her success.",
            svkSentence: "Je veľmi skromná napriek svojmu úspechu."
        },
        "Arrogant": {
            slovak: ["Arogantný"],
            engDefinition: "Having or revealing an exaggerated sense of one's own importance or abilities.",
            svkDefinition: "Majúci alebo odhaľujúci prehnaný pocit vlastnej dôležitosti alebo schopností.",
            engSentence: "He is too arrogant to admit his mistakes.",
            svkSentence: "Je príliš arogantný na to, aby priznal svoje chyby."
        },
        "Happy": {
            slovak: ["Šťastní", "Veselý"],
            engDefinition: "Feeling or showing pleasure or contentment.",
            svkDefinition: "Pociťujúci alebo preukazujúci potešenie alebo spokojnosť.",
            engSentence: "They are happy together.",
            svkSentence: "Sú spolu šťastní."
        },
        "Cheerful": {
            slovak: ["Veselý"],
            engDefinition: "Feeling or showing happiness.",
            svkDefinition: "Cítiť alebo prejavovať šťastie.",
            engSentence: "She is always cheerful in the morning.",
            svkSentence: "Ráno je vždy veselá."
        },
        "Lucky": {
            slovak: ["Šťastný"],
            engDefinition: "Having, bringing, or resulting from good luck.",
            svkDefinition: "Majúci, prinášajúci alebo výsledok šťastia.",
            engSentence: "He feels lucky to have won the lottery.",
            svkSentence: "Cíti sa šťastný, že vyhral v lotérii."
        },
        "Sad": {
            slovak: ["Smutný"],
            engDefinition: "Feeling or showing sorrow; unhappy.",
            svkDefinition: "Pociťujúci alebo preukazujúci žiaľ; nešťastný.",
            engSentence: "She felt sad after hearing the news.",
            svkSentence: "Cítila sa smutná po vypočutí správy."
        }
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
                if (Array.isArray(categories[category][key])) {
                    vocabElement.slovak = categories[category][key];
                    vocabElement.engDefinition = '';
                    vocabElement.svkDefinition = '';
                    vocabElement.engSentence = '';
                    vocabElement.svkSentence = '';
                } else {
                    vocabElement.slovak = categories[category][key]["slovak"];
                    vocabElement.engDefinition = categories[category][key]["engDefinition"];
                    vocabElement.svkDefinition = categories[category][key]["svkDefinition"];
                    vocabElement.engSentence = categories[category][key]["engSentence"];
                    vocabElement.svkSentence = categories[category][key]["svkSentence"];
                }

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

        // Ensure all existing documents have the new fields
        await Vocabulary.updateMany(
            {
                $or: [
                    { engDefinition: { $exists: false } },
                    { svkDefinition: { $exists: false } },
                    { engSentence: { $exists: false } },
                    { svkSentence: { $exists: false } }
                ]
            },
            {
                $set: {
                    engDefinition: '',
                    svkDefinition: '',
                    engSentence: '',
                    svkSentence: ''
                }
            }
        );

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
            // Check if slovak words or definitions are different
            const isDifferent = existingEntry.slovak.length !== newEntry.slovak.length ||
                                existingEntry.slovak.some((word, index) => word !== newEntry.slovak[index]) ||
                                existingEntry.engDefinition !== newEntry.engDefinition ||
                                existingEntry.svkDefinition !== newEntry.svkDefinition ||
                                existingEntry.engSentence !== newEntry.engSentence ||
                                existingEntry.svkSentence !== newEntry.svkSentence;

            if (isDifferent) {
                changes.push({
                    updateOne: {
                        filter: { _id: existingEntry._id },
                        update: { $set: {
                            slovak: newEntry.slovak,
                            engDefinition: newEntry.engDefinition,
                            svkDefinition: newEntry.svkDefinition,
                            engSentence: newEntry.engSentence,
                            svkSentence: newEntry.svkSentence
                        } }
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

populateVocab();
