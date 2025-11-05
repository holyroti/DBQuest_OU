import { DialogueMap } from './assets.config';

//The full 'Bijles' Tutor session dialogue with Danny, Larissa and Anna. Containing 66+ complete dialogues explaining the 1NF,2NF,3NF theory that the OU teaches

export const dialogues: DialogueMap = {
  introduction: [
    {
      text: "(Gezamelijk): Welkom bij de bijlesstudie van de cursus Database Normalisatie van de OU! Wij zullen je alles uitleggen over de eerste, tweede en derde normaalvorm! Laten we onszelf eerst even voorstellen",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 1
    },
    {
      text: "(Danny): Ik ben Danny en ik weet alles over de eerste normaalvorm (1NV), en leg je dit ook graag uit!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "grin", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Danny): De tweede (NV) en derde normaalvorm (3NV) ben ik nog niet heel erg goed in.. maar gelukkig heb ik daar mijn vrienden: Larissa en Anna voor! Ik stel ze graag aan je voor",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "cry", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "grin", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Larissa): Hoi, ik ben Larissa en super goed in de tweede normaalvorm (2NV), hier leg ik je ook graag van alles over uit!",

      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "smile1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Anna): En ik ben Anna! Ik heb de derde normaalvorm (3NV) onder de knie en wil je ook graag helpen!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        // Animate Danny talking (talking1)
        { index: 0, name: "danny", eyes: "smile", mouth: "smile2", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 5
    },
    {
      text: "(Gezamelijk): En samen kunnen wij je het normaliseren van databases uitleggen van de: ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 6
    },
    {
      text: "(Danny): Eerste!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        // Animate Anna talking
        { index: 2, name: "anna", eyes: "smile", mouth: "smile1", breathe: true }
      ],
      next: 7
    },
    {
      text: "(Larissa): Tweede!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "neutral0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "smile0", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Anna): En derde normaalvorm!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "neutral0", breathe: true },
        // Animate Larissa talking
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 9
    },
    {
      text: "(Anna): Wil je ons helpen met het maken van de puzzels die je kan vinden in het hoofdmenu? Dan zullen we allemaal de normaalvormen snappen!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "neutral0", breathe: true },
        // Animate Larissa talking
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 10
    },
    {
      text: "(Larissa): Per vraag kun je op ons icoontje klikken zodat we de vraag samen kunnen maken als je er zelf niet uitkomt. Bij de eerste normaalvorm kun je Danny spreken, bij de tweede kun je praten met mij, en bij de derde kun je praten met Anna!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        // Animate Larissa talking
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "smile0", breathe: true }
      ],
      next: 11
    },
    {
      text: "(Danny): Laten we nu beginnen bij het begin! Klik op één van onze namen om te leren over de database normaalvormen!",
      background: "assets/novel/main/bg01-hallway.jpg",
      choices: [
        { text: "Danny (1NV)", next: 12 },
        { text: "Larissa (2NV)", next: 38 },
        { text: "Anna (3NV)", next: 48 }
      ],
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        // Animate Larissa talking
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "smile0", breathe: true }
      ],
      next: 12
    }, //index 12 voor Danny
    {
      text: "(Danny): Bij de eerste normaalvorm draait alles om het elimineren van herhalende groepen. Stel je voor dat we een tabel 'Student' hebben met de kolommen 'Student' ,'Cursussen', en woonplaats, waarbij een student meerdere cursussen volgt.",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 13
    },

    {
      text: "(Danny): Jan en Eva zijn beiden studenten. Jan volgt de cursussen Nederlands en Engels, en komt uit Rotterdam. Eva volgt de cursussen Nederlands, Engels, en Frans, en komt uit Utrecht. De Student is hier de Primaire sleutel",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 14,
      table: {
        headers: ["Student (Primaire Sleutel)", "Cursussen", "Woonplaats", "Provincie"],
        rows: [
          [
            "Jan",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"]
              ]
            },
            "Rotterdam", "Zuid-Holland"
          ],
          [
            "Eva",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"],
                ["Frans", "C03"]
              ]
            },
            "Utrecht", "Utrecht"
          ]
        ]
      },
      choices: [
        { text: "Wat is een Primaire sleutel?", next: 35 },
        { text: "Volgende", next: 14 },

      ],
    },

    {
      text: "(Danny): Volgens de eerste normaalvorm valt hier veel aan te passen! De kolom cursussen bevat meerdere waardes: een cursusnaam en een klaslokaal. In de eerste normaalvorm mag je enkel atomaire waardes (één waarde per cel) hebben. Dit hebben wij hier dus niet: De cel 'Cursussen' Bevat 'Nederlands en A01'. ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 15,
      table: {
        headers: ["Student (Primaire Sleutel)", "Cursussen", "Woonplaats", "Provincie"],
        rows: [
          [
            "Jan",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"]
              ]
            },
            "Rotterdam", "Zuid-Holland"
          ],
          [
            "Eva",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"],
                ["Frans", "C03"]
              ]
            },
            "Utrecht", "Utrecht"
          ]
        ]
      }

    },




    {
      text: "(Danny): Aangezien de curssussen Nederlands, Engels en Frans vaker kunnen voorkomen (omdat een ander student dit ook kan volgen), zorgt dit tevens voor 'ongecontroleerde redundantie'. Immers, als de naam van het vak 'Nederlands' verandert in 'NL', dan moet dit voor elke rij van een student apart worden aangepast, in plaats van op één plek! Dit kan je heel makkelijk oplossen door een harde knip te maken door het gedeelte dat meerdere waardes bevat (ons subtabel) en er zijn eigen tabel van te maken. De rest laten we zoals het is, zoals:",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      table: {
        headers: ["Student (Primaire Sleutel)", "Cursussen", "Woonplaats", "Provincie"],
        rows: [
          [
            "Jan",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"]
              ]
            },
            "Rotterdam", "Zuid-Holland"
          ],
          [
            "Eva",
            {
              headers: ["Cursusnaam (Primaire Sleutel)", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"],
                ["Frans", "C03"]
              ]
            },
            "Utrecht", "Utrecht"
          ]
        ]
      },
      next: 16,


    },

    {
      text: "(Danny): Hierdoor ziet de ouder-tabel 'Cursus'  er dus als volgt uit: ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 17,
      table: {
        headers: ["Cursusnaam (Primaire Sleutel)", "Lokaal"],
        rows: [
          ["Nederlands", "A01"],
          ["Engels", "B02"],
          ["Frans", "C03"]
        ]
      }

    },



    {
      text: "(Danny): De 'ongecontroleerde redundantie' is nu opgelost, want mocht het zijn dat het vak Nederlands nu verandert naar 'NL', dan hoeft dit enkel in dit ouder-tabel aangepast te worden! ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 18,
      table: {
        headers: ["Cursusnaam (Primaire sleutel)", "Lokaal"],
        rows: [
          ["Nederlands", "A01"],
          ["Engels", "B02"],
          ["Frans", "C03"]
        ]
      }

    },

    {
      text: "(Danny): Onze oorspronkelijke tabel had origineel een verwijzing naar de Cursussen. Dus dit behouden we ook! Dit heet nu onze kind-tabel (omdat het een verwijzing van de ouder krijgt), en krijgt ook een verwijzing naar de ouder-tabel 'Cursus'. Deze verwijzing heet een 'Foreign Key' of 'Verwijzende Sleutel' ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 19,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      },
      choices: [
        { text: "Wat is een Verwijzende sleutel?", next: 36 },
        { text: "Volgende", next: 19 },

      ],

    },


    {
      text: "(Danny): Let wel op: omdat we in dit voorbeeld twee kolommen hebben (Student en Cursus), hebben wij van beide kolommen een 'Combinatiesleutel' gemaakt. Hierdoor is elke combinatie van Student+Cursus uniek <Jan, Nederlands>, <Jan, Engels>. Als we alleen Student als Primaire sleutel hadden dan waren onze rijen niet uniek! Jan komt dan vaker voor, en een primaire sleutel mag niet vaker dan 1x voorkomen :) Het zou ook mogelijk zijn om in ons voorbeeld 'Woonplaats' een deel van de combinatiesleutel te maken in plaats van 'Cursus', maar laten we het lekker lastig houden! Daar leer je het meeste van!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 20,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      },
      choices: [
        { text: "Wat is een Combinatiesleutel?", next: 37 },
        { text: "Volgende", next: 20 },

      ],

    },

    {
      text: "(Danny): Ik zal je nog een keer onze originele tabel, ouder-tabel en kind-tabel laten zien :) ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 21,


    },



    {
      text: "(Danny): We begonnen dus met de originele Student-tabel dat herhalende groepen en redundantie bevatte (cursussen kwamen vaker voor) ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 22,
      table: {
        headers: ["Student (Primaire Sleutel)", "Cursussen", "Woonplaats"],
        rows: [
          [
            "Jan",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"]
              ]
            },
            "Rotterdam"
          ],
          [
            "Eva",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"],
                ["Frans", "C03"]
              ]
            },
            "Utrecht"
          ]
        ]
      },

    },


    {
      text: "(Danny): We hebben vervolgens de Cursussen gesplitst in een aparte ouder-tabel genaamd Cursus, met zijn eigen Primaire Sleutel.",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 23,
      table: {
        headers: ["Cursusnaam (Primaire sleutel)", "Lokaal"],
        rows: [
          ["Nederlands", "A01"],
          ["Engels", "B02"],
          ["Frans", "C03"]
        ]
      }

    },

    {
      text: "(Danny): En tot slot hebben wij de originele Student-tabel een verwijzing gegeven naar de Cursus-tabel. Omdat de Student een verwijzing naar een cursus had, heet dit tabel het kind-tabel en heet het Cursus-tabel de ouder-tabel",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 24,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      }

    },

    {
      text: "(Danny): Snap je dit of zal ik het herhalen? :)",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 25,
      choices: [
        { text: "Herhalen", next: 12 },
        { text: "Ik snap het", next: 26 },

      ],

    },

    //choice 25 FA
    {
      text: "(Danny): Top! Dan heb ik nog één ding om uit te leggen wat betreft de eerste normaalvorm: Functionele Afhankelijkheden ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 26,
    },




    {
      text: "(Danny): Elke kolom van een tabel met een Primaire sleutel (Cursusnaam), is functioneel afhankelijk van de Primaire / Combinatiesleutel. Dit betekent makkelijk gezegd dat de niet-sleutelkolommen hun eigenschappen krijgen op basis van de sleutelkolom(men).  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 27,

    },

    {
      text: "(Danny): Neem onze tabel 'Cursus'. Hier is de Primaire sleutel 'Cursusnaam' en onze niet-sleutel kolom 'Lokaal'. De Functionele Afhankelijkheid hier is dus dat het lokaal zijn waarde (A01) krijgt door de sleutel (Nederlands). Ook krijgt Lokaal (B02) zijn waarde door de sleutel (Engels) en (C03) krijgt zijn waarde door sleutel (Frans) ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 28,
      table: {
        headers: ["Cursusnaam (Primaire sleutel)", "Lokaal"],
        rows: [
          ["Nederlands", "A01"],
          ["Engels", "B02"],
          ["Frans", "C03"]
        ]
      }
    },


    {
      text: "(Danny): De Sleutelkolom 'Cursusnaam' wordt hier determinant genoemd en de normale kolom 'Lokaal' wordt gedetermineerde genoemd. Kortweg: <Sleutelkolom> →  determineert <normale kolom>. Dus Cursusnaam → determineert Lokaal. En Lokaal wordt gedetermineert door een Cursusnaam. ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 29,
      table: {
        headers: ["Cursusnaam (Primaire sleutel)", "Lokaal"],
        rows: [
          ["Nederlands", "A01"],
          ["Engels", "B02"],
          ["Frans", "C03"]
        ]
      }
    },


    {
      text: "(Danny): Het is heel belangrijk dat een determinant (Cursusnaam) een unieke waarde is! In ons geval is dat ook zo! (Nederlands → A01), (Engels → B02), (Frans → C03). Mocht Nederlands meerdere lokalen determineren zoals (Nederlands → A01) en (Nederlands → A02), dan zijn we eigenlijk aan het denormaliseren, want Nederlands dat meerdere Lokalen heeft is redundant! Dit zou dan weer afgesplitst moeten worden in een ander ouder-kind tabel.   ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 30,
      table: {
        headers: ["Cursusnaam (Primaire sleutel)", "Lokaal"],
        rows: [
          ["Nederlands", "A01"],
          ["Engels", "B02"],
          ["Frans", "C03"]
        ]
      }
    },


    {
      text: "(Danny): Tabel Cursus heeft dus gewenste FA. Laten we naar onze tabel 'Student' kijken waar dit niet zo is! ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 31,

    },

    {
      text: "(Danny): In onze kind-tabel 'Student' hebben we dus de Sleutelcombinatie (Student+Cursus) en een normale kolom Woonplaats. Hier determineert eigenlijk niet de gehele sleutelcombinatie (Student+Cursus) de woonplaats, maar determineert enkel de naam van de student de woonplaats:  (Jan → Rotterdam)  en dit komt 2x voor,  (Eva → Utrecht), en dit komt zelfs 3x voor. De Cursus, en dus ook niet combinatie van Student+Cursus heeft niks met deze FA te maken. Dit heet Partiële sleutelafhankelijkheid en dit zal Larissa je uitleggen, omdat dit bij de tweede normaalvorm hoort! En ook zie ik hier alvast wat voor de derde normaalvorm maar dat houden we nog geheim hihi..   ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 32,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [
          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      }
    },

    {
      text: "(Danny): Hieruit kunnen wij dus wel concluderen dat onze ouder-tabel 'Cursus' en kind-tabel 'Student' beiden hoogstens voldoen aan de Eerste Normaalvorm! Aangezien er geen herhalende groepen aanwezig zijn!  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 33,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam"],
          ["Jan", "Engels", "Rotterdam"],
          ["Eva", "Nederlands", "Utrecht"],
          ["Eva", "Engels", "Utrecht"],
          ["Eva", "Frans", "Utrecht"]
        ]

      }
    },

    {
      text: "(Danny): Was dit duidelijk of zal ik een gedeelte herhalen? ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 34,
      choices: [
        { text: "Herhalende groepen", next: 12 },
        { text: "Functionele Afhankelijkheden", next: 25 },
        { text: "Volgende", next: 34 },


      ],
    },

    {
      text: "(Danny): Top dan was dat het voor mij! Ik hoop dat je de eerste normaalvorm beter snapt :) Je kunt nu kiezen of je door wilt gaan naar de tweede normaalvorm en met Larissa wil spreken, of met Anna om de derde normaalvorm te behandelen",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 35,
      choices: [
        { text: "Larissa (2NV)", next: 38 },
        { text: "Anna (3NV)", next: 48 }
      ],
    },

    //dit is 35 primaire sleutel
    {
      text: "(Danny): Een primaire sleutel is een attribuut of een combinatie van attributen die elke rij in een tabel uniek identificeert. Dit betekent dat geen twee rijen dezelfde waarde voor de primaire sleutel mogen hebben. Bijvoorbeeld, in onze Student-tabel is kolom 'Student' ook de Primaire Sleutel. Wij mogen dus niet meerdere Jans en Eva's hebben! ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 14,
      table: {
        headers: ["Student (Primaire Sleutel)", "Cursussen", "Woonplaats", "Provincie"],
        rows: [
          [
            "Jan",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"]
              ]
            },
            "Rotterdam", "Zuid-Holland"
          ],
          [
            "Eva",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"],
                ["Frans", "C03"]
              ]
            },
            "Utrecht", "Utrecht"
          ]
        ]
      },

    },

    //dit is 36 verwijzende sleutel
    {
      text: "(Danny): Een verwijzende sleutel, ofwel vreemde sleutel, ofwel foreign key, is een kolom in een tabel die verwijst naar de primaire sleutel van een andere tabel. Dit gebruik je om relaties tussen tabellen te leggen zonder dat je gegevens herhaalt. Bijvoorbeeld, in de Student-tabel is de kolom 'Cursus' een verwijzende sleutel die verwijst naar de Cursus-tabel. Hierdoor kun je alle studenten koppelen aan de juiste cursus, terwijl de cursusgegevens slechts één keer in de Cursus-tabel staan. Gewoonlijk wordt de kolomnaam van de verwijzende sleutel de naam van de tabel waar het naar verwijst! Da's lekker makkelijk ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 19,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      },
    },


    //dit is 37 combinatiesleutel
    {
      text: "(Danny):  Soms is één kolom niet voldoende om een rij uniek te identificeren. Dan gebruik je een combinatiesleutel, oftewel een samengestelde sleutel. Neem bijvoorbeeld de Student-tabel: hier kan de combinatie van 'Student' en 'Cursus' als primaire sleutel dienen, omdat een student meerdere cursussen kan volgen, maar de combinatie van student en cursus wel uniek is. Hierdoor onderscheiden we bijvoorbeeld de inschrijving van Jan voor Nederlands van die van Jan voor Engels ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 20,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      },
    },

    //dit is 38, larissa begint hier
    {
      text: "(Larissa): Ik neem het stokje van je over Danny! Je was wel erg lang aan het woord, maar geen zorgen, ik ben zó uitgepraat! :D  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 39,

    },

    //dit is 38, larissa begint hier
    {
      text: "(Larissa): Het belangrijkste wat je moet weten over de tweede normaalvorm is dat een tabel minimaal in de éérste normaalvorm moet zijn! Danny heeft voor ons al de tabel Cursus en Student uitgelegd, we zullen voortborduren op deze tabellen!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 40,

    },

    {
      text: "(Larissa): Laten we kijken naar tabel 'Student'. Danny heeft hier al het e.e.a over uitgelegd, namelijk dat de kolommen Student en Cursus samen de combinatiesleutel zijn, en dat enkel een deel van de sleutelcombinatie, namelijk kolom 'Student' de 'Woonplaats' determineert, en ook dat kolom 'Student' de 'Provincie' determinieert. Danny legde net uit dat het determinant van een FA uniek moet zijn. Hier is dit niet het geval! Zo kun je bijvoorbeeld opmaken dat Jan -> Rotterdam en Jan -> Zuid-Holland 2x in de tabel aanwezig is. En Eva -> Utrecht staat er zelfs 3x in! Dit is redundant!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 41,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      },
    },

    {
      text: "(Larissa): De tweede normaalvorm staat het niet toe dat een 'deel' van de primaire sleutel / sleutelcombinatie een kolom determineert omdat dit soort redundantie dus kan ontstaan en zeker aanwezig is.  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 42,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      },
    },

    {
      text: "(Larissa): Deze afhankelijkheid van een kolom aan een deel van de primaire sleutel heet een 'Partiële Sleutelafhankelijkheid'. Laten we het heel simpel oplossen!  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 43,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      },
    },

    {
      text: "(Larissa): Dit zullen we eigenlijk doen net als Danny deed! We weten dus dat de Student de Woonplaats determineert (dus de Student verwijst naar de Woonplaats). We gaan dus de Woonplaats onderbrengen onder een aparte tabel, genaamd StudentWoonplaats met dezelfde sleutel, namelijk Student en normale kolom Woonplaats.    ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 44,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"]
        ]

      },
    },


    {
      text: "(Larissa): Door de StudentWoonplaats onder te brengen in een aparte tabel, hoeven we maar 1x op te slaan waar Eva en Jan wonen in plaats van meerdere malen in de eerdere student-tabel! Dit tabel wordt dus óók een ouder-tabel, omdat we hier de woonplaatsen en provincies van studenten in kunnen opzoeken. Onze Student-tabel krijgt dus een verwijzing naar deze tabel   ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 45,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"]
        ]

      },
    },

    {
      text: "(Larissa): In de oorspronkelijke Student-tabel zullen we dus de kolomme 'Woonplaats' en 'Provincie' weghalen, omdat dit al aanwezig is in StudentWoonplaats. Onze Combinatiesleutel blijft aanwezig in de Student-tabel, maar wordt nu óók een Verwijzende sleutel, omdat dit nu ook verwijst naar de StudentWoonplaats ;) , hierdoor ziet de tabel er als volgt uit:",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 46,
      table: {
        headers: ["Student (Verwijzende Sleutel + Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)"],
        rows: [

          ["Jan", "Nederlands"],
          ["Jan", "Engels"],
          ["Eva", "Nederlands"],
          ["Eva", "Engels"],
          ["Eva", "Frans"]
        ]

      },
    },

    {
      text: "(Larissa): Dit ziet er al stukken beter uit! We hebben wat redundantie uit de Student-tabel gehaald! Het was zó gedaan :). We zien nog wel wat mogelijke redundantie tussen de Woonplaatsen en Provincies, daar is de derde normaalvorm voor en dat zal Anna je uitleggen!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 47,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"]
        ]

      },
    },

    {
      text: "(Larissa): Was ik duidelijk zo, of zal ik de tweede normaalvorm nog een keer herhalen? :)",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 48,
      choices: [
        { text: "Herhalen", next: 38 },
        { text: "Duidelijk!", next: 48 },

      ]

    },


    //Anna start hier. Dialoog 48


    {
      text: "(Anna): Dan ben ik éindelijk aan het woord hihi, laten we lekker duiken in de derde normaalvorm!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 49,


    },

    {
      text: "(Anna): Zoals Danny en Larissa al hebben verteld hebben we dus een 'Cursus'-tabel: ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 50,
      table: {
        headers: ["Cursusnaam (Primaire sleutel)", "Lokaal"],
        rows: [
          ["Nederlands", "A01"],
          ["Engels", "B02"],
          ["Frans", "C03"]
        ]
      }

    },

    {
      text: "(Anna): En ook een 'StudentWoonplaats'-tabel:  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 51,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"]
        ]

      },

    },

    {
      text: "(Anna): En tot slot de 'Student'-tabel  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 52,
      table: {
        headers: ["Student (Verwijzende Sleutel + Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)"],
        rows: [

          ["Jan", "Nederlands"],
          ["Jan", "Engels"],
          ["Eva", "Nederlands"],
          ["Eva", "Engels"],
          ["Eva", "Frans"]
        ]

      },

    },

    {
      text: "(Anna): De Student-tabel verwijst naar de Cursus-tabel door de Verwijzende sleutel 'Cursus'. Ook verwijst de Student-tabel naar de StudentWoonplaats-tabel door de Verwijzende sleutel 'Student'  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 53,
      table: {
        headers: ["Student (Verwijzende Sleutel + Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)"],
        rows: [

          ["Jan", "Nederlands"],
          ["Jan", "Engels"],
          ["Eva", "Nederlands"],
          ["Eva", "Engels"],
          ["Eva", "Frans"]
        ]

      },

    },

    {
      text: "(Anna): Zie je in de StudentWoonplaats-tabel nog enige redundantie?  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 54,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"]
        ]

      },
      choices: [
        { text: "Ja!", next: 55 },
        { text: "Nee!", next: 54 },

      ]

    },


    {
      text: "(Anna): Hihih, en wat als er nou nog een student Diana aanwezig is die ook uit Rotterdam komt? Zie je dan de redundantie wel? :)   ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 55,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"],
          ["Diana", "Rotterdam", "Zuid-Holland"],
        ]

      }

    },

    {
      text: "(Anna): Hihih, laten we nog een student 'Diana' hebben die ook uit Rotterdam komt, net zoals Jan. We zien nu dat de Woonplaats de Provincie determineert. Met andere woorden: de Provincie is afhankelijk van de Woonplaats en niet van de Primaire sleutel (Studentnaam)!    ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 56,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"],
          ["Diana", "Rotterdam", "Zuid-Holland"],
        ]

      }

    },

    {
      text: "(Anna): Dit heet Transitieve Afhankelijkheid: Wanneer er een niet-sleutelkolom afhankelijk is van een andere niet-sleutelkolom. En in ons geval is dat zeker aanwezig!    ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 57,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"],
          ["Diana", "Rotterdam", "Zuid-Holland"],
        ]

      }

    },


    {
      text: "(Anna): De oplossing? Simpel! Splitsen & Verwijzen die tabel! Net als  Danny en Larissa deden!    ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 58,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"],
          ["Diana", "Rotterdam", "Zuid-Holland"],
        ]

      }

    },

    {
      text: "(Anna): Aangezien Provincie dus afhankelijk is van Woonplaats, maken we een nieuw tabel genaamd 'Locatie', waarin we de Woonplaats opnemen als Primaire Sleutel en Provincie als normale kolom:   ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 59,
      table: {
        headers: ["Woonplaats (Primaire Sleutel)", "Provincie"],
        rows: [

          ["Rotterdam", "Zuid-Holland"],
          ["Utrecht", "Utrecht"],
        ]

      }

    },

    {
      text: "(Anna): Hierdoor hoeven we maar op één plek op te slaan wat een provincie van een locatie / van een student is en hebben we het laatste stukje redundantie geëlimineerd ;)  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 60,
      table: {
        headers: ["Woonplaats (Primaire Sleutel)", "Provincie"],
        rows: [

          ["Rotterdam", "Zuid-Holland"],
          ["Utrecht", "Utrecht"],
        ]

      }

    },

    {
      text: "(Anna): De StudentWoonplaats tabel hoeft alleen nog maar te verwijzen naar de Locatie tabel. Kolom Provincie is hieruit gehaald en de Woonplaats is nu in plaats van een normale kolom, nu een Verwijzende kolom :) ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 61,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats (Verwijzende Sleutel)"],
        rows: [

          ["Jan", "Rotterdam"],
          ["Eva", "Utrecht"],
          ["Diana", "Rotterdam"],
        ]

      }

    },

    {
      text: "(Anna): Et Voila! Onze tabellen zijn succesvol genormaliseerd van de  naar de derde normaalvorm! We zullen dit nog een laatste keer voor je herhalen ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 62,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats (Verwijzende Sleutel)"],
        rows: [

          ["Jan", "Rotterdam"],
          ["Eva", "Utrecht"],
          ["Diana", "Rotterdam"],
        ]

      }

    },



    {
      text: "(Danny): We begonnen dus met een on-genormaliseerde Student tabel die herhalende groepen bevatte onder de sub-tabel 'Cursussen'  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 63,
      table: {
        headers: ["Student (Primaire Sleutel)", "Cursussen", "Woonplaats", "Provincie"],
        rows: [
          [
            "Jan",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"]
              ]
            },
            "Rotterdam", "Zuid-Holland"
          ],
          [
            "Eva",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Engels", "B02"],
                ["Frans", "C03"]
              ]
            },
            "Utrecht", "Utrecht"
          ]
        ]
      },

    },

    {
      text: "(Danny): Dit hadden we afgesplitst naar een aparte Cursus tabel!  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 64,
      table: {
        headers: ["Cursusnaam (Primaire Sleutel)", "Lokaal"],
        rows: [
          ["Nederlands", "A01"],
          ["Engels", "B02"],
          ["Frans", "C03"]
        ]
      }

    },

    {
      text: "(Danny): En daardoor zag de Student-tabel er als volgt uit:  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 65,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      },

    },

    {
      text: "(Danny): Hierdoor voldeden we aan de eerste normaalvorm! yay ~  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 66,
      table: {
        headers: ["Student (Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"],
          ["Eva", "Engels", "Utrecht", "Utrecht"],
          ["Eva", "Frans", "Utrecht", "Utrecht"]
        ]

      },

    },

    {
      text: "(Larissa): En om dit over te zetten naar de tweede normaalvorm, hebben we de Partitiële sleutelafhankelijkheid geëlimineerd door de Functionele Afhankelijkheden van een deel van de Combinatiesleutel (Student -> Woonplaats) en (Student -> Provincie) onder te brengen in een aparte StudentWoonplaats tabel! ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 67,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"]
        ]

      },

    },

    {
      text: "(Larissa): Aangezien we kolommen van de Student-tabel weg hebben gehaald, moest de Student-tabel nog wel verwijzen naar de nieuwe StudentWoonplaats-tabel, dat deden we als volgt:  ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 68,
      table: {
        headers: ["Student (Verwijzende Sleutel + Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)"],
        rows: [

          ["Jan", "Nederlands"],
          ["Jan", "Engels"],
          ["Eva", "Nederlands"],
          ["Eva", "Engels"],
          ["Eva", "Frans"]
        ]

      },

    },

    {
      text: "(Larissa): En op die manier hebben we de Partitiële sleutelafhankelijkheid geëlimineerd! Een kolom is niet meer afhankelijk van een deel van de  Primaire/Combinatiesleutel! ",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 69,
      table: {
        headers: ["Student (Verwijzende Sleutel + Combinatiesleutel)", "Cursus (Verwijzende Sleutel + Combinatiesleutel)"],
        rows: [

          ["Jan", "Nederlands"],
          ["Jan", "Engels"],
          ["Eva", "Nederlands"],
          ["Eva", "Engels"],
          ["Eva", "Frans"]
        ]

      },

    },

    {
      text: "(Anna): En daarna was het tijd voor de Transitieve Afhankelijkheid die aanwezig was in de StudentWoonplaats-tabel! Provincie was namelijk afhankelijk van Woonplaats, en niet van de Primaire sleutel!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 70,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats", "Provincie"],
        rows: [

          ["Jan", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Utrecht", "Utrecht"],
          ["Diana", "Rotterdam", "Zuid-Holland"],
        ]

      }

    },

    {
      text: "(Anna): Dit hebben we opgelost door deze afhankelijkheid te splitten naar een aparte tabel en te verwijzen in de oorspronkelijke tabel! Dus weg van Student-Woonplaats en laten verwijzen:",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 71,
      table: {
        headers: ["Student (Primaire Sleutel)", "Woonplaats (Verwijzende Sleutel)"],
        rows: [

          ["Jan", "Rotterdam"],
          ["Eva", "Utrecht"],
          ["Diana", "Rotterdam"],
        ]

      }

    },

    {
      text: "(Anna): En toevoegen aan onze gesplitste tabel: Locatie!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 72,
      table: {
        headers: ["Woonplaats (Primaire Sleutel)", "Provincie"],
        rows: [

          ["Rotterdam", "Zuid-Holland"],
          ["Utrecht", "Utrecht"],
        ]

      }

    },

    {
      text: "(Anna): Zo hebben we in totaal van één oorspronkelijke Student-tabel, 4 tabellen gemaakt (Cursus, Student, StudentWoonplaats, Locatie) en onze database genormaliseerd van geen, naar de derde normaalvorm!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 73,
      table: {
        headers: ["Woonplaats (Primaire Sleutel)", "Provincie"],
        rows: [

          ["Rotterdam", "Zuid-Holland"],
          ["Utrecht", "Utrecht"],
        ]

      }

    },

    {
      text: "(Larissa): Zo doen we dat!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 74,


    },

    {
      text: "(Danny): Woohoo!!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile0", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "smile0", breathe: true }
      ],
      next: 75,


    },

    {
      text: "(Gezamelijk): Lets goo!!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 76,


    },


    {
      text: "(Gezamelijk): Lets goo!!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 77,


    },


    {
      text: "(Gezamelijk): Dat was onze uitleg! We hopen dat we je goed bijles hebben gegeven!!",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 78,


    },

    {
      text: "(Gezamelijk): Mocht je vastzitten voel je vrij om ons altijd nog wat te vragen :)",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 79,


    },

    {
      text: "(Gezamelijk): Dank je wel voor het luisteren! Met de volgende knop keer je terug naar het begin",
      background: "assets/novel/main/bg01-hallway.jpg",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 0,


    },
  ]
};
// I have spent ages writing this dialogue, by, dialogue. Thank you for scrolling to the very bottom :) (easter-egg)

