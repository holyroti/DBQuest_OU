import { DialogueMap } from './assets.config';
//Dialogues used by Danny in the real 1NF gameplay. There are currently 5 questions, each with their own option-trees
export const dannyDialogues: DialogueMap = {
  question1: [
    {
      text: "(Danny): Hoi! Leuk dat je meedoet met de bijles! Laten we beginnen met het bestuderen van vraag 1.",
      background: "hallway",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "smile1", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "smile1", breathe: true }
      ],
      next: 1
    },
    {
      text: "(Larissa en Anna): Nou dit is een vraag over de eerste normaalvorm, dus wij laten jullie alleen!. Je ziet ons weer bij stap 2 en 3!",
      background: "hallway",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "smile1", breathe: true },
        { index: 1, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Danny): Laten we naar mijn studeerkamer gaan! Dan leg ik vraag 1 verder uit!.",
      background: "hallway",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },

      ],
      next: 3
    },
    {
      text: "(Danny): Laten we samen eens naar deze ongenormaliseerde tabel kijken. Hierin houden we studenten en hun cursussen bij. Maar... iets klopt er niet!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Danny): Laten we samen eens naar deze ongenormaliseerde tabel kijken. Hierin houden we studenten en hun cursussen bij. Maar... iets klopt er niet!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 5
    },
    {
      text: "(Danny): In deze tabel zien we meerdere waarden in één cel onder de kolom 'Cursus'. Dit noemen we een herhalende groep. Volgens de eerste normaalvorm (1NF) mag dat niet!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 6,
      table: {
        headers: ["Studentnaam", "Cursus", "Woonplaats", "Provincie"],
        rows: [
          [
            "Jan",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
                ["Nederlands", "A01"],
                ["Frans", "C03"]
              ]
            },
            "Rotterdam", "Zuid-Holland"
          ],
          [
            "Jan",
            {
              headers: ["Cursusnaam", "Lokaal"],
              rows: [
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
                ["Nederlands", "A01"]
              ]
            },
            "Utrecht", "Utrecht"
          ]
        ]
      }
    },
    {
      text: "(Danny): De kolom 'Cursus' bevat meerdere waarden per student. Dus dit is een herhalende groep. Die splitsen we af in een aparte tabel: 'Cursus'.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 7
    },
    {
      text: "(Danny): Hierdoor ontstaat de volgende Cursus-tabel met een eigen Primaire Sleutel: Cursusnaam.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 8,
      table: {
        headers: ["Cursusnaam (Primaire Sleutel)", "Lokaal"],
        rows: [
          ["Nederlands", "A01"],
          ["Frans", "C03"],
          ["Engels", "B02"]
        ]
      }
    },
    {
      text: "(Danny): De oorspronkelijke tabel bevat nu één verwijzende sleutel naar de Cursus-tabel. Zo ziet die eruit na normalisatie:",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 9,
      table: {
        headers: ["Studentnaam", "Cursus (FK)", "Woonplaats", "Provincie"],
        rows: [
          ["Jan", "Nederlands", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Frans", "Rotterdam", "Zuid-Holland"],
          ["Jan", "Engels", "Rotterdam", "Zuid-Holland"],
          ["Eva", "Nederlands", "Utrecht", "Utrecht"]
        ]
      }
    },
    {
      text: "(Danny): En voilà! We hebben de eerste normaalvorm toegepast. Geen herhalende groepen meer en elke cel bevat één enkele waarde.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 10
    },
    {
      text: "(Danny): Wil je dat ik nog even uitleg wat een herhalende groep is of wat een Primaire Sleutel betekent?",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Wat is een herhalende groep?", next: 11 },
        { text: "Wat is een Primaire Sleutel?", next: 12 },
        { text: "Nee hoor, ik snap het!", next: 13 }
      ]
    },
    {
      text: "(Danny): Een herhalende groep is wanneer er meerdere waarden in één cel staan. Zoals bij een student die meerdere cursussen volgt. Elke cel hoort maar één waarde te bevatten in 1NF!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 10
    },
    {
      text: "(Danny): Een Primaire Sleutel is een kolom of combinatie van kolommen die elke rij uniek maakt. In dit voorbeeld was dat Studentnaam + Cursusnaam!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 10
    },
    {
      text: "(Danny): Top! Dan zijn we klaar met deze vraag! Wanneer we aan de slag gaan met vraag 2 heb ik veel meer te vertellen!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ]
    }
  ],
  question2: [
    {
      text: "(Danny): Hoi! Leuk dat je er weer bent! Tijd om samen te kijken naar vraag 2.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true },
      ],
      next: 1
    },
    {
      text: "(Danny): We gaan excursiegegevens normaliseren. Klaar voor de rit?",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Danny): In de tabel ExcursieDeelname worden studenten gekoppeld aan meerdere excursies, met details zoals locatie, datum en docent. Deze details zitten allemaal in een herhalende groep: ExcursieDetails.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 3,
      table: {
        headers: ["StudentID", "Studentnaam", "ExcursieDetails"],
        rows: [
          [
            "S01", "Jan",
            {
              headers: ["ExcursieNaam", "Ex.Locatie", "Ex.Datum", "Ex.Kosten", "Docentnaam", "DocentMail"],
              rows: [
                ["Museum", "Rotterdam", "01-03-2025", "15.00", "Schivo", "docent1@ou.nl"],
                ["Bioscoop", "Amsterdam", "01-06-2025", "09.00", "Rahimi", "docent2@ou.nl"]
              ]
            }
          ]
        ]
      }
    },
    {
      text: "(Danny): De herhalende groep 'ExcursieDetails' moet eigenlijk worden afgesplitst naar een aparte tabel. Maar ik wil je ook graag aanleren dat het mogelijk is om zo'n herhalende groep te normaliseren in dezelfde tabel!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Danny): We splitsen dan eigenlijk alle kolommen uit de sub-tabel ExcursieDetails af en die worden normale kolommen in tabel ExcursieDeelname ",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 5
    },
    {
      text: "(Danny): Wat dan de Primary / Foreign Keys worden houd ik nog lekker geheim.. anders wordt het te makkelijk!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 6
    },
    {
      text: "(Danny): Hierdoor ziet de genormaliseerde vorm van tabel ExcursieDeelname er als volgt uit:",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      table: {
        headers: ["StudentID", "Studentnaam", "ExcursieNaam", "Ex.Locatie", "Ex.Datum", "Ex.Kosten", "Docentnaam", "DocentMail"],
        rows: [

          ["S01", "Jan", "Museum", "Rotterdam", "01-03-2025", "15.00", "Schivo", "docent1@ou.nl"],
          ["S01", "Jan", "Bioscoop", "Amsterdam", "01-06-2025", "09.00", "Rahimi", "docent2@ou.nl"]


        ]
      },
      next: 7
    },
    {
      text: "(Danny): Samenvattend: ExcursieDetails is de herhalende groep, en we splitsen dit dus niet af maar maken er één grote tabel van! Hierdoor zijn de herhalende groepen niet meer aanwezig en heeft elk kolom één atomaire waarde",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Danny): Wil je nog weten wat herhalende groepen zijn of wat een combinatiesleutel betekent? Klik dan hieronder!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Wat zijn herhalende groepen?", next: 9 },
        { text: "Wat is een combinatiesleutel?", next: 10 },
        { text: "Nee hoor, ik snap het!", next: 11 }

      ]
    },
    {
      text: "(Danny): Een herhalende groep is wanneer er meerdere waarden in één cel staan. Zoals bij een student die meerdere cursussen volgt. Elke cel hoort maar één waarde te bevatten in 1NF!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Danny): Een Primaire Sleutel is een kolom of combinatie van kolommen die elke rij uniek maakt. In dit voorbeeld was dat eigenlijk StudentID + ExcursieNaam + ExursieDatum! Hierdoor is elke rij uniek te identificeren",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Danny): Top! Dan zijn we klaar met de bijles voor vraag 2. Zie ik je bij de volgende?",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ]
    }
  ],

  question3: [
    {
      text: "(Danny): Welkom terug! Klaar om aan de slag te gaan met vraag 3? We gaan het hebben over studenten, cijfers en toetsen!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },

      ],
      next: 1
    },
    {
      text: "(Danny): Ik geloof dat je het kan! De eerste normaalvorm is eigenlijk altijd hetzelfde, focus eerst op de herhalende groepen en splits deze zo nodig af naar een kind-tabel. Deze kind-tabellen krijgen vervolgens een FK dat refereert naar de PK van de ouder-tabel!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Danny): We hebben dus een tabel StudentenCursusCijfers, met studentnummers, namen, cursussen én toetsdetails. De toetsdetails bestaan uit meerdere rijen per student, dus dat gaan we checken!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Danny): Zie jij in deze structuur herhalende groepen, zoals meerdere toetsen in één kolom of substructuren per student?",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Danny): Precies! De kolom 'ToetsDetails' bevat meerdere rijen per student. Dat is dus een herhalende groep en hoort niet in een tabel in 1NF!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 5
    },
    {
      text: "(Danny): We moeten dus die Toets-details afsplitsen in een aparte tabel. Dat nieuwe tabel noemen we bijvoorbeeld 'Toets' en bevat dan: Toetsnaam, Cijfer, MaxCijfer.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 6
    },
    {
      text: "(Danny): In de originele tabel blijft dan over: Studentnummer, Studentnaam, Cursusnaam, Docent en Telefoon. Dit wordt de ouder-tabel.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 7
    },
    {
      text: "(Danny): De toets-tabel krijgt een Verwijzende Sleutel naar de originele tabel, dus Studentnummer + Cursusnaam worden daar ook opgenomen!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Danny): Zo zorgen we ervoor dat elke toets netjes gekoppeld is aan een student en cursus, én we hebben 1NF bereikt! Yess! Wil je dat ik nog een keer uitleg wat een herhalende groep en primaire sleutel is?",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Herhalende groep uitleg", next: 9 },
        { text: "Primaire sleutel uitleg", next: 10 },
        { text: "Ik snap het!", next: 11 }
      ]
    },
    {
      text: "(Danny): Een herhalende groep is wanneer één rij meerdere waardes bevat voor één attribuut, zoals meerdere toetsen in dezelfde cel. Dat moet je normaliseren!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Danny): Een primaire sleutel is een combinatie van kolommen die een rij uniek maken. Bijvoorbeeld Studentnummer + Cursusnaam + Toetsnaam in deze context!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Danny): Helemaal top! Dan zijn we klaar met de uitleg voor vraag 3 :)",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
  ],
  question4: [
    {
      text: "(Danny):  We zijn aangekomen bij vraag 4! Deze keer kijken we naar collegegeld per student per cursus. Heb jij ooit twee keer per maand betaald? Nou, deze studenten dus wel!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },

      ],
      next: 1
    },
    {
      text: "(Danny): In de tabel Collegegeld zien we per student verschillende betaalmomenten voor één cursus. Dat betekent: herhalende groepen!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Danny): Die termijnen moet je natuurlijk niet allemaal in één cel proppen! We splitsen ze netjes af naar een aparte tabel 'Termijnen'.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Danny): Wat blijft er over in de Collegegeld-tabel? Juist: Studentnummer en Cursus! Die twee zijn samen de primaire sleutel!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Danny): En in de Termijnen-tabel voegen we dus Termijn, Bedrag en Betaaldatum toe, met een verwijzing naar Studentnummer en Cursus.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 5
    },
    {
      text: "(Danny): Dat betekent dat Termijnen een kind-tabel is. De FK is dus Studentnummer + Cursus. Simpel toch?",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "wink", mouth: "talking1", breathe: true }
      ],
      next: 6
    },
    {
      text: "(Danny): Wil je nog even herhaling over herhalende groepen of primaire sleutels?",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Herhalende groepen uitleg", next: 7 },
        { text: "Primaire sleutel uitleg", next: 8 },
        { text: "Nee hoor, ik snap het!", next: 9 }
      ]
    },
    {
      text: "(Danny): Herhalende groepen zijn kolommen met meerdere waarden per rij, zoals meerdere betaalmomenten in dit voorbeeld. In 1NF? Niet toegestaan!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 9
    },
    {
      text: "(Danny): Een Primaire Sleutel is een kolom of combinatie van kolommen die elke rij uniek identificeert. Hier dus: Studentnummer + Cursus!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 9
    },
    {
      text: "(Danny): Nice! Op naar de laatste vraag!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ]
    }
  ],
  question5: [
    {
      text: "(Danny): We zijn bij de laatste vraag! Vraag 5 gaat over collegeboeken per cursus. Hopelijk heb je geen rugzak nodig, want deze tabel zit vol boeken!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },

      ],
      next: 1
    },
    {
      text: "(Danny): In de Cursus-tabel zien we per cursus meerdere boeken. Herhalende groep-alert! Dit moet genormaliseerd worden.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Danny): We splitsen de boeken af in een aparte tabel genaamd 'Cursusboeken'. Elke rij bevat daar: Titel, Prijs, ISBN, Uitgever en UitgeverMail.",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Danny): De FK van deze tabel wordt 'Cursus', want elk boek hoort bij één cursus. De originele Cursus-tabel blijft dus gewoon bestaan!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Danny): En in die originele tabel zit dus alleen info zoals cursusnaam, collegegeld, afdelingsmanager en afdeling. Lekker overzichtelijk!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 5
    },
    {
      text: "(Danny): Wil je nog even weten hoe dit ook alweer zat met herhalende groepen of FK/PK's?",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Herhalende groepen uitleg", next: 6 },
        { text: "FK/PK uitleg", next: 7 },
        { text: "Ik snap het!", next: 8 }
      ]
    },
    {
      text: "(Danny): Een herhalende groep betekent: meerdere waarden voor één attribuut in één rij. Zoals meerdere boeken bij een cursus. Dat gaan we dus splitsen!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Danny): De Cursusboeken-tabel krijgt een FK naar Cursus. Dat betekent: elke rij in Cursusboeken verwijst netjes naar een cursus. PK = ISBN!",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "grin", mouth: "talking1", breathe: true }
      ],
      next: 8
    },
    {
      text: "(Danny): Gefeliciteerd! Je hebt alle vijf de vragen afgerond. Tijd voor taart? 🍰",
      background: "dorm",
      characters: [
        { index: 0, name: "danny", eyes: "smile", mouth: "talking1", breathe: true }
      ]
    }
  ]

};
