import { DialogueMap } from './assets.config';
//Dialogues used by Larissa in the real 2NF gameplay. There are currently 5 questions, each with their own option-trees
export const larissaDialogues: DialogueMap = {
  question1: [
    {
      text: "(Larissa): Hoi! Wat leuk dat je er weer bent. Ik kan je leuke dingen uitleggen!",
      background: "hallway",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "smile0", breathe: true }
      ],
      next: 1
    },
    {
      text: "(Danny en Anna): Nou dan laten wij jullie maar alleen! Je ziet ons bij de andere normaalvormen weer!",
      background: "hallway",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "grin", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }],
      next: 2
    },
    {
      text: "(Larissa): Laten we naar mijn studeerkamer gaan!",
      background: "hallway",
      characters: [
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile1", breathe: true },
      ],
      next: 3
    },
    {
      text: "(Larissa): In de eerste normaalvorm hadden we de herhalende groepen al afgesplitst. Maar nu gaan we kijken naar iets subtielers: partiële afhankelijkheden!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }],
      next: 4
    },
    {
      text: "(Larissa): Kijk eens naar de StudentInschrijving-tabel. De kolommen Woonplaats en Provincie zijn alleen afhankelijk van Studentnaam... en niet van de hele sleutel!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }],
      next: 5
    },
    {
      text: "(Larissa): Hmm... wat kunnen we daaraan doen? Juist! We splitsen die kolommen af in een aparte tabel — StudentWoonplaats bijvoorbeeld!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }],
      next: 6
    },
    {
      text: "(Larissa): En vergeet niet: onze StudentInschrijving-tabel krijgt dan een vreemde sleutel (FK) naar StudentWoonplaats. Zo blijft alles netjes!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }],
      next: 7
    },
    {
      text: "(Larissa): Kun jij ontdekken of er partiële afhankelijkheden zijn in de kolommen? Kijk goed naar welke kolommen alleen van Studentnaam afhangen!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }],
      choices: [
        { text: "Cursus en Lokaal", next: 9 },
        { text: "Woonplaats en Provincie", next: 8 },
        { text: "Alles is afhankelijk van de hele sleutel", next: 10 }
      ]
    },
    {
      text: "(Larissa): Precies! Woonplaats en Provincie zijn alleen afhankelijk van Studentnaam. Dat betekent: tijd voor een nieuwe tabel!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }],
      next: 11
    },
    {
      text: "(Larissa): Niet helemaal! Cursus en Lokaal zijn juist gekoppeld en horen bij elkaar in de Cursus-tabel. Nog een keer proberen?",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }],
      next: 7
    },
    {
      text: "(Larissa): Hmm, niet helemaal waar! Kijk goed — sommige kolommen hangen af van slechts één deel van de sleutel. Dat noemen we partiële afhankelijkheid!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }],
      next: 7
    },
    {
      text: "(Larissa): Je doet het goed! We hebben nu begrepen hoe we van 1NF naar 2NF gaan. Wil je nog een herhaling van wat partiële afhankelijkheid ook alweer is?",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }],
      choices: [
        { text: "Ja, graag!", next: 12 },
        { text: "Nee hoor, door naar de volgende vraag!", next: 13 }
      ]
    },
    {
      text: "(Larissa): Een partiële afhankelijkheid is wanneer een kolom alleen afhankelijk is van een deel van een samengestelde sleutel. Die splits je af om 2NF te bereiken!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }],
      next: 11
    },
    {
      text: "(Larissa): Klaar om door te gaan naar de volgende normalisatie-uitdaging? Ik zie je daar!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }]
    }
  ],
  question2: [
    {
      text: "(Larissa): Tijd voor een nieuwe uitdaging: vraag 2! Laten we kijken of er partiële afhankelijkheden zijn in deze excursiegegevens.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true },

      ],
      next: 1
    },
    {
      text: "(Larissa): In deze ExcursieDeelname-tabel staan studentgegevens én excursiedetails bij elkaar. Hmm, dat ruikt naar partiële afhankelijkheden!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Larissa): Kijk goed: Studentnaam is afhankelijk van alleen StudentID. En excursie-info zoals Locatie, Kosten en Docent zijn afhankelijk van alleen ExcursieNaam.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Larissa): Wat moeten we dus doen? Splitsen! We maken aparte tabellen voor Student en Excursie. Hierdoor heet onze tabel ExcursieDeelname ons koppeltabel.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "soft", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Larissa): Even testen: waar zou jij 'DocentMail' plaatsen?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "In de Excursie-tabel", next: 5 },
        { text: "In de Student-tabel", next: 6 }
      ]
    },
    {
      text: "(Larissa): Ja, helemaal goed! De mail van een docent hoort bij de excursie — niet bij de student natuurlijk.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 7
    },
    {
      text: "(Larissa): Hmm, niet helemaal! Studenten mailen hun docenten niet rechtstreeks. Die info hoort echt bij de excursie zelf.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Larissa): Goed gedaan dit is een voorbeeld van één partiële sleutelafhankelijkheid. Maar er zijn er meer, die moet je wel zelf vinden hihi! Wil je nog een korte uitleg van wat partiële afhankelijkheden zijn?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "soft", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Ja, graag!", next: 8 },
        { text: "Nee, ik snap het al!", next: 9 }
      ]
    },
    {
      text: "(Larissa): Een partiële afhankelijkheid is wanneer een kolom alleen afhankelijk is van een deel van een samengestelde sleutel. Die splits je af om 2NF te bereiken!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 9
    },
    {
      text: "(Larissa): Okey, ik zie je bij vraag 3!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "happy", mouth: "talking1", breathe: true }
      ]
    }
  ],
  question3: [
    {
      text: "(Larissa): Ben ik weer! Vraag 3 staat op je te wachten. Dit keer gaan we écht dieper duiken in partiële afhankelijkheden van cijfers en toetsen!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },

      ],
      next: 1
    },
    {
      text: "(Larissa): We hebben een tabel met studenten, cursussen, toetsresultaten, maxscores én docenten. Da’s best veel info in één!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "thinking", mouth: "talking1", breathe: true }],
      next: 2
    },
    {
      text: "(Larissa): Denk eens aan de partiële sleutelafhankelijkheden... de Maxscore is afhankelijk van de Toetsnaam. Dus niet van de hele sleutelcombinatie! Zie je het al aankomen?",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "wink", mouth: "talking1", breathe: true }],
      next: 3
    },
    {
      text: "(Larissa): Juist! Dat is een partiële afhankelijkheid. We gaan dus een ToetsDefinitie-tabel maken met de toetsnaam en maxscore.",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }],
      next: 4
    },
    {
      text: "(Larissa): En de docentgegevens? Die hangen af van de cursusnaam. Ook partiële afhankelijkheid dus — die zetten we in een aparte Cursus-tabel!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "thinking", mouth: "talking1", breathe: true }],
      next: 5
    },
    {
      text: "(Larissa): Maar vergeet de studenten niet! Studentnaam is afhankelijk van StudentID. Dus maken we ook een aparte Student-tabel aan.",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "happy", mouth: "talking1", breathe: true }],
      next: 6
    },
    {
      text: "(Larissa): Wat blijft er dan over? De kern: student + cursus + toets + cijfer. Dat zetten we netjes in onze ToetsResultaat-tabel!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }],
      next: 7
    },
    {
      text: "(Larissa): Even testen: Wat hoort er thuis in de ToetsDefinitie-tabel?",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "questioning", mouth: "talking1", breathe: true }],
      choices: [
        { text: "Toetsnaam en Maxscore", next: 8 },
        { text: "Toetsnaam en Cijfer", next: 9 }
      ]
    },
    {
      text: "(Larissa): Correct! Maxscore hoort bij de ToetsDefinitie, want die verandert niet per student.",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }],
      next: 10
    },
    {
      text: "(Larissa): Hmm, niet helemaal! De Cijfer hoort bij een student en toets, dus die moet in de ToetsResultaat-tabel.",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "worried", mouth: "talking1", breathe: true }],
      next: 10
    },
    {
      text: "(Larissa): Wil je nog een keer horen wat partiële afhankelijkheid precies is?",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }],
      choices: [
        { text: "Ja, graag!", next: 11 },
        { text: "Nee hoor, ik snap het!", next: 12 }
      ]
    },
    {
      text: "(Larissa): Een partiële afhankelijkheid betekent dat een kolom afhankelijk is van slechts één deel van de samengestelde sleutel. En dat moet eruit!",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }],
      next: 12
    },
    {
      text: "(Larissa): Super gedaan! Zie ik je bij vraag 4?",
      background: "girl_dorm",
      characters: [{ index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }]
    }
  ],
  question4: [
    {
      text: "(Larissa): Hoi weer! Vraag 4 staat klaar — dit keer over collegegeld en betaaltermijnen! 🧾",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
      ],
      next: 1
    },
    {
      text: "(Larissa): In de tabel Collegegeld zie je studentinfo, cursusinfo én alle termijnen samen. Maar klopt dat qua afhankelijkheden?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "thinking", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Larissa): Studentnaam hangt alleen af van Studentnummer. En Afdeling en Afdelingsmanager? Die hangen weer af van de Cursusnaam!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "wink", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Larissa): Oei, dat zijn dus partiële afhankelijkheden. En we weten wat we dan moeten doen, toch? Splitsen maar!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Larissa): We maken aparte tabellen: eentje voor Student en eentje voor Cursus. De Collegegeld-tabel wordt dan een koppeltabel met alleen verwijzingen!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 5
    },
    {
      text: "(Larissa): En wat denk je? Hoort het bedrag zelf in de Collegegeld-tabel of in de Termijn-tabel? 🤔",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "questioning", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "In de Termijn-tabel!", next: 6 },
        { text: "In de Collegegeld-tabel!", next: 7 }
      ]
    },
    {
      text: "(Larissa): Juist! Elke termijn bevat z'n eigen bedrag. Mooie logische splitsing. 💸",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "happy", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Larissa): Hmm, niet helemaal juist. Het bedrag hoort bij een specifieke betaaldatum, dus in de Termijn-tabel!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "worried", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Larissa): Goed bezig! We hebben nu Student, Cursus, CollegegeldInschrijving én de Termijnen netjes gescheiden. Structuur voor de win! 🎯",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }
      ]
    }
  ],

  question5: [
    {
      text: "(Larissa): Laatste vraag alweer! We gaan aan de slag met boeken en uitgevers. 📚",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
      ],
      next: 1
    },
    {
      text: "(Larissa): We hebben een tabel met boekeninformatie. ISBN, titel, prijs, uitgever, e-mail... allemaal in één tabel? Dat klinkt verdacht...",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "upset", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Larissa): Kijk goed: de UitgeverEmail is alleen afhankelijk van de Uitgever. Dat is een partiële afhankelijkheid!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Larissa): Oplossing? Splitsen natuurlijk! We maken een aparte tabel Uitgever met Uitgever en UitgeverEmail. Simpel én netjes!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Larissa): De Boek-tabel verwijst dan via een vreemde sleutel (FK) naar de Uitgever-tabel. Mooie 2NF!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 5
    },
    {
      text: "(Larissa): En de CursusBoeken-tabel? Die blijft gewoon koppelen tussen Cursus en ISBN. Zonder extra ballast!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "larissa", eyes: "wow", mouth: "talking1", breathe: true }
      ]
    }
  ]
};
