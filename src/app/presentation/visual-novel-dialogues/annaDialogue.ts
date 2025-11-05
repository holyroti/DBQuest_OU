import { DialogueMap } from './assets.config';
//Dialogues used by Anna in the real 3NF gameplay. There are currently 5 questions, each with their own option-trees
export const annaDialogues: DialogueMap = {
  question1: [
    {
      text: "(Anna): Hoi! Wat leuk dat je er weer bent! We gaan samen naar de derde normaalvorm kijken. Danny en Larissa zijn er ook even bij om je succes te wensen!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "danny", eyes: "smile", mouth: "smile1", breathe: true },
        { index: 2, name: "larissa", eyes: "smile", mouth: "smile1", breathe: true }
      ],
      next: 1
    },
    {
      text: "(Danny en Larissa): Succes! Je hebt de vraag bijna afgerond! Je kunt het!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "smile1", breathe: true },
        { index: 1, name: "danny", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 2, name: "larissa", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Anna): Nu zijn we alleen, jij en ik! De derde normaalvorm draait om transitieve afhankelijkheden. Klinkt ingewikkeld? Geen zorgen, ik leg het je uit!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Anna): Kijk eens naar de StudentWoonplaats-tabel. Zie je dat 'Provincie' eigenlijk afhankelijk is van 'Woonplaats'? Niet van de primaire sleutel!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Anna): En dat noemen we een transitieve afhankelijkheid! We moeten die kolommen dus afsplitsen naar een aparte tabel: Locatie.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 5
    },
    {
      text: "(Anna): Dan verwijst StudentWoonplaats netjes naar de juiste Woonplaats, en houden we alles netjes volgens de 3NF-regels.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 6
    },
    {
      text: "(Anna): Even testen: Is 'Woonplaats' hier de sleutel, of is dat nog steeds Student? 😉",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Student is de sleutel", next: 7 },
        { text: "Woonplaats is de sleutel", next: 8 }
      ]
    },
    {
      text: "(Anna): Correct! Student is nog steeds de sleutel in StudentWoonplaats. Maar Woonplaats wordt de sleutel in de Locatie-tabel!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 9
    },
    {
      text: "(Anna): Bijna goed! Woonplaats wordt pas een sleutel in de nieuwe Locatie-tabel. Hier is Student nog de sleutel.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 9
    },
    {
      text: "(Anna): Wil je nog een korte uitleg over transitieve afhankelijkheden of sleutels voordat we doorgaan?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Wat is een transitieve afhankelijkheid?", next: 10 },
        { text: "Wat is een Foreign Key?", next: 11 },
        { text: "Nee hoor, ik snap het!", next: 12 }
      ]
    },
    {
      text: "(Anna): Een transitieve afhankelijkheid betekent dat een kolom afhankelijk is van een andere niet-sleutelkolom. Dat willen we niet in 3NF!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 9
    },
    {
      text: "(Anna): Een Foreign Key is een kolom die verwijst naar een sleutel in een andere tabel. Zo leggen we verbanden tussen tabellen!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 9
    },
    {
      text: "(Anna): Mooi! Dan wens ik je succes met het oplossen van deze vraag!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ]
    }
  ],

  question2: [
    {
      text: "(Anna): Ben ik weer hihi! Klaar voor nog een stap richting perfect genormaliseerde data? Danny en Larissa juichen je toe!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "danny", eyes: "grin", mouth: "smile1", breathe: true },
        { index: 2, name: "larissa", eyes: "smile", mouth: "smile1", breathe: true }
      ],
      next: 1
    },
    {
      text: "(Anna): Dit keer bekijken we de Excursie-tabel. Hmm... iets met een docent en e-mail... voel je 'm al aankomen?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Anna): Precies! DocentMail is afhankelijk van Docentnaam, niet van Excursienaam. Dat is... juist! Transitief afhankelijk.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Anna): Die kolom splitsen we af in een aparte Docent-tabel. Daarna laten we de Excursie-tabel verwijzen naar de juiste docent.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Anna): Slimmer structureren = makkelijker zoeken én minder fouten. Zal ik iets herhalen?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Wat is een transitieve afhankelijkheid?", next: 5 },
        { text: "Wat is een Foreign Key?", next: 6 },
        { text: "Nee hoor, ik snap het!", next: 7 }
      ]
    },
    {
      text: "(Anna): Een transitieve afhankelijkheid betekent dat een kolom indirect afhankelijk is van een sleutel via een andere kolom. Niet toegestaan in 3NF!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Anna): Een Foreign Key is een kolom die verwijst naar een sleutel in een andere tabel. Super belangrijk bij normalisatie!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Anna): Toppie! Veel succes met het maken van de vraag!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ]
    }
  ],
  question3: [
    {
      text: "(Anna): Hoi daar! Vraag 3 komt eraan, en dit keer draait het allemaal om docenten en telefoonnummers. Larissa en Danny zwaaien nog even voor we beginnen!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "danny", eyes: "smile", mouth: "smile1", breathe: true },
        { index: 2, name: "larissa", eyes: "smile", mouth: "smile1", breathe: true }
      ],
      next: 1
    },
    {
      text: "(Anna): De Cursus-tabel bevat de naam van de cursus, de docent en... de telefoon van die docent. Hmm...",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "joy", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Anna): De telefoon van de docent is afhankelijk van... de docent, niet van de cursus. Een typisch gevalletje van transitieve afhankelijkheid!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Anna): Wat doen we dan? We maken een aparte tabel genaamd 'Docent'. Zo verwijst elke cursus naar een docent, en elke docent naar z'n telefoonnummer.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Anna): Oké quiz-tijd! Welke kolom hoort volgens jou thuis in de Docent-tabel?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "joy", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Docenttelefoon", next: 5 },
        { text: "Cursusnaam", next: 6 }
      ]
    },
    {
      text: "(Anna): Yes! Docenttelefoon hoort in de Docent-tabel. Zo vermijden we die transitieve afhankelijkheid!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 7
    },
    {
      text: "(Anna): Oei, bijna! De cursusnaam hoort bij de Cursus-tabel. De Docent-tabel is er puur voor info over de docent!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "joy", mouth: "talking1", breathe: true }
      ],
      next: 7
    },
    {
      text: "(Anna): Wil je dat ik nog even uitleg wat een transitieve afhankelijkheid is of wat een Foreign Key betekent?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Wat is een transitieve afhankelijkheid?", next: 8 },
        { text: "Wat is een Foreign Key?", next: 9 },
        { text: "Nee hoor, ik snap het!", next: 10 }
      ]
    },
    {
      text: "(Anna): Een transitieve afhankelijkheid betekent dat een kolom afhankelijk is van een andere niet-sleutelkolom. Niet toegestaan in 3NF!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 7
    },
    {
      text: "(Anna): Een Foreign Key is een kolom die verwijst naar een sleutel in een andere tabel. Superbelangrijk om relaties te leggen!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 7
    },
    {
      text: "(Anna): Fantastisch! Op naar vraag 4, waar collegegeld en afdelingen op je wachten!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "joy", mouth: "talking1", breathe: true }
      ]
    }
  ],
  question4: [
    {
      text: "(Anna): Daar gaan we, vraag 4! Dit keer duiken we in de wereld van collegegeld en... afdelingen! 🎓💸",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "danny", eyes: "smile", mouth: "smile1", breathe: true },
        { index: 2, name: "larissa", eyes: "smile", mouth: "smile1", breathe: true }
      ],
      next: 1
    },
    {
      text: "(Anna): In de Cursus-tabel zie ik iets opvallends... De afdelingsmanager is gekoppeld aan de afdeling, niet direct aan de cursus! Hmm...",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Anna): Dit noemen we een transitieve afhankelijkheid! Tijd om dat netjes te scheiden in een aparte Afdeling-tabel.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "joy", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Anna): Dus: de cursus verwijst naar de afdeling, en de afdeling naar de afdelingsmanager. Zo hoort 't!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Anna): Herinner je je nog wat een transitieve afhankelijkheid betekent?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "joy", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Ja hoor!", next: 6 },
        { text: "Hmm... even opfrissen!", next: 5 }
      ]
    },
    {
      text: "(Anna): Dat is wanneer een kolom afhankelijk is van een andere niet-sleutelkolom. Bijvoorbeeld: Afdelingsmanager hangt af van Afdeling!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 6
    },
    {
      text: "(Anna): Netjes genormaliseerd dus! Laten we naar de laatste vraag gaan: Boeken en uitgevers! 📚",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "joy", mouth: "talking1", breathe: true }
      ]
    }
  ],

  question5: [
    {
      text: "(Anna): De laatste vraag! We gaan boeken koppelen aan uitgevers. Spannend hè? Danny en Larissa moedigen je aan!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true },
        { index: 1, name: "danny", eyes: "smile", mouth: "smile1", breathe: true },
        { index: 2, name: "larissa", eyes: "smile", mouth: "smile1", breathe: true }
      ],
      next: 1
    },
    {
      text: "(Anna): In de Boek-tabel staat niet alleen de titel en prijs, maar ook de uitgever én hun e-mailadres. Interessant...",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "joy", mouth: "talking1", breathe: true }
      ],
      next: 2
    },
    {
      text: "(Anna): Maar wacht... dat e-mailadres hangt niet af van het boek. Het hangt af van de uitgever! Aha! Transitieve afhankelijkheid gespot!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "wow", mouth: "talking1", breathe: true }
      ],
      next: 3
    },
    {
      text: "(Anna): Tijd voor actie! We splitsen dit op: de Boek-tabel verwijst naar een Uitgever, en de Uitgever-tabel bevat de contactgegevens.",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 4
    },
    {
      text: "(Anna): Zou jij weten wat we nog meer in de Uitgever-tabel kunnen zetten?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "joy", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Alle boeken die ze uitgeven?", next: 6 },
        { text: "Het e-mailadres van de uitgever?", next: 5 }
      ]
    },
    {
      text: "(Anna): Juist! Het e-mailadres hoort in de Uitgever-tabel, niet in Boek zelf! Nice. 🎯",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 7
    },
    {
      text: "(Anna): Hmm, boeken zelf staan niet in de Uitgever-tabel. Elke uitgever kan wél gelinkt worden aan meerdere boeken via de Boek-tabel!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 5
    },
    {
      text: "(Anna): Wil je nog even herhalen wat transitieve afhankelijkheden zijn?",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "joy", mouth: "talking1", breathe: true }
      ],
      choices: [
        { text: "Ja graag!", next: 8 },
        { text: "Nee hoor, ik snap het!", next: 9 }
      ]
    },
    {
      text: "(Anna): Transitieve afhankelijkheden zijn kolommen die afhankelijk zijn van een andere niet-sleutelkolom. In dit geval: het e-mailadres hangt af van de uitgever, niet van het boek!",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ],
      next: 9
    },
    {
      text: "(Anna): Je hebt het fantastisch gedaan! Alle 3NF-stappen zijn afgerond. Tijd voor een high-five! 🙌",
      background: "girl_dorm",
      characters: [
        { index: 0, name: "anna", eyes: "smile", mouth: "talking1", breathe: true }
      ]
    }
  ]
};
