module.exports = [
    // ============================================
    // VERB CONJUGATION - Present Tense
    // ============================================
    { category: "verbs", prompt: "Conjugate 'hovoriť' (to speak) for 'ja':", answers: ["hovorím"], explanation: "hovoriť → hovor-ím (1st person singular)" },
    { category: "verbs", prompt: "Conjugate 'hovoriť' (to speak) for 'ty':", answers: ["hovoríš"], explanation: "hovoriť → hovor-íš (2nd person singular)" },
    { category: "verbs", prompt: "Conjugate 'hovoriť' (to speak) for 'oni':", answers: ["hovoria"], explanation: "hovoriť → hovor-ia (3rd person plural)" },
    { category: "verbs", prompt: "Conjugate 'študovať' (to study) for 'ja':", answers: ["študujem"], explanation: "študovať → študuj-em (1st person singular)" },
    { category: "verbs", prompt: "Conjugate 'študovať' (to study) for 'my':", answers: ["študujeme"], explanation: "študovať → študuj-eme (1st person plural)" },
    { category: "verbs", prompt: "Conjugate 'študovať' (to study) for 'oni':", answers: ["študujú"], explanation: "študovať → študuj-ú (3rd person plural)" },
    { category: "verbs", prompt: "Conjugate 'žiť' (to live) for 'ja':", answers: ["žijem"], explanation: "žiť → žij-em (1st person singular)" },
    { category: "verbs", prompt: "Conjugate 'žiť' (to live) for 'on':", answers: ["žije"], explanation: "žiť → žij-e (3rd person singular)" },
    { category: "verbs", prompt: "Conjugate 'spať' (to sleep) for 'ja':", answers: ["spím"], explanation: "spať → sp-ím (1st person singular)" },
    { category: "verbs", prompt: "Conjugate 'spať' (to sleep) for 'oni':", answers: ["spia"], explanation: "spať → sp-ia (3rd person plural)" },
    { category: "verbs", prompt: "Conjugate 'rozumieť' (to understand) for 'ja':", answers: ["rozumiem"], explanation: "rozumieť → rozumie-m (1st person singular)" },
    { category: "verbs", prompt: "Conjugate 'rozumieť' (to understand) for 'vy':", answers: ["rozumiete"], explanation: "rozumieť → rozumie-te (2nd person plural)" },
    { category: "verbs", prompt: "Conjugate 'vidieť' (to see) for 'ja':", answers: ["vidím"], explanation: "vidieť → vid-ím (1st person singular)" },
    { category: "verbs", prompt: "Conjugate 'vidieť' (to see) for 'oni':", answers: ["vidia"], explanation: "vidieť → vid-ia (3rd person plural)" },
    { category: "verbs", prompt: "Conjugate 'volať sa' (to be called) for 'ja':", answers: ["volám sa"], explanation: "volať sa → vol-ám sa (1st person singular)" },
    { category: "verbs", prompt: "Conjugate 'volať sa' (to be called) for 'on':", answers: ["volá sa"], explanation: "volať sa → vol-á sa (3rd person singular)" },
    { category: "verbs", prompt: "Conjugate 'niesť' (to carry) for 'ja':", answers: ["nesiem"], explanation: "niesť → nesie-m (1st person singular)" },
    { category: "verbs", prompt: "Conjugate 'niesť' (to carry) for 'oni':", answers: ["nesú"], explanation: "niesť → nes-ú (3rd person plural)" },
    { category: "verbs", prompt: "How do you negate 'študujem'?", answers: ["neštudujem"], explanation: "Negation: add 'ne-' prefix → neštudujem" },
    { category: "verbs", prompt: "How do you negate 'hovorím'?", answers: ["nehovorím"], explanation: "Negation: add 'ne-' prefix → nehovorím" },

    // ============================================
    // NOUN CASES
    // ============================================
    { category: "cases", prompt: "Akuzatív singular of 'muž' (man):", answers: ["muža"], explanation: "Masculine animate: muž → muž-a (Akuzatív)" },
    { category: "cases", prompt: "Akuzatív singular of 'žena' (woman):", answers: ["ženu"], explanation: "Feminine: žena → žen-u (Akuzatív)" },
    { category: "cases", prompt: "Akuzatív singular of 'kolega' (colleague):", answers: ["kolegu"], explanation: "Masculine animate -a: kolega → koleg-u (Akuzatív)" },
    { category: "cases", prompt: "Lokál singular of 'žena' (o ___?):", answers: ["žene"], explanation: "Feminine: žena → žen-e (Lokál)" },
    { category: "cases", prompt: "Lokál singular of 'muž' (o ___?):", answers: ["mužovi"], explanation: "Masculine animate: muž → muž-ovi (Lokál)" },
    { category: "cases", prompt: "Lokál singular of 'mesto' (o ___?):", answers: ["meste"], explanation: "Neuter: mesto → mest-e (Lokál)" },
    { category: "cases", prompt: "Inštrumentál singular of 'muž' (s ___?):", answers: ["mužom"], explanation: "Masculine: muž → muž-om (Inštrumentál)" },
    { category: "cases", prompt: "Inštrumentál singular of 'žena' (so ___?):", answers: ["ženou"], explanation: "Feminine: žena → žen-ou (Inštrumentál)" },
    { category: "cases", prompt: "Nominatív plural of 'muž':", answers: ["muži"], explanation: "Masculine animate plural: muž → muž-i" },
    { category: "cases", prompt: "Nominatív plural of 'žena':", answers: ["ženy"], explanation: "Feminine plural: žena → žen-y" },
    { category: "cases", prompt: "Nominatív plural of 'mesto':", answers: ["mestá"], explanation: "Neuter plural: mesto → mest-á" },
    { category: "cases", prompt: "Akuzatív plural of 'muž':", answers: ["mužov"], explanation: "Masculine animate plural: muž → muž-ov (Akuzatív)" },
    { category: "cases", prompt: "What gender is 'žena' (woman)?", answers: ["feminine", "feminínum", "ženský", "F"], explanation: "žena ends in -a → Feminine (ženský rod)" },
    { category: "cases", prompt: "What gender is 'mesto' (city)?", answers: ["neuter", "neutrum", "stredný", "N"], explanation: "mesto ends in -o → Neuter (stredný rod)" },
    { category: "cases", prompt: "What gender is 'muž' (man)?", answers: ["masculine", "maskulínum", "mužský", "M"], explanation: "muž ends in consonant → Masculine (mužský rod)" },
    { category: "cases", prompt: "What gender is 'loď' (ship)?", answers: ["feminine", "feminínum", "ženský", "F"], explanation: "loď → Feminine (ends in soft consonant, ženský rod)" },

    // ============================================
    // PRONOUNS
    // ============================================
    { category: "pronouns", prompt: "Akuzatív of 'ja' (me):", answers: ["ma", "mňa"], explanation: "ja → ma (short) / mňa (with preposition)" },
    { category: "pronouns", prompt: "Akuzatív of 'ty' (you):", answers: ["ťa", "teba"], explanation: "ty → ťa (short) / teba (with preposition)" },
    { category: "pronouns", prompt: "Akuzatív of 'on' (him):", answers: ["ho", "neho"], explanation: "on → ho (short) / neho (with preposition)" },
    { category: "pronouns", prompt: "Akuzatív of 'ona' (her):", answers: ["ju", "ňu"], explanation: "ona → ju (short) / ňu (with preposition)" },
    { category: "pronouns", prompt: "Lokál of 'ja' (about me):", answers: ["mne"], explanation: "ja → o mne (Lokál)" },
    { category: "pronouns", prompt: "Lokál of 'ty' (about you):", answers: ["tebe"], explanation: "ty → o tebe (Lokál)" },
    { category: "pronouns", prompt: "Lokál of 'on' (about him):", answers: ["ňom"], explanation: "on → o ňom (Lokál)" },
    { category: "pronouns", prompt: "Lokál of 'ona' (about her):", answers: ["nej"], explanation: "ona → o nej (Lokál)" },
    { category: "pronouns", prompt: "Inštrumentál of 'ja' (with me):", answers: ["mnou"], explanation: "ja → so mnou (Inštrumentál)" },
    { category: "pronouns", prompt: "Inštrumentál of 'ty' (with you):", answers: ["tebou"], explanation: "ty → s tebou (Inštrumentál)" },
    { category: "pronouns", prompt: "Inštrumentál of 'on' (with him):", answers: ["ním"], explanation: "on → s ním (Inštrumentál)" },
    { category: "pronouns", prompt: "'My car' in Slovak (auto = N):", answers: ["moje auto"], explanation: "Possessive: môj/moja/moje → moje auto (neuter)" },
    { category: "pronouns", prompt: "'My friend' in Slovak (kamarát = M):", answers: ["môj kamarát"], explanation: "Possessive: môj kamarát (masculine)" },
    { category: "pronouns", prompt: "'My room' in Slovak (izba = F):", answers: ["moja izba"], explanation: "Possessive: moja izba (feminine)" },
    { category: "pronouns", prompt: "'Your (ty) car' in Slovak:", answers: ["tvoje auto"], explanation: "Possessive: tvoj/tvoja/tvoje → tvoje auto (neuter)" },
    { category: "pronouns", prompt: "'His car' in Slovak:", answers: ["jeho auto"], explanation: "Possessive: jeho (for on, all genders)" },
    { category: "pronouns", prompt: "'Her room' in Slovak:", answers: ["jej izba"], explanation: "Possessive: jej (for ona, all genders)" },

    // ============================================
    // IRREGULAR VERBS
    // ============================================
    { category: "irregular", prompt: "Conjugate 'byť' (to be) for 'ja':", answers: ["som"], explanation: "byť → (ja) som" },
    { category: "irregular", prompt: "Conjugate 'byť' (to be) for 'ty':", answers: ["si"], explanation: "byť → (ty) si" },
    { category: "irregular", prompt: "Conjugate 'byť' (to be) for 'on/ona/ono':", answers: ["je"], explanation: "byť → (on/ona/ono) je" },
    { category: "irregular", prompt: "Conjugate 'byť' (to be) for 'my':", answers: ["sme"], explanation: "byť → (my) sme" },
    { category: "irregular", prompt: "Conjugate 'byť' (to be) for 'vy':", answers: ["ste"], explanation: "byť → (vy) ste" },
    { category: "irregular", prompt: "Conjugate 'byť' (to be) for 'oni':", answers: ["sú"], explanation: "byť → (oni) sú" },
    { category: "irregular", prompt: "Negate 'som' (I am not):", answers: ["nie som"], explanation: "Negation of byť: nie + form → nie som" },
    { category: "irregular", prompt: "Negate 'je' (is not):", answers: ["nie je"], explanation: "Negation of byť: nie + form → nie je" },
    { category: "irregular", prompt: "Conjugate 'ísť' (to go) for 'ja':", answers: ["idem"], explanation: "ísť → idem (1st person singular)" },
    { category: "irregular", prompt: "Conjugate 'ísť' (to go) for 'oni':", answers: ["idú"], explanation: "ísť → idú (3rd person plural)" },
    { category: "irregular", prompt: "Conjugate 'jesť' (to eat) for 'ja':", answers: ["jem"], explanation: "jesť → jem (1st person singular)" },
    { category: "irregular", prompt: "Conjugate 'jesť' (to eat) for 'oni':", answers: ["jedia"], explanation: "jesť → jedia (3rd person plural)" },
    { category: "irregular", prompt: "Conjugate 'prísť' (to come) for 'ja':", answers: ["prídem"], explanation: "prísť → prídem (1st person singular)" },
    { category: "irregular", prompt: "Conjugate 'stáť' (to stand) for 'ja':", answers: ["stojím"], explanation: "stáť → stojím (1st person singular)" },
    { category: "irregular", prompt: "Conjugate 'odísť' (to leave) for 'ja':", answers: ["odídem"], explanation: "odísť → odídem (1st person singular)" },

    // ============================================
    // MODAL VERBS
    // ============================================
    { category: "modal", prompt: "Conjugate 'chcieť' (to want) for 'ja':", answers: ["chcem"], explanation: "chcieť → chcem (1st person singular)" },
    { category: "modal", prompt: "Conjugate 'chcieť' (to want) for 'oni':", answers: ["chcú"], explanation: "chcieť → chcú (3rd person plural)" },
    { category: "modal", prompt: "Conjugate 'musieť' (must) for 'ja':", answers: ["musím"], explanation: "musieť → musím (1st person singular)" },
    { category: "modal", prompt: "Conjugate 'musieť' (must) for 'oni':", answers: ["musia"], explanation: "musieť → musia (3rd person plural)" },
    { category: "modal", prompt: "Conjugate 'môcť' (can) for 'ja':", answers: ["môžem"], explanation: "môcť → môžem (1st person singular)" },
    { category: "modal", prompt: "Conjugate 'môcť' (can) for 'on':", answers: ["môže"], explanation: "môcť → môže (3rd person singular)" },
    { category: "modal", prompt: "Conjugate 'vedieť' (to know) for 'ja':", answers: ["viem"], explanation: "vedieť → viem (1st person singular)" },
    { category: "modal", prompt: "Conjugate 'vedieť' (to know) for 'oni':", answers: ["vedia"], explanation: "vedieť → vedia (3rd person plural)" },
    { category: "modal", prompt: "Conjugate 'smieť' (may) for 'ja':", answers: ["smiem"], explanation: "smieť → smiem (1st person singular)" },
    { category: "modal", prompt: "Conjugate 'mať' (to have) for 'ja':", answers: ["mám"], explanation: "mať → mám (1st person singular)" },
    { category: "modal", prompt: "Conjugate 'mať' (to have) for 'oni':", answers: ["majú"], explanation: "mať → majú (3rd person plural)" },
    { category: "modal", prompt: "Conjugate 'mať' (to have) for 'ty':", answers: ["máš"], explanation: "mať → máš (2nd person singular)" },

    // ============================================
    // PAST TENSE
    // ============================================
    { category: "past", prompt: "'hovoriť' past tense, ja (male):", answers: ["hovoril som"], explanation: "L-forma + byť: hovoril (M) + som" },
    { category: "past", prompt: "'hovoriť' past tense, ja (female):", answers: ["hovorila som"], explanation: "L-forma + byť: hovorila (F) + som" },
    { category: "past", prompt: "'hovoriť' past tense, on:", answers: ["hovoril"], explanation: "3rd person: just L-forma, no byť → hovoril" },
    { category: "past", prompt: "'hovoriť' past tense, ona:", answers: ["hovorila"], explanation: "3rd person: just L-forma → hovorila" },
    { category: "past", prompt: "'hovoriť' past tense, my:", answers: ["hovorili sme"], explanation: "L-forma plural + byť: hovorili + sme" },
    { category: "past", prompt: "'byť' past tense, ja (male):", answers: ["bol som"], explanation: "byť → bol (M) + som" },
    { category: "past", prompt: "'byť' past tense, ja (female):", answers: ["bola som"], explanation: "byť → bola (F) + som" },
    { category: "past", prompt: "'byť' past tense, oni:", answers: ["boli"], explanation: "byť → boli (3rd person plural, no helper)" },
    { category: "past", prompt: "'ísť' past tense, ja (male):", answers: ["išiel som"], explanation: "ísť → išiel (M) + som" },
    { category: "past", prompt: "'ísť' past tense, ona:", answers: ["išla"], explanation: "ísť → išla (3rd person F, no helper)" },
    { category: "past", prompt: "'jesť' past tense, ja (male):", answers: ["jedol som"], explanation: "jesť → jedol (M) + som" },
    { category: "past", prompt: "'chcieť' past tense, ja (male):", answers: ["chcel som"], explanation: "chcieť → chcel (M) + som" },
    { category: "past", prompt: "'môcť' past tense, ja (male):", answers: ["mohol som"], explanation: "môcť → mohol (M) + som" },
    { category: "past", prompt: "'mať' past tense, ja (female):", answers: ["mala som"], explanation: "mať → mala (F) + som" },
    { category: "past", prompt: "'musieť' past tense, on:", answers: ["musel"], explanation: "musieť → musel (3rd person M, no helper)" },

    // ============================================
    // NUMBERS
    // ============================================
    { category: "numbers", prompt: "How do you say '0' in Slovak?", answers: ["nula"], explanation: "0 = nula" },
    { category: "numbers", prompt: "How do you say '1' in Slovak?", answers: ["jeden", "jedna", "jedno"], explanation: "1 = jeden (M), jedna (F), jedno (N)" },
    { category: "numbers", prompt: "How do you say '2' in Slovak?", answers: ["dva", "dve"], explanation: "2 = dva (M), dve (F/N)" },
    { category: "numbers", prompt: "How do you say '5' in Slovak?", answers: ["päť"], explanation: "5 = päť" },
    { category: "numbers", prompt: "How do you say '10' in Slovak?", answers: ["desať"], explanation: "10 = desať" },
    { category: "numbers", prompt: "How do you say '11' in Slovak?", answers: ["jedenásť"], explanation: "11 = jedenásť" },
    { category: "numbers", prompt: "How do you say '20' in Slovak?", answers: ["dvadsať"], explanation: "20 = dvadsať" },
    { category: "numbers", prompt: "How do you say '100' in Slovak?", answers: ["sto"], explanation: "100 = sto" },
    { category: "numbers", prompt: "How do you say '1000' in Slovak?", answers: ["tisíc"], explanation: "1000 = tisíc" },
    { category: "numbers", prompt: "What is the ordinal for '1' (first)?", answers: ["prvý"], explanation: "1st = prvý" },
    { category: "numbers", prompt: "What is the ordinal for '2' (second)?", answers: ["druhý"], explanation: "2nd = druhý" },
    { category: "numbers", prompt: "What is the ordinal for '3' (third)?", answers: ["tretí"], explanation: "3rd = tretí" },
    { category: "numbers", prompt: "'Two men' in Slovak (muži = M animate):", answers: ["dvaja muži"], explanation: "M animate: use dvaja → dvaja muži" },
    { category: "numbers", prompt: "'Two houses' in Slovak (domy = M inanim.):", answers: ["dva domy"], explanation: "M inanimate: use dva → dva domy" },
    { category: "numbers", prompt: "'Two women' in Slovak (kamarátky = F):", answers: ["dve kamarátky"], explanation: "F/N: use dve → dve kamarátky" }
];
