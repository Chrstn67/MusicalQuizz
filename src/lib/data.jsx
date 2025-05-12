// Données du quiz musical
export const quizData = {
  title: "Quiz Musical - The Voice Edition",
  description: "Testez vos connaissances musicales dans ce quiz !",
  rules: [
    "Le quiz comporte 3 manches de 30 questions chacune",
    "Chaque manche a un niveau de difficulté croissant",
    "Manche 1: Questions faciles - 1 point par bonne réponse",
    "Manche 2: Questions intermédiaires - 2 points par bonne réponse",
    "Manche 3: Questions difficiles - 3 points par bonne réponse",
    "Toutes les équipes répondent à chaque question",
    "L'équipe avec le plus de points à la fin des 3 manches remporte la partie",
  ],
  rounds: [
    {
      id: 1,
      name: "Manche 1",
      difficulty: "Facile",
      pointsPerQuestion: 1,
      description: "Des questions faciles pour vous échauffer!",
      questions: [
        {
          id: 1,
          question: "Quel artiste a sorti le tube 'Shape of You' en 2017 ?",
          type: "text",
          options: [
            { id: "a", text: "Ed Sheeran" },
            { id: "b", text: "Justin Bieber" },
            { id: "c", text: "Bruno Mars" },
            { id: "d", text: "The Weeknd" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Ed Sheeran qui a sorti 'Shape of You' en 2017, l'un des singles les plus vendus de tous les temps.",
        },
        {
          id: 2,
          question: "Quel groupe a chanté 'Heat Waves' en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "Maroon 5" },
            { id: "b", text: "Glass Animals" },
            { id: "c", text: "Imagine Dragons" },
            { id: "d", text: "Coldplay" },
          ],
          correctAnswer: "b",
          explanation:
            "Glass Animals a sorti 'Heat Waves' en 2020, qui est devenu un énorme succès international.",
        },
        {
          id: 3,
          question: "Quelle chanteuse a interprété 'Bad Guy' en 2019 ?",
          type: "text",
          options: [
            { id: "a", text: "Ariana Grande" },
            { id: "b", text: "Taylor Swift" },
            { id: "c", text: "Billie Eilish" },
            { id: "d", text: "Selena Gomez" },
          ],
          correctAnswer: "c",
          explanation:
            "Billie Eilish a sorti 'Bad Guy' en 2019, qui est devenu un énorme succès mondial.",
        },
        {
          id: 4,
          question: "Quel est le vrai prénom de la chanteuse Rihanna ?",
          type: "text",
          options: [
            { id: "a", text: "Robyn" },
            { id: "b", text: "Rachel" },
            { id: "c", text: "Rebecca" },
            { id: "d", text: "Rita" },
          ],
          correctAnswer: "a",
          explanation: "Le vrai nom de Rihanna est Robyn Rihanna Fenty.",
        },
        {
          id: 5,
          question: "Qui a chanté 'Stay' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Dua Lipa" },
            { id: "b", text: "Justin Bieber" },
            { id: "c", text: "The Kid LAROI" },
            { id: "d", text: "The Kid LAROI et Justin Bieber" },
          ],
          correctAnswer: "d",
          explanation:
            "C'était The Kid LAROI en collaboration avec Justin Bieber sur la chanson 'Stay'.",
        },
        {
          id: 6,
          question: "Quel groupe a sorti l'album 'AM' en 2013 ?",
          type: "text",
          options: [
            { id: "a", text: "Coldplay" },
            { id: "b", text: "Arctic Monkeys" },
            { id: "c", text: "Imagine Dragons" },
            { id: "d", text: "The 1975" },
          ],
          correctAnswer: "b",
          explanation:
            "Arctic Monkeys a sorti l'album 'AM' en 2013, contenant des hits comme 'Do I Wanna Know ?' et 'Why'd You Only Call Me When You're High ?'",
        },
        {
          id: 7,
          question: "Quelle chanteuse a sorti 'Anti-Hero' en 2022 ?",
          type: "text",
          options: [
            { id: "a", text: "Taylor Swift" },
            { id: "b", text: "Adele" },
            { id: "c", text: "Beyoncé" },
            { id: "d", text: "Lady Gaga" },
          ],
          correctAnswer: "a",
          explanation:
            "Taylor Swift a sorti 'Anti-Hero' en 2022 dans son album 'Midnights'.",
        },
        {
          id: 8,
          question: "Qui a chanté 'Easy On Me' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Dua Lipa" },
            { id: "b", text: "Adele" },
            { id: "c", text: "Beyoncé" },
            { id: "d", text: "Rihanna" },
          ],
          correctAnswer: "b",
          explanation:
            "Adele a sorti 'Easy On Me' en 2021, son premier single après six ans d'absence.",
        },
        {
          id: 9,
          question:
            "Quel artiste français a sorti 'Tout oublier' avec Angèle en 2018 ?",
          type: "text",
          options: [
            { id: "a", text: "Orelsan" },
            { id: "b", text: "Roméo Elvis" },
            { id: "c", text: "Nekfeu" },
            { id: "d", text: "Soprano" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Roméo Elvis, le frère d'Angèle, qui a collaboré avec elle sur 'Tout oublier' en 2018.",
        },
        {
          id: 10,
          question: "Quel groupe a sorti la chanson 'Stressed Out' en 2015 ?",
          type: "text",
          options: [
            { id: "a", text: "Imagine Dragons" },
            { id: "b", text: "Fall Out Boy" },
            { id: "c", text: "Twenty One Pilots" },
            { id: "d", text: "Panic! At The Disco" },
          ],
          correctAnswer: "c",
          explanation:
            "Twenty One Pilots a sorti 'Stressed Out' en 2015, qui est devenu l'un de leurs plus grands succès.",
        },
        {
          id: 11,
          question:
            "Quelle chanteuse a interprété la chanson du film 'Titanic' ?",
          type: "text",
          options: [
            { id: "a", text: "Whitney Houston" },
            { id: "b", text: "Mariah Carey" },
            { id: "c", text: "Céline Dion" },
            { id: "d", text: "Madonna" },
          ],
          correctAnswer: "c",
          explanation:
            "Céline Dion a interprété 'My Heart Will Go On', la chanson thème du film Titanic sorti en 1997.",
        },
        {
          id: 12,
          question: "Qui a chanté 'Flowers' sorti en 2023 ?",
          type: "text",
          options: [
            { id: "a", text: "Dua Lipa" },
            { id: "b", text: "Miley Cyrus" },
            { id: "c", text: "Selena Gomez" },
            { id: "d", text: "Taylor Swift" },
          ],
          correctAnswer: "b",
          explanation: "Miley Cyrus a sorti 'Flowers' en 2023.",
        },
        {
          id: 13,
          question: "Qui a chanté 'Watermelon Sugar' en 2019 ?",
          type: "text",
          options: [
            { id: "a", text: "Shawn Mendes" },
            { id: "b", text: "Harry Styles" },
            { id: "c", text: "Niall Horan" },
            { id: "d", text: "Lewis Capaldi" },
          ],
          correctAnswer: "b",
          explanation:
            "Harry Styles a sorti 'Watermelon Sugar' en 2019, qui est devenu son premier single numéro un aux États-Unis.",
        },
        {
          id: 14,
          question: "Quel duo a sorti 'Señorita' en 2019 ?",
          type: "text",
          options: [
            { id: "a", text: "Shawn Mendes et Camila Cabello" },
            { id: "b", text: "Justin Bieber et Selena Gomez" },
            { id: "c", text: "Charlie Puth et Meghan Trainor" },
            { id: "d", text: "Ed Sheeran et Beyoncé" },
          ],
          correctAnswer: "a",
          explanation:
            "Shawn Mendes et Camila Cabello ont collaboré sur 'Señorita' en 2019.",
        },
        {
          id: 15,
          question: "Quel artiste a sorti l'album 'DAMN.' en 2017 ?",
          type: "text",
          options: [
            { id: "a", text: "J. Cole" },
            { id: "b", text: "Drake" },
            { id: "c", text: "Kendrick Lamar" },
            { id: "d", text: "Travis Scott" },
          ],
          correctAnswer: "c",
          explanation:
            "Kendrick Lamar a sorti l'album 'DAMN.' en 2017, qui a remporté le prix Pulitzer de la musique.",
        },
        {
          id: 16,
          question: "Quel groupe coréen a sorti 'Dynamite' en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "BLACKPINK" },
            { id: "b", text: "BTS" },
            { id: "c", text: "TWICE" },
            { id: "d", text: "EXO" },
          ],
          correctAnswer: "b",
          explanation:
            "BTS a sorti 'Dynamite' en 2020, leur premier single entièrement en anglais.",
        },
        {
          id: 17,
          question: "Quel groupe a sorti la chanson 'Believer' en 2017 ?",
          type: "text",
          options: [
            { id: "a", text: "Coldplay" },
            { id: "b", text: "Imagine Dragons" },
            { id: "c", text: "OneRepublic" },
            { id: "d", text: "Maroon 5" },
          ],
          correctAnswer: "b",
          explanation: "Imagine Dragons a sorti 'Believer' en 2017.",
        },
        {
          id: 18,
          question: "Qui a chanté 'Blinding Lights' sorti en 2019 ?",
          type: "text",
          options: [
            { id: "a", text: "Post Malone" },
            { id: "b", text: "Bruno Mars" },
            { id: "c", text: "The Weeknd" },
            { id: "d", text: "Justin Timberlake" },
          ],
          correctAnswer: "c",
          explanation:
            "The Weeknd a sorti 'Blinding Lights' en 2019, qui est devenu l'un des singles les plus populaires de tous les temps.",
        },
        {
          id: 19,
          question: "Qui chante 'Dance The Night' dans le film Barbie (2023) ?",
          type: "text",
          options: [
            { id: "a", text: "Dua Lipa" },
            { id: "b", text: "Billie Eilish" },
            { id: "c", text: "Charli XCX" },
            { id: "d", text: "Nicki Minaj" },
          ],
          correctAnswer: "a",
          explanation:
            "Dua Lipa chante 'Dance The Night' qui fait partie de la bande originale du film Barbie sorti en 2023.",
        },
        {
          id: 20,
          question:
            "Quel artiste a sorti 'Sunflower' pour le film Spider-Man: Into the Spider-Verse ?",
          type: "text",
          options: [
            { id: "a", text: "Post Malone et Swae Lee" },
            { id: "b", text: "Khalid et Normani" },
            { id: "c", text: "Lil Nas X et Billy Ray Cyrus" },
            { id: "d", text: "DJ Khaled et Justin Bieber" },
          ],
          correctAnswer: "a",
          explanation:
            "Post Malone et Swae Lee ont collaboré sur 'Sunflower' pour le film Spider-Man: Into the Spider-Verse en 2018.",
        },
        {
          id: 21,
          question:
            "Quelle chanteuse a sorti le single 'Whenever, Whenever' en 2001 ?",
          type: "text",
          options: [
            { id: "a", text: "Mariah Carey" },
            { id: "b", text: "Katy Perry" },
            { id: "c", text: "Shakira" },
            { id: "d", text: "Lady Gaga" },
          ],
          correctAnswer: "c",
          explanation:
            "Shakira a sorti 'Whenever, Whenever' en 2001, qui est encore aujourd'hui, un de ses plus grands succès.",
        },
        {
          id: 22,
          question: "Qui a chanté 'Shake It Off' sorti en 2014 ?",
          type: "text",
          options: [
            { id: "a", text: "Katy Perry" },
            { id: "b", text: "Taylor Swift" },
            { id: "c", text: "Selena Gomez" },
            { id: "d", text: "Ariana Grande" },
          ],
          correctAnswer: "b",
          explanation:
            "Taylor Swift a sorti 'Shake It Off' en 2014 dans son album '1989'.",
        },
        {
          id: 23,
          question: "Quel groupe français a sorti 'Dernière Danse' en 2013 ?",
          type: "text",
          options: [
            { id: "a", text: "Indochine" },
            { id: "b", text: "BB Brunes" },
            { id: "c", text: "Indila" },
            { id: "d", text: "Fréro Delavega" },
          ],
          correctAnswer: "c",
          explanation:
            "Indila a sorti 'Dernière Danse' en 2013, un énorme succès international.",
        },
        {
          id: 24,
          question:
            "Quel artiste a sorti 'MONTERO (Call Me By Your Name)' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Lil Nas X" },
            { id: "b", text: "Doja Cat" },
            { id: "c", text: "The Weeknd" },
            { id: "d", text: "Jack Harlow" },
          ],
          correctAnswer: "a",
          explanation:
            "Lil Nas X a sorti 'MONTERO (Call Me By Your Name)' en 2021.",
        },
        {
          id: 25,
          question: "Quel groupe a sorti la chanson 'Counting Stars' en 2013 ?",
          type: "text",
          options: [
            { id: "a", text: "Maroon 5" },
            { id: "b", text: "OneRepublic" },
            { id: "c", text: "Imagine Dragons" },
            { id: "d", text: "Coldplay" },
          ],
          correctAnswer: "b",
          explanation:
            "OneRepublic a sorti 'Counting Stars' en 2013, devenu l'un de leurs plus grands succès.",
        },
        {
          id: 26,
          question: "Quelle artiste a chanté 'drivers license' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Billie Eilish" },
            { id: "b", text: "Olivia Rodrigo" },
            { id: "c", text: "Sabrina Carpenter" },
            { id: "d", text: "Madison Beer" },
          ],
          correctAnswer: "b",
          explanation:
            "Olivia Rodrigo a sorti 'drivers license' en 2021, son premier single qui a été un énorme succès.",
        },
        {
          id: 27,
          question: "Qui a chanté 'Uptown Funk' sorti en 2014 ?",
          type: "text",
          options: [
            { id: "a", text: "Bruno Mars" },
            { id: "b", text: "Mark Ronson et Bruno Mars" },
            { id: "c", text: "Justin Timberlake" },
            { id: "d", text: "Pharrell Williams" },
          ],
          correctAnswer: "b",
          explanation:
            "Mark Ronson a sorti 'Uptown Funk' en 2014 avec Bruno Mars au chant.",
        },
        {
          id: 28,
          question: "Quelle chanteuse a interprété 'Rolling in the Deep' ?",
          type: "text",
          options: [
            { id: "a", text: "Amy Winehouse" },
            { id: "b", text: "Adele" },
            { id: "c", text: "Florence Welch" },
            { id: "d", text: "Duffy" },
          ],
          correctAnswer: "b",
          explanation:
            "Adele a sorti 'Rolling in the Deep' en 2010 dans son album '21'.",
        },
        {
          id: 29,
          question: "Quel artiste a sorti 'Save Your Tears' en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "Justin Bieber" },
            { id: "b", text: "The Weeknd" },
            { id: "c", text: "Post Malone" },
            { id: "d", text: "Drake" },
          ],
          correctAnswer: "b",
          explanation:
            "The Weeknd a sorti 'Save Your Tears' en 2020 dans son album 'After Hours'.",
        },
        {
          id: 30,
          question: "Qui a chanté 'Unholy' sorti en 2022 ?",
          type: "text",
          options: [
            { id: "a", text: "Sam Smith et Kim Petras" },
            { id: "b", text: "Dua Lipa et Elton John" },
            { id: "c", text: "Lady Gaga et Ariana Grande" },
            { id: "d", text: "Miley Cyrus et Dua Lipa" },
          ],
          correctAnswer: "a",
          explanation:
            "Sam Smith et Kim Petras ont sorti 'Unholy' en 2022, qui est devenu un énorme succès mondial.",
        },
      ],
    },
    {
      id: 2,
      name: "Manche 2",
      difficulty: "Intermédiaire",
      pointsPerQuestion: 2,
      description: "Le niveau monte d'un cran!",
      questions: [
        {
          id: 1,
          question: "En quelle est la date de naissance de Billie Eilish  ?",
          type: "text",
          options: [
            { id: "a", text: "29 février 1999" },
            { id: "b", text: "27 juillet 2000" },
            { id: "c", text: "18 décembre 2001" },
            { id: "d", text: "6 juin 2002" },
          ],
          correctAnswer: "c",
          explanation:
            "Billie Eilish est née le 18 décembre 2001. (Le 29 février n'existe pas 😜)",
        },
        {
          id: 2,
          question:
            "Quel artiste a le plus de Grammy Awards à ce jour (2024) ?",
          type: "text",
          options: [
            { id: "a", text: "Beyoncé" },
            { id: "b", text: "Quincy Jones" },
            { id: "c", text: "Alison Krauss" },
            { id: "d", text: "Georg Solti" },
          ],
          correctAnswer: "a",
          explanation:
            "Beyoncé détient le record du plus grand nombre de Grammy Awards avec 32 victoires.",
        },
        {
          id: 3,
          question:
            "Quel est le titre de l'album de Taylor Swift qui contient la chanson 'All Too Well (10 Minute Version)' ?",
          type: "text",
          options: [
            { id: "a", text: "Lover" },
            { id: "b", text: "Fearless (Taylor's Version)" },
            { id: "c", text: "Red (Taylor's Version)" },
            { id: "d", text: "Midnights" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est l'album 'Red (Taylor's Version)' de Taylor Swift, sorti en 2021.",
        },
        {
          id: 4,
          question:
            "En 2021, qui remporte l'édition All-Stars de 'The Voice, La Plus Belle Voix  ?'",
          type: "text",
          options: [
            { id: "a", text: "Kendji Girac" },
            { id: "b", text: "Anne Sila" },
            { id: "c", text: "MB14" },
            { id: "d", text: "Louane" },
          ],
          correctAnswer: "b",
          explanation:
            "Anne Sila remporte l'édition All-Stars. De nouveau coachée par Florent Pagny, elle s'était inclinée en 2015 face à Lilian Renaud, lors de la saison 4.",
        },
        {
          id: 5,
          question: "Combien de membres compte le groupe BTS ?",
          type: "text",
          options: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "c",
          explanation:
            "BTS compte 7 membres: Jin, Suga, J-Hope, RM, Jimin, V et Jungkook.",
        },
        {
          id: 6,
          question:
            "Qui a produit la chanson 'Uptown Funk' de Mark Ronson et Bruno Mars ?",
          type: "text",
          options: [
            { id: "a", text: "Pharrell Williams" },
            { id: "b", text: "Mark Ronson" },
            { id: "c", text: "Max Martin" },
            { id: "d", text: "Dr. Dre" },
          ],
          correctAnswer: "b",
          explanation:
            "Mark Ronson a produit 'Uptown Funk' en collaboration avec Bruno Mars.",
        },
        {
          id: 7,
          question: "Quel artiste a sorti 'Human' en 2022 ?",
          type: "text",
          options: [
            { id: "a", text: "Rag'n'Bone Man" },
            { id: "b", text: "Shawn Mendes" },
            { id: "c", text: "Sam Smith" },
            { id: "d", text: "Lewis Capaldi" },
          ],
          correctAnswer: "a",
          explanation:
            "Rag'n'Bone Man a sorti 'Human' en 2016, son premier succès.",
        },
        {
          id: 8,
          question:
            "Quelle chanteuse est connue pour la chanson 'Break My Heart' sortie en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "Dua Lipa" },
            { id: "b", text: "Ariana Grande" },
            { id: "c", text: "Camila Cabello" },
            { id: "d", text: "Halsey" },
          ],
          correctAnswer: "a",
          explanation:
            "Dua Lipa a sorti 'Break My Heart' en 2020 dans son album 'Future Nostalgia'.",
        },
        {
          id: 9,
          question:
            "Quel artiste français a sorti l'album 'Civilisation' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Nekfeu" },
            { id: "b", text: "PNL" },
            { id: "c", text: "Orelsan" },
            { id: "d", text: "Damso" },
          ],
          correctAnswer: "c",
          explanation: "Orelsan a sorti l'album 'Civilisation' en 2021.",
        },
        {
          id: 10,
          question:
            "Quel DJ a collaboré avec Dua Lipa sur 'Electricity' en 2018 ?",
          type: "text",
          options: [
            { id: "a", text: "Calvin Harris" },
            { id: "b", text: "Martin Garrix" },
            { id: "c", text: "Silk City (Diplo et Mark Ronson)" },
            { id: "d", text: "Marshmello" },
          ],
          correctAnswer: "c",
          explanation:
            "Silk City, le duo formé par Diplo et Mark Ronson, a collaboré avec Dua Lipa sur 'Electricity' en 2018.",
        },
        {
          id: 11,
          question:
            "Quel groupe a sorti l'album 'Notes on a Conditional Form' en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "Arctic Monkeys" },
            { id: "b", text: "The 1975" },
            { id: "c", text: "Tame Impala" },
            { id: "d", text: "Vampire Weekend" },
          ],
          correctAnswer: "b",
          explanation:
            "The 1975 a sorti l'album 'Notes on a Conditional Form' en 2020.",
        },
        {
          id: 12,
          question: "Quel est le vrai nom de Lady Gaga ?",
          type: "text",
          options: [
            { id: "a", text: "Stefani Germanotta" },
            { id: "b", text: "Ashley Frangipane" },
            { id: "c", text: "Elizabeth Grant" },
            { id: "d", text: "Alecia Moore" },
          ],
          correctAnswer: "a",
          explanation:
            "Le vrai nom de Lady Gaga est Stefani Joanne Angelina Germanotta.",
        },
        {
          id: 13,
          question: "Quel artiste a sorti la chanson 'Peaches' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Shawn Mendes" },
            { id: "b", text: "Justin Bieber" },
            { id: "c", text: "The Kid LAROI" },
            { id: "d", text: "Charlie Puth" },
          ],
          correctAnswer: "b",
          explanation:
            "Justin Bieber a sorti 'Peaches' en 2021, en collaboration avec Daniel Caesar et Giveon.",
        },
        {
          id: 14,
          question:
            "Quel est le groupe de K-pop féminin qui a sorti 'Pink Venom' en 2022 ?",
          type: "text",
          options: [
            { id: "a", text: "TWICE" },
            { id: "b", text: "Red Velvet" },
            { id: "c", text: "BLACKPINK" },
            { id: "d", text: "ITZY" },
          ],
          correctAnswer: "c",
          explanation:
            "BLACKPINK a sorti 'Pink Venom' en 2022 dans leur album 'Born Pink'.",
        },
        {
          id: 15,
          question:
            "Quel artiste a collaboré avec Coldplay sur la chanson 'My Universe' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "BTS" },
            { id: "b", text: "Imagine Dragons" },
            { id: "c", text: "Maroon 5" },
            { id: "d", text: "The Chainsmokers" },
          ],
          correctAnswer: "a",
          explanation:
            "BTS a collaboré avec Coldplay sur 'My Universe' en 2021.",
        },
        {
          id: 16,
          question: "Quelle chanteuse française a sorti 'La grenade' en 2018 ?",
          type: "text",
          options: [
            { id: "a", text: "Aya Nakamura" },
            { id: "b", text: "Clara Luciani" },
            { id: "c", text: "Angèle" },
            { id: "d", text: "Louane" },
          ],
          correctAnswer: "b",
          explanation:
            "Clara Luciani a sorti 'La grenade' en 2018, l'un de ses plus grands succès.",
        },
        {
          id: 17,
          question:
            "Quel grupe français a sorti l'album 'Babel, Babel' en 2024 ?",
          type: "text",
          options: [
            { id: "a", text: "Téléphone" },
            { id: "b", text: "Shaka Ponk" },
            { id: "c", text: "Trois Cafés Gourmands" },
            { id: "d", text: "Indochine" },
          ],
          correctAnswer: "d",
          explanation: "Indochine a sorti l'album 'Babel, Babel' en 2024.",
        },
        {
          id: 18,
          question: "De quel pays vient le groupe Little Mix ?",
          type: "text",
          options: [
            { id: "a", text: "États-Unis" },
            { id: "b", text: "Australie" },
            { id: "c", text: "Royaume-Uni" },
            { id: "d", text: "Canada" },
          ],
          correctAnswer: "c",
          explanation:
            "Little Mix est un groupe britannique formé en 2011 lors de la huitième saison du X Factor UK.",
        },
        {
          id: 19,
          question: "Quel titre a lancé la carrière de Lil Nas X en 2019 ?",
          type: "text",
          options: [
            { id: "a", text: "MONTERO (Call Me By Your Name)" },
            { id: "b", text: "Old Town Road" },
            { id: "c", text: "Industry Baby" },
            { id: "d", text: "Panini" },
          ],
          correctAnswer: "b",
          explanation:
            "Lil Nas X a connu le succès avec 'Old Town Road' en 2019, qui est devenu viral sur TikTok avant de battre des records dans les charts.",
        },
        {
          id: 20,
          question: "Qui a sorti l'album 'Le bruit de l'aube' en 2015 ?",
          type: "text",
          options: [
            { id: "a", text: "Zazie" },
            { id: "b", text: "Lilian Renaud" },
            { id: "c", text: "Vianney" },
            { id: "d", text: "Marina Kaye" },
          ],
          correctAnswer: "b",
          explanation:
            "Lilian Renaud a sorti l'album 'Le bruit de l'aube' en 2015, son premier album studio.",
        },
        {
          id: 21,
          question:
            "Quel groupe français a sorti la chanson 'Ton combat' en 2017 ?",
          type: "text",
          options: [
            { id: "a", text: "Il Cello" },
            { id: "b", text: "Les Enfoirés" },
            { id: "c", text: "IAM" },
            { id: "d", text: "Arcadian" },
          ],
          correctAnswer: "d",
          explanation:
            "Arcadian a sorti 'Ton combat' en 2017 dans son album 'Arcadian'.",
        },
        {
          id: 22,
          question: "Quel artiste belge a sorti l'album 'Brol' en 2018 ?",
          type: "text",
          options: [
            { id: "a", text: "Stromae" },
            { id: "b", text: "Angèle" },
            { id: "c", text: "Loïc Nottet" },
            { id: "d", text: "Roméo Elvis" },
          ],
          correctAnswer: "b",
          explanation:
            "Angèle a sorti l'album 'Brol' en 2018, qui contient des titres comme 'Tout oublier' et 'Balance ton quoi'.",
        },
        {
          id: 23,
          question: "Qui a chanté 'Happier Than Ever' sorti en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Taylor Swift" },
            { id: "b", text: "Billie Eilish" },
            { id: "c", text: "Sabrina Carpenter" },
            { id: "d", text: "Olivia Rodrigo" },
          ],
          correctAnswer: "b",
          explanation:
            "Billie Eilish a sorti 'Happier Than Ever' en 2021, titre éponyme de son deuxième album studio.",
        },
        {
          id: 24,
          question:
            "Quel rappeur américain a sorti l'album 'Certified Lover Boy' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Kanye West" },
            { id: "b", text: "Drake" },
            { id: "c", text: "Travis Scott" },
            { id: "d", text: "J. Cole" },
          ],
          correctAnswer: "b",
          explanation:
            "Drake a sorti l'album 'Certified Lover Boy' en septembre 2021.",
        },
        {
          id: 25,
          question: "Qui a sorti le titre 'You broke me First' en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "Olivia Rodrigo" },
            { id: "b", text: "Billie Eilish" },
            { id: "c", text: "Tate McRae" },
            { id: "d", text: "Sabrina Carpenter" },
          ],
          correctAnswer: "c",
          explanation:
            "Tate McRae a sorti 'You Broke Me First' en 2020 dans son EP 'Too Young to Be Sad'.",
        },
        {
          id: 26,
          question:
            "Quel groupe britannique a sorti l'album 'Music of the Spheres' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Muse" },
            { id: "b", text: "Coldplay" },
            { id: "c", text: "Arctic Monkeys" },
            { id: "d", text: "The 1975" },
          ],
          correctAnswer: "b",
          explanation:
            "Coldplay a sorti l'album 'Music of the Spheres' en 2021.",
        },
        {
          id: 27,
          question: "Quelle artiste a sorti 'positions' en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "Ariana Grande" },
            { id: "b", text: "Doja Cat" },
            { id: "c", text: "Nicki Minaj" },
            { id: "d", text: "Megan Thee Stallion" },
          ],
          correctAnswer: "a",
          explanation:
            "Ariana Grande a sorti 'positions' en 2020, titre éponyme de son sixième album studio.",
        },
        {
          id: 28,
          question:
            "Quel DJ a collaboré avec Justin Bieber sur 'Stay' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "DJ Snake" },
            { id: "b", text: "Marshmello" },
            { id: "c", text: "The Kid LAROI" },
            { id: "d", text: "Martin Garrix" },
          ],
          correctAnswer: "c",
          explanation:
            "The Kid LAROI a collaboré avec Justin Bieber sur 'Stay' en 2021.",
        },
        {
          id: 29,
          question: "Quelle chanteuse a sorti l'album 'Planet Her' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Saweetie" },
            { id: "b", text: "Megan Thee Stallion" },
            { id: "c", text: "Doja Cat" },
            { id: "d", text: "SZA" },
          ],
          correctAnswer: "c",
          explanation:
            "Doja Cat a sorti l'album 'Planet Her' en 2021, qui contient des hits comme 'Kiss Me More' et 'Need to Know'.",
        },
        {
          id: 30,
          question: "Qui a chanté 'Call Me By Your Name' sorti en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Lil Nas X" },
            { id: "b", text: "Tyler, The Creator" },
            { id: "c", text: "Frank Ocean" },
            { id: "d", text: "Troye Sivan" },
          ],
          correctAnswer: "a",
          explanation:
            "Lil Nas X a sorti 'MONTERO (Call Me By Your Name)' en 2021.",
        },
      ],
    },
    {
      id: 3,
      name: "Manche 3",
      difficulty: "Difficile",
      pointsPerQuestion: 3,
      description: "À vos méninges, c'est la manche finale!",
      questions: [
        {
          id: 1,
          question:
            "Quelle chanson de Billie Eilish a remporté le Grammy Award de la Chanson de l'Année en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "when the party's over" },
            { id: "b", text: "bad guy" },
            { id: "c", text: "bury a friend" },
            { id: "d", text: "everything i wanted" },
          ],
          correctAnswer: "b",
          explanation:
            "Billie Eilish a remporté le Grammy Award de la Chanson de l'Année en 2020 avec 'bad guy'.",
        },
        {
          id: 2,
          question:
            "Qui a produit l'album 'Renaissance' de Beyoncé sorti en 2022 ?",
          type: "text",
          options: [
            { id: "a", text: "The-Dream et Beyoncé" },
            { id: "b", text: "Max Martin" },
            { id: "c", text: "Jack Antonoff" },
            { id: "d", text: "Pharrell Williams" },
          ],
          correctAnswer: "a",
          explanation:
            "The-Dream et Beyoncé sont les principaux producteurs de l'album 'Renaissance' sorti en 2022.",
        },
        {
          id: 3,
          question: "Quel album de The Weeknd contient la chanson 'Starboy' ?",
          type: "text",
          options: [
            { id: "a", text: "Beauty Behind the Madness" },
            { id: "b", text: "Starboy" },
            { id: "c", text: "After Hours" },
            { id: "d", text: "Dawn FM" },
          ],
          correctAnswer: "b",
          explanation:
            "La chanson 'Starboy' est le titre éponyme de l'album 'Starboy' de The Weeknd sorti en 2016.",
        },
        {
          id: 4,
          question:
            "Sur quel album de Rosalía trouve-t-on la chanson 'DESPECHÁ' ?",
          type: "text",
          options: [
            { id: "a", text: "El Mal Querer" },
            { id: "b", text: "MOTOMAMI" },
            { id: "c", text: "Los Ángeles" },
            { id: "d", text: "MOTOMAMI+" },
          ],
          correctAnswer: "d",
          explanation:
            "'DESPECHÁ' est sortie en 2022 en tant que single et a été ajoutée à la version étendue 'MOTOMAMI+' de Rosalía.",
        },
        {
          id: 5,
          question:
            "Quel est le premier album de Drake à atteindre la première place des charts américains ?",
          type: "text",
          options: [
            { id: "a", text: "Thank Me Later" },
            { id: "b", text: "Take Care" },
            { id: "c", text: "Nothing Was the Same" },
            { id: "d", text: "Views" },
          ],
          correctAnswer: "a",
          explanation:
            "Le premier album studio de Drake, 'Thank Me Later' (2010), a atteint la première place des charts américains.",
        },
        {
          id: 6,
          question: "Combien de membres composent le groupe BLACKPINK ?",
          type: "text",
          options: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "BLACKPINK est composé de 4 membres : Jisoo, Jennie, Rosé et Lisa.",
        },
        {
          id: 7,
          question:
            "Quel artiste détient le record du plus grand nombre de streams en une journée sur Spotify ?",
          type: "text",
          options: [
            { id: "a", text: "Drake" },
            { id: "b", text: "Taylor Swift" },
            { id: "c", text: "The Weeknd" },
            { id: "d", text: "Bad Bunny" },
          ],
          correctAnswer: "b",
          explanation:
            "Taylor Swift a battu ce record en 2022 avec la sortie de son album 'Midnights'.",
        },
        {
          id: 8,
          question:
            "Qui a collaboré avec Post Malone sur la chanson 'Rockstar' ?",
          type: "text",
          options: [
            { id: "a", text: "21 Savage" },
            { id: "b", text: "Travis Scott" },
            { id: "c", text: "Young Thug" },
            { id: "d", text: "Future" },
          ],
          correctAnswer: "a",
          explanation:
            "Post Malone a collaboré avec 21 Savage sur 'Rockstar' en 2017.",
        },
        {
          id: 9,
          question: "Quelle chanteuse a sorti l'album 'Chromatica' en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "Katy Perry" },
            { id: "b", text: "Lady Gaga" },
            { id: "c", text: "Ariana Grande" },
            { id: "d", text: "Dua Lipa" },
          ],
          correctAnswer: "b",
          explanation: "Lady Gaga a sorti l'album 'Chromatica' en 2020.",
        },
        {
          id: 10,
          question: "Qui a produit la chanson 'Industry Baby' de Lil Nas X ?",
          type: "text",
          options: [
            { id: "a", text: "Take a Daytrip" },
            { id: "b", text: "Kanye West" },
            { id: "c", text: "Jack Harlow" },
            { id: "d", text: "Metro Boomin" },
          ],
          correctAnswer: "b",
          explanation:
            "Kanye West a produit 'Industry Baby' de Lil Nas X en collaboration avec Take a Daytrip.",
        },
        {
          id: 11,
          question:
            "Quelle chanteuse britannique a sorti l'album '30' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Adele" },
            { id: "b", text: "Amy Winehouse" },
            { id: "c", text: "Dua Lipa" },
            { id: "d", text: "Jorja Smith" },
          ],
          correctAnswer: "a",
          explanation:
            "Adele a sorti l'album '30' en 2021, son quatrième album studio.",
        },
        {
          id: 12,
          question:
            "Quelle est la première chanson d'un groupe de K-pop à atteindre la première place du Billboard Hot 100 ?",
          type: "text",
          options: [
            { id: "a", text: "Boy With Luv - BTS" },
            { id: "b", text: "Dynamite - BTS" },
            { id: "c", text: "How You Like That - BLACKPINK" },
            { id: "d", text: "LALISA - Lisa" },
          ],
          correctAnswer: "b",
          explanation:
            "'Dynamite' de BTS est devenue la première chanson d'un groupe de K-pop à atteindre la première place du Billboard Hot 100 en 2020.",
        },
        {
          id: 13,
          question:
            "Qui a écrit la chanson 'Drivers License' d'Olivia Rodrigo ?",
          type: "text",
          options: [
            { id: "a", text: "Olivia Rodrigo et Taylor Swift" },
            { id: "b", text: "Olivia Rodrigo et Jack Antonoff" },
            { id: "c", text: "Olivia Rodrigo et Dan Nigro" },
            { id: "d", text: "Olivia Rodrigo et Max Martin" },
          ],
          correctAnswer: "c",
          explanation:
            "Olivia Rodrigo a co-écrit 'Drivers License' avec Dan Nigro, qui l'a également produite.",
        },
        {
          id: 14,
          question: "Quel artiste a sorti l'album 'Justice' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Shawn Mendes" },
            { id: "b", text: "Justin Bieber" },
            { id: "c", text: "The Kid LAROI" },
            { id: "d", text: "Charlie Puth" },
          ],
          correctAnswer: "b",
          explanation: "Justin Bieber a sorti l'album 'Justice' en 2021.",
        },
        {
          id: 15,
          question: "Quelle chanteuse a chanté 'Super Bass' en 2011 ?",
          type: "text",
          options: [
            { id: "a", text: "Elton John" },
            { id: "b", text: "Shakira" },
            { id: "c", text: "Nicki Minaj" },
            { id: "d", text: "Reba Entire" },
          ],
          correctAnswer: "c",
          explanation: "Nicki Minaj a sorti 'Super Bass' en 2011.",
        },
        {
          id: 16,
          question: "Quel album de Kendrick Lamar contient la chanson 'N95' ?",
          type: "text",
          options: [
            { id: "a", text: "DAMN." },
            { id: "b", text: "To Pimp a Butterfly" },
            { id: "c", text: "Mr. Morale & the Big Steppers" },
            { id: "d", text: "good kid, m.A.A.d city" },
          ],
          correctAnswer: "c",
          explanation:
            "'N95' est une chanson de l'album 'Mr. Morale & the Big Steppers' de Kendrick Lamar sorti en 2022.",
        },
        {
          id: 17,
          question:
            "Qui a remporté le Grammy Award de l'Album de l'Année en 2018 ?",
          type: "text",
          options: [
            { id: "a", text: "Bruno Mars" },
            { id: "b", text: "Mika" },
            { id: "c", text: "Daft Punk" },
            { id: "d", text: "BTS" },
          ],
          correctAnswer: "a",
          explanation:
            "Bruno Mars a remporté le Grammy Award de l'Album de l'Année en 2023 pour '24K Magic'.",
        },
        {
          id: 18,
          question:
            "Quel artiste français a collaboré avec Dua Lipa sur le remix de 'Fever' en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "Orelsan" },
            { id: "b", text: "Angèle" },
            { id: "c", text: "Aya Nakamura" },
            { id: "d", text: "Gims" },
          ],
          correctAnswer: "b",
          explanation:
            "Angèle a collaboré avec Dua Lipa sur le remix de 'Fever' en 2020.",
        },
        {
          id: 19,
          question:
            "Quelle chanteuse a interprété la chanson du film 'No Time To Die' de James Bond ?",
          type: "text",
          options: [
            { id: "a", text: "Adele" },
            { id: "b", text: "Billie Eilish" },
            { id: "c", text: "Sam Smith" },
            { id: "d", text: "Lady Gaga" },
          ],
          correctAnswer: "b",
          explanation:
            "Billie Eilish a interprété la chanson 'No Time To Die' pour le film James Bond du même nom en 2020.",
        },
        {
          id: 20,
          question:
            "Quel rappeur américain a sorti l'album 'Astroworld' en 2018 ?",
          type: "text",
          options: [
            { id: "a", text: "Drake" },
            { id: "b", text: "Travis Scott" },
            { id: "c", text: "Kendrick Lamar" },
            { id: "d", text: "Post Malone" },
          ],
          correctAnswer: "b",
          explanation: "Travis Scott a sorti l'album 'Astroworld' en 2018.",
        },
        {
          id: 21,
          question:
            "Quel est le premier single de Harry Styles en tant qu'artiste solo ?",
          type: "text",
          options: [
            { id: "a", text: "Sign of the Times" },
            { id: "b", text: "Adore You" },
            { id: "c", text: "Watermelon Sugar" },
            { id: "d", text: "As It Was" },
          ],
          correctAnswer: "a",
          explanation:
            "'Sign of the Times' est le premier single solo de Harry Styles, sorti en 2017.",
        },
        {
          id: 22,
          question: "Qui a composé la musique du film 'Dune' sorti en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Hans Zimmer" },
            { id: "b", text: "John Williams" },
            { id: "c", text: "Ludwig Göransson" },
            { id: "d", text: "Alexandre Desplat" },
          ],
          correctAnswer: "a",
          explanation:
            "Hans Zimmer a composé la musique du film 'Dune' de Denis Villeneuve sorti en 2021.",
        },
        {
          id: 23,
          question:
            "Quel DJ a collaboré avec The Weeknd sur 'Moth To A Flame' en 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "Skrillex" },
            { id: "b", text: "Calvin Harris" },
            { id: "c", text: "Swedish House Mafia" },
            { id: "d", text: "Martin Garrix" },
          ],
          correctAnswer: "c",
          explanation:
            "Swedish House Mafia a collaboré avec The Weeknd sur 'Moth To A Flame' en 2021.",
        },
        {
          id: 24,
          question: "Qui a remporté l'Eurovision 2021 ?",
          type: "text",
          options: [
            { id: "a", text: "France (Barbara Pravi)" },
            { id: "b", text: "Italie (Måneskin)" },
            { id: "c", text: "Suisse (Gjon's Tears)" },
            { id: "d", text: "Islande (Daði og Gagnamagnið)" },
          ],
          correctAnswer: "b",
          explanation:
            "Le groupe italien Måneskin a remporté l'Eurovision 2021 avec la chanson 'Zitti e buoni'.",
        },
        {
          id: 25,
          question:
            "Quelle chanteuse a collaboré avec Lady Gaga sur 'Rain On Me' en 2020 ?",
          type: "text",
          options: [
            { id: "a", text: "Ariana Grande" },
            { id: "b", text: "Beyoncé" },
            { id: "c", text: "Dua Lipa" },
            { id: "d", text: "Billie Eilish" },
          ],
          correctAnswer: "a",
          explanation:
            "Ariana Grande a collaboré avec Lady Gaga sur 'Rain On Me' en 2020, un single de l'album 'Chromatica'.",
        },
        {
          id: 26,
          question: "Quel titre populaire n'appartient PAS à Doja Cat ?",
          type: "text",
          options: [
            { id: "a", text: "Woman" },
            { id: "b", text: "Say So" },
            { id: "c", text: "Streets" },
            { id: "d", text: "Levitating" },
          ],
          correctAnswer: "d",
          explanation:
            "'Levitating' est une chanson de Dua Lipa, pas de Doja Cat.",
        },
        {
          id: 27,
          question: "Quel est le vrai nom de The Weeknd ?",
          type: "text",
          options: [
            { id: "a", text: "Abel Tesfaye" },
            { id: "b", text: "Aubrey Graham" },
            { id: "c", text: "Jacques Webster" },
            { id: "d", text: "Marshall Mathers" },
          ],
          correctAnswer: "a",
          explanation: "Le vrai nom de The Weeknd est Abel Makkonen Tesfaye.",
        },
        {
          id: 28,
          question:
            "Quelle chanson de Michael Jackson est la plus streamée sur Spotify ?",
          type: "text",
          options: [
            { id: "a", text: "Thriller" },
            { id: "b", text: "Beat It" },
            { id: "c", text: "Billie Jean" },
            { id: "d", text: "Smooth Criminal" },
          ],
          correctAnswer: "c",
          explanation:
            "'Billie Jean' est la chanson de Michael Jackson la plus streamée sur Spotify, dépassant même 'Thriller'.",
        },
        {
          id: 29,
          question:
            "Qui est le premier artiste à avoir atteint 100 millions d'auditeurs mensuels sur Spotify ?",
          type: "text",
          options: [
            { id: "a", text: "Drake" },
            { id: "b", text: "Taylor Swift" },
            { id: "c", text: "Ed Sheeran" },
            { id: "d", text: "The Weeknd" },
          ],
          correctAnswer: "d",
          explanation:
            "The Weeknd est devenu le premier artiste à atteindre 100 millions d'auditeurs mensuels sur Spotify en 2023.",
        },
        {
          id: 30,
          question:
            "Quel artiste français détient le record de ventes d'albums des années 2010 ?",
          type: "text",
          options: [
            { id: "a", text: "Stromae" },
            { id: "b", text: "Jul" },
            { id: "c", text: "Aya Nakamura" },
            { id: "d", text: "Soprano" },
          ],
          correctAnswer: "b",
          explanation:
            "Jul détient le record de ventes d'albums en France dans les années 2010, avec une prolificité impressionnante.",
        },
      ],
    },
  ],
};
