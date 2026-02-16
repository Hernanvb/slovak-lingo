module.exports = [
    {
        slug: "nouns",
        title: "Nouns (Substantíva)",
        icon: "fa-font",
        explanation: "Every Slovak noun has a grammatical gender: Masculine (M), Feminine (F), or Neuter (N). Gender affects the noun's endings, how adjectives agree with it, and which case endings to use. The good news: you can usually guess the gender from the ending of the noun.",
        sections: [
            {
                heading: "How to Identify Gender",
                note: "Look at the last letter of the noun in its basic (dictionary) form. This is the most reliable way to determine gender at the A1 level.",
                tables: [
                    {
                        headers: ["Gender", "Typical Ending", "Examples"],
                        rows: [
                            ["Masculine (M)", "consonant (no ending)", "muž (man), dom (house), vlak (train), počítač (computer)"],
                            ["Masculine (M)", "-a (some people)", "kolega (colleague), turista (tourist)"],
                            ["Feminine (F)", "-a", "žena (woman), škola (school), voda (water), kniha (book)"],
                            ["Feminine (F)", "soft consonant", "loď (ship), noc (night), miestnosť (room)"],
                            ["Neuter (N)", "-o", "mesto (city), auto (car), mlieko (milk), okno (window)"],
                            ["Neuter (N)", "-e / -ie", "more (sea), srdce (heart), poschodie (floor)"],
                            ["Neuter (N)", "-a (child words)", "dievča (girl), mača (kitten)"]
                        ]
                    }
                ]
            },
            {
                heading: "Masculine: Animate vs. Inanimate",
                note: "Masculine nouns are split into two groups: animate (living beings — people and animals) and inanimate (things and abstract concepts). This matters because they take different endings in some cases.",
                tables: [
                    {
                        headers: ["Type", "Examples", "Why It Matters"],
                        rows: [
                            ["Animate (living)", "muž, otec (father), pes (dog), kolega", "Akuzatív singular changes: Vidím muž-a (I see the man)"],
                            ["Inanimate (non-living)", "dom, vlak, plán, počítač", "Akuzatív singular stays the same: Vidím dom (I see the house)"]
                        ]
                    }
                ]
            },
            {
                heading: "Hard vs. Soft Consonants",
                note: "Slovak consonants are divided into two groups. This affects how nouns (and adjectives) change their endings. You don't need to memorize this perfectly — with practice, it will feel natural.",
                tables: [
                    {
                        headers: ["Type", "Consonants"],
                        rows: [
                            ["Hard (tvrdé - TK)", "d, t, n, l, h, ch, k, g, b, m, p, r, s, v, z, f"],
                            ["Soft (mäkké - MK)", "ď, ť, ň, ľ, c, č, ž, dz, dž, š, j"]
                        ]
                    }
                ]
            },
            {
                heading: "Quick Gender Test",
                note: "Try putting 'ten' (M), 'tá' (F), or 'to' (N) before the noun — whichever sounds right to a native speaker reveals the gender. Examples: ten muž ✓, tá žena ✓, to mesto ✓."
            }
        ]
    },
    {
        slug: "noun-cases",
        title: "Noun Cases (Pády)",
        icon: "fa-exchange-alt",
        explanation: "In English, word order tells you who does what ('The dog chases the cat' vs. 'The cat chases the dog'). In Slovak, the endings of nouns change to show their role in a sentence — these are called cases (pády). At the A1 level, focus on four cases: Nominatív (subject), Akuzatív (direct object), Lokál (location/topic), and Inštrumentál (companion/tool).",
        sections: [
            {
                heading: "Overview: The Four A1 Cases",
                tables: [
                    {
                        headers: ["Case", "Question", "Usage", "Example"],
                        rows: [
                            ["Nominatív (N)", "Kto? Čo? (Who? What?)", "Subject of the sentence", "Muž pracuje. (The man works.)"],
                            ["Akuzatív (A)", "Koho? Čo? (Whom? What?)", "Direct object — the thing being acted on", "Vidím muža. (I see the man.)"],
                            ["Lokál (L)", "O kom? O čom? (About whom/what?)", "Location or topic (always after a preposition)", "Hovorím o mužovi. (I talk about the man.)"],
                            ["Inštrumentál (I)", "S kým? S čím? (With whom/what?)", "Companion or tool", "Idem s mužom. (I go with the man.)"]
                        ]
                    }
                ]
            },
            {
                heading: "Nominatív (Nominative) — The Basic Form",
                note: "This is the dictionary form. Use it for the subject of the sentence — the person or thing doing the action.",
                tables: [
                    {
                        subheading: "Singular → Plural",
                        headers: ["Gender", "Singular", "Plural", "Example Sentence"],
                        rows: [
                            ["M (animate)", "muž, kolega", "muži, kolegovia", "Muži pracujú. (The men work.)"],
                            ["M (inanimate)", "dom, počítač", "domy, počítače", "Domy sú veľké. (The houses are big.)"],
                            ["F", "žena, loď", "ženy, lode", "Ženy hovoria. (The women speak.)"],
                            ["N", "mesto, more", "mestá, moria", "Mestá sú pekné. (The cities are nice.)"]
                        ]
                    }
                ]
            },
            {
                heading: "Akuzatív (Accusative) — Direct Object",
                note: "Use after verbs like vidieť (see), mať (have), chcieť (want), poznať (know someone). Key rule: Masculine animate nouns change their ending, but inanimate, feminine, and neuter nouns often stay the same or have predictable changes.",
                tables: [
                    {
                        subheading: "Singular Endings",
                        headers: ["Gender", "Nominatív →", "Akuzatív", "Example"],
                        rows: [
                            ["M (animate)", "muž", "muž-a", "Vidím muža. (I see the man.)"],
                            ["M (animate)", "kolega", "koleg-u", "Poznám kolegu. (I know the colleague.)"],
                            ["M (inanimate)", "dom", "dom (no change)", "Vidím dom. (I see the house.)"],
                            ["F (-a ending)", "žena", "žen-u", "Vidím ženu. (I see the woman.)"],
                            ["F (consonant)", "loď", "loď (no change)", "Vidím loď. (I see the ship.)"],
                            ["N", "mesto", "mesto (no change)", "Vidím mesto. (I see the city.)"]
                        ]
                    },
                    {
                        subheading: "Plural Endings",
                        headers: ["Gender", "Nominatív →", "Akuzatív", "Example"],
                        rows: [
                            ["M (animate)", "muži", "muž-ov", "Vidím mužov. (I see the men.)"],
                            ["M (inanimate)", "domy", "domy (= Nom.)", "Vidím domy. (I see the houses.)"],
                            ["F", "ženy", "ženy (= Nom.)", "Vidím ženy. (I see the women.)"],
                            ["N", "mestá", "mestá (= Nom.)", "Vidím mestá. (I see the cities.)"]
                        ]
                    }
                ]
            },
            {
                heading: "Lokál (Locative) — About / At / In",
                note: "Always used with a preposition: o (about), v/vo (in), na (on/at), po (after/around), pri (near/at). You never see Lokál without a preposition.",
                tables: [
                    {
                        subheading: "Singular Endings",
                        headers: ["Gender", "Nominatív →", "Lokál", "Example"],
                        rows: [
                            ["M (animate)", "muž", "o muž-ovi", "Hovorím o mužovi. (I talk about the man.)"],
                            ["M (inanimate)", "dom", "v dom-e", "Bývam v dome. (I live in the house.)"],
                            ["M (-k, -g, -ch, -h)", "vlak", "vo vlak-u", "Sedím vo vlaku. (I sit in the train.)"],
                            ["F (-a ending)", "žena", "o žen-e", "Hovorím o žene. (I talk about the woman.)"],
                            ["F (soft stem)", "stanica", "na stanic-i", "Som na stanici. (I am at the station.)"],
                            ["N", "mesto", "v mest-e", "Bývam v meste. (I live in the city.)"]
                        ]
                    },
                    {
                        subheading: "Plural Endings",
                        headers: ["Gender", "Lokál Plural", "Example"],
                        rows: [
                            ["M", "-och (mužoch, domoch)", "v domoch (in the houses)"],
                            ["F", "-ách / -iach (ženách, staniciach)", "v staniciach (at the stations)"],
                            ["N", "-ách / -iach (mestách, moriach)", "v mestách (in the cities)"]
                        ]
                    }
                ]
            },
            {
                heading: "Inštrumentál (Instrumental) — With / By",
                note: "Used with prepositions: s/so (with), nad (above), pod (under), pred (in front of), za (behind), medzi (between). Also used without a preposition to express the tool or means: Píšem perom. (I write with a pen.)",
                tables: [
                    {
                        subheading: "Singular Endings",
                        headers: ["Gender", "Nominatív →", "Inštrumentál", "Example"],
                        rows: [
                            ["M", "muž / dom", "s muž-om / s dom-om", "Idem s mužom. (I go with the man.)"],
                            ["F (-a ending)", "žena", "so žen-ou", "Idem so ženou. (I go with the woman.)"],
                            ["F (consonant)", "loď", "s loď-ou", "Cestujem loďou. (I travel by ship.)"],
                            ["N", "mesto / auto", "s mest-om / s aut-om", "Cestujem autom. (I travel by car.)"]
                        ]
                    },
                    {
                        subheading: "Plural Endings",
                        headers: ["Gender", "Inštrumentál Plural", "Example"],
                        rows: [
                            ["M", "-mi / -ami (mužmi, domami)", "s mužmi (with the men)"],
                            ["F", "-ami (ženami, loďami)", "so ženami (with the women)"],
                            ["N", "-ami (mestami, autami)", "s autami (with the cars)"]
                        ]
                    }
                ]
            },
            {
                heading: "Quick Reference: Adjective Endings by Case",
                note: "Adjectives change endings to match the case. Here is the pattern using 'pekný' (nice) as an example.",
                tables: [
                    {
                        headers: ["Case", "Masculine", "Feminine", "Neuter"],
                        rows: [
                            ["Nominatív", "pekn-ý", "pekn-á", "pekn-é"],
                            ["Akuzatív (anim./inanim.)", "pekn-ého / pekn-ý", "pekn-ú", "pekn-é"],
                            ["Lokál", "pekn-om", "pekn-ej", "pekn-om"],
                            ["Inštrumentál", "pekn-ým", "pekn-ou", "pekn-ým"]
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: "pronouns",
        title: "Pronouns (Zámená)",
        icon: "fa-user",
        explanation: "Just like nouns, Slovak pronouns change form depending on the grammatical case. At the A1 level, the key things to learn are: (1) personal pronouns in each case, (2) when to use short vs. long forms, and (3) possessive pronouns that agree with the gender of the thing owned. A simple rule: after a preposition, always use the long form of the pronoun.",
        sections: [
            {
                heading: "Personal Pronouns — Basic Forms",
                note: "These are the Nominatív (subject) forms. You use these when the pronoun is the subject of the sentence.",
                tables: [
                    {
                        headers: ["Person", "Singular", "Plural"],
                        rows: [
                            ["1st person", "ja (I)", "my (we)"],
                            ["2nd person", "ty (you, informal)", "vy (you, plural or formal)"],
                            ["3rd person", "on (he), ona (she), ono (it)", "oni (they, M animate), ony (they, other)"]
                        ]
                    }
                ]
            },
            {
                heading: "Akuzatív — Who Do You See?",
                note: "Short forms are used in normal speech. Long forms (in bold) are used after prepositions (pre, na, za, o...) and for emphasis. Example: Vidím ťa. (I see you.) vs. Pre teba to robím. (I do it for you.)",
                tables: [
                    {
                        headers: ["Person", "Short Form", "Long Form (after prepositions)"],
                        rows: [
                            ["ja", "ma", "mňa — Pre mňa? (For me?)"],
                            ["ty", "ťa", "teba — Pre teba. (For you.)"],
                            ["on", "ho", "neho — Pre neho. (For him.)"],
                            ["ona", "ju", "ňu — Pre ňu. (For her.)"],
                            ["my", "nás", "nás (same)"],
                            ["vy", "vás", "vás (same)"],
                            ["oni/ony", "ich", "nich — Pre nich. (For them.)"]
                        ]
                    }
                ]
            },
            {
                heading: "Lokál — About Whom?",
                note: "Always used with a preposition (o, po, pri, v, na). There are no short forms in Lokál — always use the full form.",
                tables: [
                    {
                        headers: ["Person", "Lokál Form", "Example"],
                        rows: [
                            ["ja", "mne", "O mne hovoria. (They talk about me.)"],
                            ["ty", "tebe", "O tebe viem. (I know about you.)"],
                            ["on / ono", "ňom", "O ňom čítam. (I read about him.)"],
                            ["ona", "nej", "O nej píšem. (I write about her.)"],
                            ["my", "nás", "O nás hovoria. (They talk about us.)"],
                            ["vy", "vás", "O vás viem. (I know about you.)"],
                            ["oni / ony", "nich", "O nich čítam. (I read about them.)"]
                        ]
                    }
                ]
            },
            {
                heading: "Inštrumentál — With Whom?",
                note: "Used with prepositions: s/so (with), nad (above), pod (under), pred (in front of), za (behind). Note the special forms: so mnou (not 's mnou').",
                tables: [
                    {
                        headers: ["Person", "Inštrumentál", "Example"],
                        rows: [
                            ["ja", "mnou", "So mnou ide. (He/She goes with me.)"],
                            ["ty", "tebou", "S tebou hovorím. (I speak with you.)"],
                            ["on / ono", "ním", "S ním pracujem. (I work with him.)"],
                            ["ona", "ňou", "S ňou cestujem. (I travel with her.)"],
                            ["my", "nami", "S nami býva. (He/She lives with us.)"],
                            ["vy", "vami", "S vami súhlasím. (I agree with you.)"],
                            ["oni / ony", "nimi", "S nimi sa stretnem. (I'll meet with them.)"]
                        ]
                    }
                ]
            },
            {
                heading: "Possessive Pronouns — Whose Is It?",
                note: "The possessive pronoun agrees with the gender of the noun it describes (the thing owned), NOT the owner. Example: His room = jeho izba (izba is F, but we use 'jeho' because the owner is 'on'). My room = moja izba (F), My car = moje auto (N), My friend = môj kamarát (M).",
                tables: [
                    {
                        headers: ["Owner", "čí? (M noun)", "čia? (F noun)", "čie? (N noun)", "Example"],
                        rows: [
                            ["ja (I)", "môj", "moja", "moje", "môj dom, moja izba, moje auto"],
                            ["ty (you)", "tvoj", "tvoja", "tvoje", "tvoj dom, tvoja izba, tvoje auto"],
                            ["on (he)", "jeho", "jeho", "jeho", "jeho dom, jeho izba, jeho auto"],
                            ["ona (she)", "jej", "jej", "jej", "jej dom, jej izba, jej auto"],
                            ["my (we)", "náš", "naša", "naše", "náš dom, naša izba, naše auto"],
                            ["vy (you pl.)", "váš", "vaša", "vaše", "váš dom, vaša izba, vaše auto"],
                            ["oni (they)", "ich", "ich", "ich", "ich dom, ich izba, ich auto"]
                        ]
                    }
                ]
            },
            {
                heading: "Possessive Adjectives from Names",
                note: "When saying something belongs to a specific person, Slovak creates a possessive adjective from their name. Male names add -ov, female names ending in -a add -in.",
                tables: [
                    {
                        headers: ["Name", "M noun (čí?)", "F noun (čia?)", "N noun (čie?)"],
                        rows: [
                            ["Peter", "Petrov dom", "Petrova izba", "Petrovo auto"],
                            ["Zuzana", "Zuzanin dom", "Zuzanina izba", "Zuzanino auto"]
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: "verbs-present",
        title: "Verbs — Present Tense (Prítomný čas)",
        icon: "fa-running",
        explanation: "Slovak verbs change their endings based on the subject (who is doing the action). This is called conjugation. The infinitive (dictionary form) ends in -ť. To conjugate, you remove the ending and add new endings based on the conjugation pattern. There are several patterns — the most common are shown below. Negation is simple: add 'ne-' before the conjugated verb.",
        sections: [
            {
                heading: "How Conjugation Works",
                note: "1. Start with the infinitive: hovoriť (to speak). 2. Find the stem: hovori-. 3. Add the ending for each person: hovorí-m, hovorí-š, hovorí... The endings follow predictable patterns. Learn the pattern, and you can conjugate hundreds of verbs."
            },
            {
                heading: "Pattern 1: -ÁM type (volať → volám)",
                note: "Verbs with infinitive in -ať where the stem vowel is long. Endings: -ám, -áš, -á, -áme, -áte, -ajú. Common verbs: volať (call), čítať (read), hľadať (search), počúvať (listen), bývať (live/reside).",
                tables: [
                    {
                        subheading: "VOLAŤ SA (to be called) / ČÍTAŤ (to read)",
                        headers: ["Person", "volať sa", "čítať"],
                        rows: [
                            ["ja", "volám sa", "čítam"],
                            ["ty", "voláš sa", "čítaš"],
                            ["on/ona", "volá sa", "číta"],
                            ["my", "voláme sa", "čítame"],
                            ["vy", "voláte sa", "čítate"],
                            ["oni", "volajú sa", "čítajú"]
                        ]
                    }
                ]
            },
            {
                heading: "Pattern 2: -ÍM type (hovoriť → hovorím)",
                note: "Verbs with infinitive in -iť. Endings: -ím, -íš, -í, -íme, -íte, -ia. Common verbs: hovoriť (speak), robiť (do/make), učiť sa (learn), variť (cook), platiť (pay).",
                tables: [
                    {
                        subheading: "HOVORIŤ (to speak) / ROBIŤ (to do)",
                        headers: ["Person", "hovoriť", "robiť"],
                        rows: [
                            ["ja", "hovorím", "robím"],
                            ["ty", "hovoríš", "robíš"],
                            ["on/ona", "hovorí", "robí"],
                            ["my", "hovoríme", "robíme"],
                            ["vy", "hovoríte", "robíte"],
                            ["oni", "hovoria", "robia"]
                        ]
                    }
                ]
            },
            {
                heading: "Pattern 3: -EM type (žiť → žijem)",
                note: "Various verbs with -iť, -ovať, -ieť, -úť stems. Endings: -em, -eš, -e, -eme, -ete, -ú/-ejú. Common verbs: žiť (live), študovať (study), pracovať (work), rozumieť (understand), kupovať (buy).",
                tables: [
                    {
                        subheading: "ŽIŤ (to live) / ŠTUDOVAŤ (to study) / ROZUMIEŤ (to understand)",
                        headers: ["Person", "žiť", "študovať", "rozumieť"],
                        rows: [
                            ["ja", "žijem", "študujem", "rozumiem"],
                            ["ty", "žiješ", "študuješ", "rozumieš"],
                            ["on/ona", "žije", "študuje", "rozumie"],
                            ["my", "žijeme", "študujeme", "rozumieme"],
                            ["vy", "žijete", "študujete", "rozumiete"],
                            ["oni", "žijú", "študujú", "rozumejú"]
                        ]
                    }
                ]
            },
            {
                heading: "Pattern 4: -ÍM type (vidieť → vidím / spať → spím)",
                note: "Some -ieť and -ať verbs conjugate like -ím. Endings: -ím, -íš, -í, -íme, -íte, -ia. Common verbs: vidieť (see), spať (sleep), stáť (stand/cost), letieť (fly).",
                tables: [
                    {
                        subheading: "VIDIEŤ (to see) / SPAŤ (to sleep)",
                        headers: ["Person", "vidieť", "spať"],
                        rows: [
                            ["ja", "vidím", "spím"],
                            ["ty", "vidíš", "spíš"],
                            ["on/ona", "vidí", "spí"],
                            ["my", "vidíme", "spíme"],
                            ["vy", "vidíte", "spíte"],
                            ["oni", "vidia", "spia"]
                        ]
                    }
                ]
            },
            {
                heading: "Pattern 5: -EM type (niesť → nesiem)",
                note: "Verbs ending in a consonant + ť. Endings: -iem, -ieš, -ie, -ieme, -iete, -ú. Common verbs: niesť (carry), viesť (lead), stretnúť (meet), pozvať (invite).",
                tables: [
                    {
                        subheading: "NIESŤ (to carry) / STRETNÚŤ (to meet)",
                        headers: ["Person", "niesť", "stretnúť"],
                        rows: [
                            ["ja", "nesiem", "stretnem"],
                            ["ty", "nesieš", "stretneš"],
                            ["on/ona", "nesie", "stretne"],
                            ["my", "nesieme", "stretneme"],
                            ["vy", "nesiete", "stretnete"],
                            ["oni", "nesú", "stretnú"]
                        ]
                    }
                ]
            },
            {
                heading: "Negation (Zápor)",
                note: "Simply add 'ne-' before the conjugated verb. This works for every verb in every tense. Examples: Rozumiem. → Nerozumiem. (I don't understand.) Hovorím po slovensky. → Nehovorím po slovensky. (I don't speak Slovak.) Študuješ? → Neštuduješ? (Don't you study?)"
            }
        ]
    },
    {
        slug: "irregular-verbs",
        title: "Irregular Verbs (Nepravidelné slovesá)",
        icon: "fa-random",
        explanation: "Some of the most common Slovak verbs are irregular — their conjugations don't follow the standard patterns. The most important one is 'byť' (to be), which is also used as a helper verb for the past tense. These verbs are used so frequently that you'll memorize them naturally through practice.",
        sections: [
            {
                heading: "BYŤ (to be) — The Most Important Verb",
                note: "Used on its own ('Som učiteľ' = I am a teacher) and as a helper verb for past tense ('Hovoril som' = I spoke). Unlike English, the subject pronoun is usually dropped: 'Som študent' (not 'Ja som študent'), unless you want to emphasize it.",
                tables: [
                    {
                        subheading: "Present Tense",
                        headers: ["Person", "Affirmative", "Negative", "Example"],
                        rows: [
                            ["ja", "som", "nie som", "Som z Bratislavy. (I am from Bratislava.)"],
                            ["ty", "si", "nie si", "Si študent? (Are you a student?)"],
                            ["on/ona/ono", "je", "nie je", "Je doma. (He/She is at home.)"],
                            ["my", "sme", "nie sme", "Sme kamaráti. (We are friends.)"],
                            ["vy", "ste", "nie ste", "Ste z Ameriky? (Are you from America?)"],
                            ["oni/ony", "sú", "nie sú", "Sú tu. (They are here.)"]
                        ]
                    }
                ]
            },
            {
                heading: "ÍSŤ (to go) / PRÍSŤ (to come) / ODÍSŤ (to leave)",
                note: "These motion verbs all share a similar stem pattern. 'Ísť' is one of the most used verbs in daily conversation.",
                tables: [
                    {
                        headers: ["Person", "ísť (to go)", "prísť (to come)", "odísť (to leave)"],
                        rows: [
                            ["ja", "idem", "prídem", "odídem"],
                            ["ty", "ideš", "prídeš", "odídeš"],
                            ["on/ona", "ide", "príde", "odíde"],
                            ["my", "ideme", "prídeme", "odídeme"],
                            ["vy", "idete", "prídete", "odídete"],
                            ["oni", "idú", "prídu", "odídu"]
                        ]
                    }
                ]
            },
            {
                heading: "JESŤ (to eat) / STÁŤ (to stand / to cost)",
                note: "Warning: 'je' (he/she eats) looks exactly like 'je' (he/she is). Context makes it clear. 'Stáť' has two meanings: 'to stand' and 'to cost' — Koľko to stojí? (How much does it cost?)",
                tables: [
                    {
                        headers: ["Person", "jesť (to eat)", "stáť (to stand/cost)"],
                        rows: [
                            ["ja", "jem", "stojím"],
                            ["ty", "ješ", "stojíš"],
                            ["on/ona", "je", "stojí"],
                            ["my", "jeme", "stojíme"],
                            ["vy", "jete", "stojíte"],
                            ["oni", "jedia", "stoja"]
                        ]
                    }
                ]
            },
            {
                heading: "STAŤ SA (to happen / to become)",
                note: "Used as: Čo sa stalo? (What happened?) Chcem sa stať učiteľom. (I want to become a teacher.)",
                tables: [
                    {
                        headers: ["Person", "Singular", "Plural"],
                        rows: [
                            ["1st", "stanem sa", "staneme sa"],
                            ["2nd", "staneš sa", "stanete sa"],
                            ["3rd", "stane sa", "stanú sa"]
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: "modal-verbs-past-tense",
        title: "Modal Verbs & Past Tense",
        icon: "fa-history",
        explanation: "Modal verbs express what you want, can, must, or are allowed to do. They are always followed by an infinitive: 'Chcem ísť' (I want to go), 'Musím pracovať' (I must work). The past tense is formed by combining the L-form of the verb with the present tense of 'byť' (to be). The L-form changes based on the speaker's gender — this is one of the few places in Slovak where gender affects verb forms.",
        sections: [
            {
                heading: "Modal Verbs — Present Tense",
                note: "Modal verb + infinitive = complete sentence. Example: Môžem hovoriť po slovensky. (I can speak Slovak.)",
                tables: [
                    {
                        subheading: "CHCIEŤ (to want) / MUSIEŤ (must, have to)",
                        headers: ["Person", "chcieť", "musieť", "Example"],
                        rows: [
                            ["ja", "chcem", "musím", "Chcem jesť. (I want to eat.)"],
                            ["ty", "chceš", "musíš", "Musíš ísť. (You must go.)"],
                            ["on/ona", "chce", "musí", "Chce spať. (He/She wants to sleep.)"],
                            ["my", "chceme", "musíme", "Musíme pracovať. (We must work.)"],
                            ["vy", "chcete", "musíte", "Chcete kávu? (Do you want coffee?)"],
                            ["oni", "chcú", "musia", "Musia študovať. (They must study.)"]
                        ]
                    },
                    {
                        subheading: "MÔCŤ (can) / SMIEŤ (may, be allowed to)",
                        headers: ["Person", "môcť", "smieť", "Example"],
                        rows: [
                            ["ja", "môžem", "smiem", "Môžem ti pomôcť? (Can I help you?)"],
                            ["ty", "môžeš", "smieš", "Smieš ísť. (You may go.)"],
                            ["on/ona", "môže", "smie", "Môže prísť. (He/She can come.)"],
                            ["my", "môžeme", "smieme", "Môžeme začať? (Can we start?)"],
                            ["vy", "môžete", "smiete", "Môžete si sadnúť. (You may sit down.)"],
                            ["oni", "môžu", "smú", "Nemôžu prísť. (They can't come.)"]
                        ]
                    },
                    {
                        subheading: "VEDIEŤ (to know) / MAŤ (to have)",
                        headers: ["Person", "vedieť", "mať", "Example"],
                        rows: [
                            ["ja", "viem", "mám", "Neviem. (I don't know.) Mám čas. (I have time.)"],
                            ["ty", "vieš", "máš", "Vieš čo? (You know what?) Máš deti? (Do you have kids?)"],
                            ["on/ona", "vie", "má", "Vie všetko. (He/She knows everything.)"],
                            ["my", "vieme", "máme", "Máme problém. (We have a problem.)"],
                            ["vy", "viete", "máte", "Viete, kde to je? (Do you know where it is?)"],
                            ["oni", "vedia", "majú", "Majú veľký dom. (They have a big house.)"]
                        ]
                    }
                ]
            },
            {
                heading: "Past Tense (Minulý čas) — How It Works",
                note: "Formula: L-form of verb + present tense of 'byť'. The L-form depends on the speaker's gender: male speakers use -l, female speakers use -la, neuter uses -lo, and plural is always -li. Important: in the 3rd person (he/she/they), you do NOT add 'byť' — just the L-form alone.",
                tables: [
                    {
                        subheading: "The Pattern",
                        headers: ["Person", "Male Speaker", "Female Speaker", "Plural"],
                        rows: [
                            ["ja", "hovoril som", "hovorila som", "—"],
                            ["ty", "hovoril si", "hovorila si", "—"],
                            ["on", "hovoril (no byť!)", "—", "—"],
                            ["ona", "—", "hovorila (no byť!)", "—"],
                            ["my", "—", "—", "hovorili sme"],
                            ["vy", "—", "—", "hovorili ste"],
                            ["oni/ony", "—", "—", "hovorili (no byť!)"]
                        ]
                    }
                ]
            },
            {
                heading: "Past Tense — Common Verbs",
                note: "Here are the L-forms for the most common verbs. Remember: add 'som/si/sme/ste' for 1st and 2nd person, but NOT for 3rd person.",
                tables: [
                    {
                        subheading: "Regular & Key Irregular Past Forms",
                        headers: ["Infinitive", "L-form (M)", "L-form (F)", "L-form (Pl.)", "Example (ja, male)"],
                        rows: [
                            ["byť (to be)", "bol", "bola", "boli", "Bol som doma. (I was at home.)"],
                            ["hovoriť (to speak)", "hovoril", "hovorila", "hovorili", "Hovoril som po slovensky. (I spoke Slovak.)"],
                            ["ísť (to go)", "išiel", "išla", "išli", "Išiel som do práce. (I went to work.)"],
                            ["jesť (to eat)", "jedol", "jedla", "jedli", "Jedol som obed. (I ate lunch.)"],
                            ["chcieť (to want)", "chcel", "chcela", "chceli", "Chcel som ísť. (I wanted to go.)"],
                            ["môcť (can)", "mohol", "mohla", "mohli", "Nemohol som prísť. (I couldn't come.)"],
                            ["musieť (must)", "musel", "musela", "museli", "Musel som pracovať. (I had to work.)"],
                            ["mať (to have)", "mal", "mala", "mali", "Mal som čas. (I had time.)"],
                            ["vedieť (to know)", "vedel", "vedela", "vedeli", "Nevedel som. (I didn't know.)"],
                            ["vidieť (to see)", "videl", "videla", "videli", "Videl som ho. (I saw him.)"]
                        ]
                    }
                ]
            },
            {
                heading: "Past Tense — Negation",
                note: "Just add 'ne-' before the L-form: Nehovoril som. (I didn't speak.) Nebol som tam. (I wasn't there.) Nešla domov. (She didn't go home.)"
            }
        ]
    },
    {
        slug: "numbers",
        title: "Numbers (Číslovky)",
        icon: "fa-sort-numeric-up",
        explanation: "Slovak numbers have a few quirks compared to English. The numbers 1-4 change form based on the gender of the noun they describe. From 5 onwards, the number stays the same regardless of gender. Ordinal numbers (first, second, third...) work like adjectives and change by gender too.",
        sections: [
            {
                heading: "Cardinal Numbers (Základné číslovky)",
                tables: [
                    {
                        subheading: "0-20",
                        headers: ["Number", "Slovak", "Number", "Slovak"],
                        rows: [
                            ["0", "nula", "11", "jedenásť"],
                            ["1", "jeden / jedna / jedno", "12", "dvanásť"],
                            ["2", "dva / dve", "13", "trinásť"],
                            ["3", "tri", "14", "štrnásť"],
                            ["4", "štyri", "15", "pätnásť"],
                            ["5", "päť", "16", "šestnásť"],
                            ["6", "šesť", "17", "sedemnásť"],
                            ["7", "sedem", "18", "osemnásť"],
                            ["8", "osem", "19", "devätnásť"],
                            ["9", "deväť", "20", "dvadsať"],
                            ["10", "desať", "", ""]
                        ]
                    },
                    {
                        subheading: "Tens, Hundreds, and Beyond",
                        headers: ["Number", "Slovak", "Number", "Slovak"],
                        rows: [
                            ["20", "dvadsať", "200", "dvesto"],
                            ["30", "tridsať", "300", "tristo"],
                            ["40", "štyridsať", "400", "štyristo"],
                            ["50", "päťdesiat", "500", "päťsto"],
                            ["60", "šesťdesiat", "1 000", "tisíc"],
                            ["70", "sedemdesiat", "2 000", "dvetisíc"],
                            ["80", "osemdesiat", "10 000", "desaťtisíc"],
                            ["90", "deväťdesiat", "1 000 000", "milión"],
                            ["100", "sto", "", ""]
                        ]
                    }
                ]
            },
            {
                heading: "Gender Agreement (1-4)",
                note: "The numbers 1-4 change form based on the gender of the noun. From 5 onwards, the number stays the same. This is one of the trickier aspects for English speakers, but it becomes natural with practice.",
                tables: [
                    {
                        headers: ["Number", "M (animate)", "M (inanimate) / F / N", "Example"],
                        rows: [
                            ["1", "jeden", "jedna (F), jedno (N)", "jeden muž, jedna žena, jedno dieťa"],
                            ["2", "dvaja", "dva (M inanim.), dve (F/N)", "dvaja muži, dva domy, dve ženy, dve autá"],
                            ["3", "traja", "tri", "traja chlapci, tri domy, tri ženy, tri mestá"],
                            ["4", "štyria", "štyri", "štyria študenti, štyri stoly, štyri knihy"],
                            ["5+", "päť (same for all)", "", "päť mužov, päť žien, päť detí"]
                        ]
                    }
                ]
            },
            {
                heading: "Ordinal Numbers (Radové číslovky)",
                note: "Ordinal numbers work like adjectives — they change by gender. Listed here in masculine form; add -á for feminine, -é for neuter. Example: prvý muž (first man), prvá žena (first woman), prvé dieťa (first child).",
                tables: [
                    {
                        headers: ["Number", "Ordinal (M)", "Number", "Ordinal (M)"],
                        rows: [
                            ["1st", "prvý", "7th", "siedmy"],
                            ["2nd", "druhý", "8th", "ôsmy"],
                            ["3rd", "tretí", "9th", "deviaty"],
                            ["4th", "štvrtý", "10th", "desiaty"],
                            ["5th", "piaty", "20th", "dvadsiaty"],
                            ["6th", "šiesty", "100th", "stý"]
                        ]
                    }
                ]
            },
            {
                heading: "Useful Phrases with Numbers",
                tables: [
                    {
                        headers: ["Slovak", "English"],
                        rows: [
                            ["Koľko to stojí?", "How much does it cost?"],
                            ["Stojí to päť eur.", "It costs five euros."],
                            ["Koľko máš rokov?", "How old are you?"],
                            ["Mám dvadsaťpäť rokov.", "I am 25 years old."],
                            ["Koľko je hodín?", "What time is it?"],
                            ["Je jedna hodina.", "It is one o'clock."],
                            ["Sú dve hodiny.", "It is two o'clock."],
                            ["Prvé poschodie.", "First floor."],
                            ["Telefónne číslo je...", "The phone number is..."]
                        ]
                    }
                ]
            }
        ]
    }
];
