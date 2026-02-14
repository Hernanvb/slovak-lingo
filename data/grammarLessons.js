module.exports = [
    {
        slug: "nouns",
        title: "Nouns (Substantíva)",
        icon: "fa-font",
        explanation: "Slovak nouns have three grammatical genders: Masculine (M), Feminine (F), and Neuter (N). The gender of a noun determines its endings and how adjectives agree with it. You can usually identify the gender by looking at the noun's ending. Masculine nouns further depend on whether they end in a hard consonant (TK: d, t, n, l, h, ch, k, g, b, m, p, r, s, v, z, f) or a soft consonant (MK: \u010f, \u0165, \u0148, \u013e, c, \u010d, \u017e, dz, d\u017e, \u0161, j).",
        sections: [
            {
                heading: "Masculine (Maskulínum) - Mužský rod",
                tables: [
                    {
                        headers: ["Type", "Ending", "Example"],
                        rows: [
                            ["Animate (living)", "-\u00d8 (no ending)", "muž"],
                            ["Animate (living)", "-o", ""],
                            ["Animate (living)", "-a", "koleg-a"],
                            ["Inanimate (non-living)", "TK-\u00d8", "plán"],
                            ["Inanimate (non-living)", "MK-\u00d8", "počítač"]
                        ]
                    }
                ]
            },
            {
                heading: "Feminine (Feminínum) - Ženský rod",
                tables: [
                    {
                        headers: ["Type", "Ending", "Example"],
                        rows: [
                            ["Hard consonant stem", "TK-a", "žen-a"],
                            ["Soft consonant stem", "MK-a", "stanic-a"],
                            ["Consonant stem", "K-\u00d8", "loď"],
                            ["Consonant stem", "", "miestnosť"]
                        ]
                    }
                ],
                note: "Some feminine nouns ending in a consonant can look masculine. Examples: lekáreň (F, -e), miestnosť (F, -i), reštauráci-a."
            },
            {
                heading: "Neuter (Neutrum) - Stredný rod",
                tables: [
                    {
                        headers: ["Ending", "Example"],
                        rows: [
                            ["-o", "mest-o"],
                            ["-um", ""],
                            ["-e", "mor-e"],
                            ["-ie", "poschodie"],
                            ["-a", "dievča"]
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: "noun-cases",
        title: "Noun Cases (Pády)",
        icon: "fa-exchange-alt",
        explanation: "Slovak uses grammatical cases to show the role of a noun in a sentence. At the A1 level, you need to know four cases: Nominatív (subject), Akuzatív (direct object), Lokál (location, always with a preposition), and Inštrumentál (instrument/companion). Each case changes the noun's ending differently depending on gender and number.",
        sections: [
            {
                heading: "Nominatív (Nominative) - Who/What is it?",
                note: "The basic dictionary form. Used for the subject of a sentence. Question: Kto/Čo je to? (Who/What is it?)",
                tables: [
                    {
                        subheading: "Singular",
                        headers: ["Gender", "Adj.", "Noun endings"],
                        rows: [
                            ["M (animate)", "ten pekn-ý", "muž, koleg-a, pes, plán, počítač"],
                            ["F", "tá pekn-á", "žen-a, stanic-a, loď, miestnosť"],
                            ["N", "to pekn-é", "mest-o, mor-e, poschodie, dievč-a"]
                        ]
                    },
                    {
                        subheading: "Plural",
                        headers: ["Gender", "Adj.", "Noun endings"],
                        rows: [
                            ["M (animate)", "t-í pekn-í", "muž-i, koleg-ovia, ps-y, plán-y, počítač-e"],
                            ["F", "t-ie pekn-é", "žen-y, stanic-e, lod-e, miestnost-i"],
                            ["N", "", "mest-á, mor-ia, poschodia, dievč-at-á"]
                        ]
                    }
                ]
            },
            {
                heading: "Akuzatív (Accusative) - Whom/What do you see?",
                note: "Used for the direct object. Question: Koho/Čo (vidíš)? (Whom/What do you see?)",
                tables: [
                    {
                        subheading: "Singular",
                        headers: ["Gender", "Adj.", "Noun endings"],
                        rows: [
                            ["M (animate)", "t-oho pekn-ého", "muž-a, koleg-u, ps-a"],
                            ["M (inanimate)", "ten pekn-ý", "plán, počítač"],
                            ["F", "t-ú pekn-ú", "žen-u, stanic-u, loď, miestnosť"],
                            ["N", "to pekn-é", "mesto, more, poschodie, dievča"]
                        ]
                    },
                    {
                        subheading: "Plural",
                        headers: ["Gender", "Adj.", "Noun endings"],
                        rows: [
                            ["M (animate)", "t-ých pekn-ých", "muž-ov, koleg-ov"],
                            ["M (inanimate)", "", "plán-y, počítač-e, ps-y"],
                            ["F", "t-ie pekn-é", "žen-y, stanic-e, lod-e, miestnost-i"],
                            ["N", "", "mest-á, mor-ia, poschodia, dievč-at-á"]
                        ]
                    }
                ]
            },
            {
                heading: "Lokál (Locative) - About whom/what?",
                note: "Always used with a preposition (o, po, pri, v, na). Question: O kom? / O čom? (About whom/what?). Important: nouns ending in -k, -g, -ch, -h change to -u before the Lokál ending.",
                tables: [
                    {
                        subheading: "Singular",
                        headers: ["Gender", "Adj.", "Noun endings"],
                        rows: [
                            ["M", "t-om pekn-om", "muž-ovi, koleg-ovi, ps-ovi, plán-e, vlak-u, počítač-i"],
                            ["F", "t-ej pekn-ej", "žen-e, stanic-i, lod-i, miestnost-i"],
                            ["N", "t-om pekn-om", "mest-e, Slovensku, mor-i, poschodí, dievč-at-i"]
                        ]
                    },
                    {
                        subheading: "Plural",
                        headers: ["Gender", "Adj.", "Noun endings"],
                        rows: [
                            ["M", "t-ých pekn-ých", "muž-och, koleg-och, ps-och, plán-och, počítač-och"],
                            ["F", "", "žen-ách, stanic-iach, lod-iach, miestnost-iach"],
                            ["N", "", "mest-ách, mor-iach, poschodiach, dievč-at-ách"]
                        ]
                    }
                ]
            },
            {
                heading: "Inštrumentál (Instrumental) - With whom/what?",
                note: "Used to express the instrument or companion. Question: (S) kým? / (S) čím? (With whom/what?). Used with prepositions: s, nad, pod, pred, za, medzi.",
                tables: [
                    {
                        subheading: "Singular",
                        headers: ["Gender", "Adj.", "Noun endings"],
                        rows: [
                            ["M", "t-ým pekn-ým", "muž-om, koleg-om, ps-om, plán-om, počítač-om"],
                            ["F", "t-ou pekn-ou", "žen-ou, stanic-ou, loďou, miestnosťou"],
                            ["N", "t-ým pekn-ým", "mest-om, mor-om, poschodím, dievč-aťom"]
                        ]
                    },
                    {
                        subheading: "Plural",
                        headers: ["Gender", "Adj.", "Noun endings"],
                        rows: [
                            ["M", "t-ými pekn-ými", "muž-mi, koleg-ami, ps-ami, plán-mi, počítač-mi"],
                            ["F", "", "žen-ami, stanic-ami, loď-ami, miestnosť-ami"],
                            ["N", "", "mest-ami, mor-ami, poschodiami, dievč-at-ami"]
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: "pronouns",
        title: "Pronouns (Pronominá)",
        icon: "fa-user",
        explanation: "Slovak personal pronouns change form depending on the grammatical case, just like nouns. The 3rd person pronoun also changes by gender (on = he, ona = she, ono = it). When a preposition is used, pronouns often get an added 'ň' prefix (e.g., 'ho' becomes 'neho' after a preposition). Possessive pronouns agree with the gender of the thing being possessed, not the possessor.",
        sections: [
            {
                heading: "Personal Pronouns (Personálne pronominá)",
                tables: [
                    {
                        headers: ["Singular", "Plural"],
                        rows: [
                            ["ja (I)", "my (we)"],
                            ["ty (you)", "vy (you, plural/formal)"],
                            ["on, ona, ono (he, she, it)", "oni, ony (they)"]
                        ]
                    }
                ]
            },
            {
                heading: "Akuzatív - Pronouns",
                note: "(*) With prepositions (pre, nad, pod, pred, za, medzi, na), use the forms in parentheses.",
                tables: [
                    {
                        headers: ["", "JA", "TY", "ON", "ONA", "ONO", "MY", "VY", "ONI/ONY"],
                        rows: [
                            ["Basic", "ma", "ťa", "ho", "ju", "ho", "nás", "vás", "ich"],
                            ["+ Prep.", "(*) mňa", "(*) teba", "(*) neho / ňho / ň", "(*) ňu", "(*)-ň", "(*) nás", "(*) vás", "(*) nich / ne"]
                        ]
                    }
                ]
            },
            {
                heading: "Lokál - Pronouns",
                note: "Always with a preposition: o, po, pri, v, na. Special form: 'vo mne'.",
                tables: [
                    {
                        headers: ["JA", "TY", "ON", "ONA", "ONO", "MY", "VY", "ONI/ONY"],
                        rows: [
                            ["(*) mne", "(*) tebe", "(*) ňom", "(*) nej", "(*) ňom", "(*) nás", "(*) vás", "(*) nich"]
                        ]
                    }
                ]
            },
            {
                heading: "Inštrumentál - Pronouns",
                note: "With prepositions: s, nad, pod, pred, za, medzi. Special form: 'so mnou, nado mnou, podo mnou, predo mnou'.",
                tables: [
                    {
                        headers: ["JA", "TY", "ON", "ONA", "ONO", "MY", "VY", "ONI/ONY"],
                        rows: [
                            ["(*) mnou", "(*) tebou", "(*) ním", "(*) ňou", "(*) ním", "(*) nami", "(*) vami", "(*) nimi"]
                        ]
                    }
                ]
            },
            {
                heading: "Possessive Pronouns (Posesívne pronominá)",
                note: "The possessive pronoun agrees with the gender of the noun it modifies, not the possessor. Add -a for feminine, -e for neuter: môj kamarát (M), moja izba (F), moje auto (N).",
                tables: [
                    {
                        headers: ["Person", "čí? (M)", "čia? (F)", "čie? (N)"],
                        rows: [
                            ["JA", "môj", "moj-a", "moj-e"],
                            ["TY", "tvoj", "tvoj-a", "tvoj-e"],
                            ["MY", "náš", "naš-a", "naš-e"],
                            ["VY", "váš", "vaš-a", "vaš-e"],
                            ["ON", "jeho", "jeho", "jeho"],
                            ["ONA", "jej", "jej", "jej"],
                            ["ONO", "jeho", "jeho", "jeho"],
                            ["ONI/ONY", "ich", "ich", "ich"]
                        ]
                    }
                ]
            },
            {
                heading: "Possessive Adjectives (Posesívne adjektíva)",
                note: "Formed from proper names. Masculine: -ov/-in, Feminine: -ova/-ina, Neuter: -ovo/-ino. Example: Róbert → Róbertov kamarát, Róbertova izba, Róbertovo auto. Zuzana → Zuzanin kamarát, Zuzanina izba, Zuzanino auto.",
                tables: [
                    {
                        headers: ["", "čí? (M)", "čia? (F)", "čie? (N)"],
                        rows: [
                            ["Róbert", "-ov", "-ova", "-ovo"],
                            ["Zuzana", "-in", "-ina", "-ino"]
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: "verbs-present",
        title: "Verbs - Present Tense (Verbá)",
        icon: "fa-running",
        explanation: "Slovak verbs in the present tense are conjugated according to the subject (1st, 2nd, 3rd person in singular and plural). There are several conjugation patterns. The key is to learn the infinitive and identify which pattern it follows. Negation is formed by adding the prefix 'ne-' to the verb (e.g., študujem → neštudujem).",
        sections: [
            {
                heading: "Conjugation Patterns",
                tables: [
                    {
                        subheading: "VOLAŤ SA (to be called)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "volám sa", "voláme sa"],
                            ["2nd", "voláš sa", "voláte sa"],
                            ["3rd", "volá sa", "volajú sa"]
                        ]
                    },
                    {
                        subheading: "HOVORIŤ (to speak)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "hovorím", "hovoríme"],
                            ["2nd", "hovoríš", "hovoríte"],
                            ["3rd", "hovorí", "hovoria"]
                        ]
                    },
                    {
                        subheading: "ŽIŤ (to live)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "žijem", "žijeme"],
                            ["2nd", "žiješ", "žijete"],
                            ["3rd", "žije", "žijú"]
                        ]
                    },
                    {
                        subheading: "NIESŤ (to carry)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "nesiem", "nesieme"],
                            ["2nd", "nesieš", "nesiete"],
                            ["3rd", "nesie", "nesú"]
                        ]
                    },
                    {
                        subheading: "ŠTUDOVAŤ (to study)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "študujem", "študujeme"],
                            ["2nd", "študuješ", "študujete"],
                            ["3rd", "študuje", "študujú"]
                        ]
                    },
                    {
                        subheading: "SPAŤ (to sleep)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "spím", "spíme"],
                            ["2nd", "spíš", "spíte"],
                            ["3rd", "spí", "spia"]
                        ]
                    },
                    {
                        subheading: "ROZUMIEŤ (to understand)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "rozumiem", "rozumieme"],
                            ["2nd", "rozumieš", "rozumiete"],
                            ["3rd", "rozumie", "rozumejú"]
                        ]
                    },
                    {
                        subheading: "STRETNÚŤ (to meet)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "stretnem", "stretneme"],
                            ["2nd", "stretneš", "stretnete"],
                            ["3rd", "stretne", "stretnú"]
                        ]
                    },
                    {
                        subheading: "POZVAŤ (to invite)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "pozvem", "pozveme"],
                            ["2nd", "pozveš", "pozvete"],
                            ["3rd", "pozve", "pozvú"]
                        ]
                    },
                    {
                        subheading: "VIDIEŤ (to see)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "vidím", "vidíme"],
                            ["2nd", "vidíš", "vidíte"],
                            ["3rd", "vidí", "vidia"]
                        ]
                    }
                ]
            },
            {
                heading: "Negation (Negácia)",
                note: "Add the prefix 'ne-' to any conjugated verb form. Example: NEŠTUDOVAŤ: neštuduj-em, neštuduj-eš, neštuduj-e, neštuduj-eme, neštuduj-ete, neštuduj-ú."
            }
        ]
    },
    {
        slug: "irregular-verbs",
        title: "Irregular Verbs (Nepravidelné verbá)",
        icon: "fa-random",
        explanation: "These common verbs don't follow regular conjugation patterns and must be memorized. The most important irregular verb is 'byť' (to be), which is used both on its own and as a helper verb to form the past tense. Its negative form 'nebyť' simply adds 'nie' before each form.",
        sections: [
            {
                heading: "BYŤ (to be) / NEBYŤ (not to be)",
                tables: [
                    {
                        subheading: "BYŤ",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "(ja) som", "(my) sme"],
                            ["2nd", "(ty) si", "(vy) ste"],
                            ["3rd", "(on/ona/ono) je", "(oni/ony) sú"]
                        ]
                    },
                    {
                        subheading: "NEBYŤ",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "nie som", "nie sme"],
                            ["2nd", "nie si", "nie ste"],
                            ["3rd", "nie je", "nie sú"]
                        ]
                    }
                ]
            },
            {
                heading: "Motion & Position Verbs",
                tables: [
                    {
                        subheading: "STÁŤ (to stand)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "stojím", "stojíme"],
                            ["2nd", "stojíš", "stojíte"],
                            ["3rd", "stojí", "stoja"]
                        ]
                    },
                    {
                        subheading: "ODÍSŤ (to leave)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "odídem", "odídeme"],
                            ["2nd", "odídeš", "odídete"],
                            ["3rd", "odíde", "odídu"]
                        ]
                    },
                    {
                        subheading: "ÍSŤ (to go)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "idem", "ideme"],
                            ["2nd", "ideš", "idete"],
                            ["3rd", "ide", "idú"]
                        ]
                    },
                    {
                        subheading: "PRÍSŤ (to come)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "prídem", "prídeme"],
                            ["2nd", "prídeš", "prídete"],
                            ["3rd", "príde", "prídu"]
                        ]
                    },
                    {
                        subheading: "STAŤ SA (to happen/become)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "stanem sa", "staneme sa"],
                            ["2nd", "staneš sa", "stanete sa"],
                            ["3rd", "stane sa", "stanú sa"]
                        ]
                    },
                    {
                        subheading: "JESŤ (to eat)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "jem", "jeme"],
                            ["2nd", "ješ", "jete"],
                            ["3rd", "je", "jedia"]
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
        explanation: "Modal verbs express ability, obligation, permission, or desire. They are typically followed by an infinitive (e.g., 'Chcem ísť' = I want to go). The past tense (préteritum) in Slovak is formed using the L-form of the verb + the present tense of 'byť' (to be). The L-form changes based on gender: -l (M), -la (F), -lo (N), -li (plural).",
        sections: [
            {
                heading: "Modal Verbs - Present Tense",
                tables: [
                    {
                        subheading: "CHCIEŤ (to want)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "chcem", "chceme"],
                            ["2nd", "chceš", "chcete"],
                            ["3rd", "chce", "chcú"]
                        ]
                    },
                    {
                        subheading: "VEDIEŤ (to know)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "viem", "vieme"],
                            ["2nd", "vieš", "viete"],
                            ["3rd", "vie", "vedia"]
                        ]
                    },
                    {
                        subheading: "MUSIEŤ (must/have to)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "musím", "musíme"],
                            ["2nd", "musíš", "musíte"],
                            ["3rd", "musí", "musia"]
                        ]
                    },
                    {
                        subheading: "SMIEŤ (may/be allowed to)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "smiem", "smieme"],
                            ["2nd", "smieš", "smiete"],
                            ["3rd", "smie", "smú"]
                        ]
                    },
                    {
                        subheading: "MÔCŤ (can/be able to)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "môžem", "môžeme"],
                            ["2nd", "môžeš", "môžete"],
                            ["3rd", "môže", "môžu"]
                        ]
                    },
                    {
                        subheading: "MAŤ (to have)",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "mám", "máme"],
                            ["2nd", "máš", "máte"],
                            ["3rd", "má", "majú"]
                        ]
                    }
                ]
            },
            {
                heading: "Past Tense (Préteritum)",
                note: "Formed with: L-form of verb + present tense of 'byť'. The L-form ending depends on gender: hovori-l (M sg.), hovori-la (F sg.), hovori-lo (N sg.), hovori-li (plural). Example: Hovoril som (I spoke, male), Hovorila som (I spoke, female).",
                tables: [
                    {
                        subheading: "HOVORIŤ - Past Tense",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "hovori-l/la som", "hovori-li sme"],
                            ["2nd", "hovori-l/la si", "hovori-li ste"],
                            ["3rd", "hovori-l/la/lo", "hovori-li"]
                        ]
                    },
                    {
                        subheading: "BYŤ - Past Tense",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "bol/bola som", "boli sme"],
                            ["2nd", "bol/bola si", "boli ste"],
                            ["3rd", "bol/bola/bolo", "boli"]
                        ]
                    },
                    {
                        subheading: "ÍSŤ - Past Tense",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "išiel/išla som", "išli sme"],
                            ["2nd", "išiel/išla si", "išli ste"],
                            ["3rd", "išiel/išla/išlo", "išli"]
                        ]
                    },
                    {
                        subheading: "JESŤ - Past Tense",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "jedol/jedla som", "jedli sme"],
                            ["2nd", "jedol/jedla si", "jedli ste"],
                            ["3rd", "jedol/jedla/jedlo", "jedli"]
                        ]
                    }
                ]
            },
            {
                heading: "Modal Verbs - Past Tense (Préteritum)",
                note: "Modal verbs in the past tense follow the same L-forma + byť pattern. Some have alternate gender forms.",
                tables: [
                    {
                        subheading: "CHCIEŤ - Past",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "chcel/chcela som", "chceli sme"],
                            ["2nd", "chcel/chcela si", "chceli ste"],
                            ["3rd", "chcel/chcela/chcelo", "chceli"]
                        ]
                    },
                    {
                        subheading: "VEDIEŤ - Past",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "vedel/vedela som", "vedeli sme"],
                            ["2nd", "vedel/vedela si", "vedeli ste"],
                            ["3rd", "vedel/vedela/vedelo", "vedeli"]
                        ]
                    },
                    {
                        subheading: "MUSIEŤ - Past",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "musel/musela som", "museli sme"],
                            ["2nd", "musel/musela si", "museli ste"],
                            ["3rd", "musel/musela/muselo", "museli"]
                        ]
                    },
                    {
                        subheading: "MÔCŤ - Past",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "mohol/mohla som", "mohli sme"],
                            ["2nd", "mohol/mohla si", "mohli ste"],
                            ["3rd", "mohol/mohla/mohlo", "mohli"]
                        ]
                    },
                    {
                        subheading: "MAŤ - Past",
                        headers: ["", "Singular", "Plural"],
                        rows: [
                            ["1st", "mal/mala som", "mali sme"],
                            ["2nd", "mal/mala si", "mali ste"],
                            ["3rd", "mal/mala/malo", "mali"]
                        ]
                    }
                ]
            }
        ]
    },
    {
        slug: "numbers",
        title: "Numbers (Numeráliá)",
        icon: "fa-sort-numeric-up",
        explanation: "Slovak has both cardinal (základné) and ordinal (radové) numbers. The numbers 1-4 change form based on the gender of the noun they describe. For masculine animate nouns use: dvaja, traja, štyria. For masculine inanimate and neuter/feminine nouns use: dva/dve, tri, štyri. Currencies also follow gender rules: dolár → dolárov (M), koruna → korún (F), euro → eur (N).",
        sections: [
            {
                heading: "Cardinal & Ordinal Numbers",
                tables: [
                    {
                        headers: ["Cardinal", "Ordinal", "Cardinal", "Ordinal"],
                        rows: [
                            ["0 nula", "nultý", "20 dvadsať", "dvadsiaty"],
                            ["1 jeden/jedna/jedno", "prvý", "21 dvadsaťjeden", "dvadsiaty prvý"],
                            ["2 dva/dve", "druhý", "30 tridsať", "tridsiaty"],
                            ["3 tri", "tretí", "40 štyridsať", "štyridsiaty"],
                            ["4 štyri", "štvrtý", "50 päťdesiat", "päťdesiaty"],
                            ["5 päť", "piaty", "60 šesťdesiat", "šesťdesiaty"],
                            ["6 šesť", "šiesty", "70 sedemdesiat", "sedemdesiaty"],
                            ["7 sedem", "siedmy", "80 osemdesiat", "osemdesiaty"],
                            ["8 osem", "ôsmy", "90 deväťdesiat", "deväťdesiaty"],
                            ["9 deväť", "deviaty", "100 sto", "stý"],
                            ["10 desať", "desiaty", "200 dvesto", "dvestý"],
                            ["11 jedenásť", "jedenásty", "300 tristo", "tristý"],
                            ["12 dvanásť", "dvanásty", "1 000 tisíc", "tisíci"],
                            ["13 trinásť", "trinásty", "2 000 dvetisíc", "dvetisíci"],
                            ["14 štrnásť", "štrnásty", "1 000 000 milión", "miliónty"]
                        ]
                    }
                ]
            },
            {
                heading: "Gender-based Counting",
                note: "Numbers 1-4 agree with the gender of the noun. From 5 onwards, the number stays the same regardless of gender.",
                tables: [
                    {
                        headers: ["M (animate)", "M (inanimate/animals)", "F + N"],
                        rows: [
                            ["dvaja muži", "dva domy, psy", "dve kamarátky, kiná"],
                            ["traja kamaráti", "tri počítače, kolegyne, autá", ""],
                            ["štyria kolegovia", "štyri kostoly, ženy, námestia", ""]
                        ]
                    }
                ]
            }
        ]
    }
];
