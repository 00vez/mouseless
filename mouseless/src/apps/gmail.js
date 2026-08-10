// https://support.google.com/mail/answer/6594?co=GENIE.Platform%3DDesktop&hl=en
module.exports = {
  id: 'gmail',
  title: 'Gmail',
  category: 'Communication',
  description: null,
  sets: [
    {
      title: 'Grundlagen',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Senden',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Archivieren',
          keys: ['e'],
        },
        {
          title: 'Konversation stummschalten',
          keys: ['m'],
        },
        {
          title: 'Als Spam melden',
          keys: ['!'],
        },
        {
          title: 'Löschen',
          keys: ['#'],
        },
        {
          title: 'Weiterleiten',
          keys: ['f'],
        },
        {
          title: 'Letzte Aktion rückgängig machen',
          keys: ['z'],
        },
      ],
    },
    {
      title: 'Verfassen & Chat',
      id: 'compose',
      version: 1,
      shortcuts: [
        {
          title: 'Vorherige Nachricht in einer geöffneten Konversation',
          keys: ['p'],
        },
        {
          title: 'Nächste Nachricht in einer geöffneten Konversation',
          keys: ['n'],
        },
        {
          title: 'Hauptfenster fokussieren',
          keys: ['Shift', 'Escape'],
        },
        {
          title: 'Neuesten Chat oder Verfassen-Fenster fokussieren',
          keys: ['Escape'],
        },
        {
          title: 'Zum nächsten Chat oder Verfassen-Fenster wechseln',
          keys: ['Control', '.'],
        },
        {
          title: 'Zum vorherigen Chat oder Verfassen-Fenster wechseln',
          keys: ['Control', ','],
        },
        {
          title: 'Cc-Empfänger hinzufügen',
          keys: ['Meta', 'Shift', 'c'],
        },
        {
          title: 'Bcc-Empfänger hinzufügen',
          keys: ['Meta', 'Shift', 'b'],
        },
        {
          title: 'Benutzerdefiniertes Von-Feld verwenden',
          keys: ['Meta', 'Shift', 'f'],
        },
        {
          title: 'Link einfügen',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Zum nächsten falsch geschriebenen Wort gehen',
          keys: ['Meta', ';'],
        },
        {
          title: 'Rechtschreibvorschläge öffnen',
          keys: ['Meta', 'm'],
        },
      ],
    },
    {
      title: 'Textformatierung',
      id: 'formatting',
      version: 1,
      shortcuts: [
        {
          title: 'Vorherige Schriftart',
          keys: ['Meta', 'Shift', '5'],
        },
        {
          title: 'Nächste Schriftart',
          keys: ['Meta', 'Shift', '6'],
        },
        {
          title: 'Textgröße verkleinern',
          keys: ['Meta', 'Shift', '-'],
        },
        {
          title: 'Textgröße vergrößern',
          keys: [
            ['Meta', 'Shift', '='],
            ['Meta', 'Shift', '+'],
          ],
        },
        {
          title: 'Fett',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Kursiv',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Unterstreichen',
          keys: ['Meta', 'u'],
        },
        {
          title: 'Nummerierte Liste',
          keys: ['Meta', 'Shift', '7'],
        },
        {
          title: 'Aufzählungsliste',
          keys: ['Meta', 'Shift', '8'],
        },
        {
          title: 'Zitat',
          keys: ['Meta', 'Shift', '9'],
        },
        {
          title: 'Weniger einrücken',
          keys: ['Meta', '['],
        },
        {
          title: 'Mehr einrücken',
          keys: ['Meta', ']'],
        },
        {
          title: 'Links ausrichten',
          keys: ['Meta', 'Shift', 'l'],
        },
        {
          title: 'Zentrieren',
          keys: ['Meta', 'Shift', 'e'],
        },
        {
          title: 'Rechts ausrichten',
          keys: ['Meta', 'Shift', 'r'],
        },
        {
          title: 'Formatierung entfernen',
          keys: ['Meta', '\\'],
        },
      ],
    },
    {
      title: 'Antworten',
      id: 'reply',
      version: 1,
      shortcuts: [
        {
          title: 'Antworten',
          keys: ['r'],
        },
        {
          title: 'In neuem Fenster antworten',
          keys: ['Shift', 'r'],
        },
        {
          title: 'Allen antworten',
          keys: ['a'],
        },
        {
          title: 'Allen in einem neuen Fenster antworten',
          keys: ['Shift', 'a'],
        },
      ],
    },
    {
      title: 'Als markieren',
      id: 'mark-as',
      version: 1,
      shortcuts: [
        {
          title: 'Als gelesen markieren',
          keys: ['Shift', 'i'],
        },
        {
          title: 'Als ungelesen markieren',
          keys: ['Shift', 'u'],
        },
        {
          title: 'Ab der ausgewählten Nachricht als ungelesen markieren',
          keys: ['_'],
        },
        {
          title: 'Als wichtig markieren',
          keys: [
            ['+'],
            ['='],
          ],
        },
        {
          title: 'Als nicht wichtig markieren',
          keys: ['-'],
        },
      ],
    },
    {
      title: 'Aktionen',
      id: 'actions',
      version: 1,
      shortcuts: [
        {
          title: 'Fokus auf die Symbolleiste bewegen',
          keys: [','],
        },
        {
          title: 'Konversation auswählen',
          keys: ['x'],
        },
        {
          title: 'Stern setzen/zwischen Supersternen wechseln',
          keys: ['s'],
        },
        {
          title: 'In neuem Fenster weiterleiten',
          keys: ['Shift', 'f'],
        },
        {
          title: 'Konversation aktualisieren',
          keys: ['Shift', 'n'],
        },
        {
          title: 'Konversation archivieren und zur vorherigen gehen',
          keys: ['['],
        },
        {
          title: 'Konversation archivieren und zur nächsten gehen',
          keys: [']'],
        },
        {
          title: 'Schlummern',
          keys: ['b'],
        },
        {
          title: 'Gesamte Konversation erweitern',
          keys: [';'],
        },
        {
          title: 'Gesamte Konversation einklappen',
          keys: [':'],
        },
        {
          title: 'Konversation zu Aufgaben hinzufügen',
          keys: ['Shift', 't'],
        },
      ],
    },
    // TODO: Sequences
    // {
    //   title: 'Hangouts',
    //   id: 'hangouts',
    //   version: 1,
    //   shortcuts: [
    //     {
    //       title: '',
    //       keys: [''],
    //     },
    //   ],
    // },
    // TODO: Sequences
    // {
    //   title: 'Jumping',
    //   id: 'jumping',
    //   version: 1,
    //   shortcuts: [
    //     {
    //       title: '',
    //       keys: [''],
    //     },
    //   ],
    // },
    // TODO: Sequences
    // {
    //   title: 'Threadlist Selection',
    //   id: 'threadlist',
    //   version: 1,
    //   shortcuts: [
    //     {
    //       title: '',
    //       keys: [''],
    //     },
    //   ],
    // },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        // TODO: Sequence?
        // {
        //   title: 'Go to next page',
        //   keys: ['g', 'n'],
        // },
        // {
        //   title: 'Go to previous page',
        //   keys: ['g', 'p'],
        // },
        {
          title: 'Zurück zur Threadliste',
          keys: ['u'],
        },
        {
          title: 'Neuere Konversation',
          keys: ['k'],
        },
        {
          title: 'Ältere Konversation',
          keys: ['j'],
        },
        // TODO: Two variants
        // {
        //   title: 'Open conversation',
        //   keys: ['o or Enter'],
        // },
        {
          title: 'Zum nächsten Posteingangsbereich gehen',
          keys: ['`'],
        },
        {
          title: 'Zum vorherigen Posteingangsbereich gehen',
          keys: ['~'],
        },
      ],
    },
    {
      title: 'Anwendung',
      id: 'application',
      version: 1,
      shortcuts: [
        {
          title: 'Verfassen',
          keys: ['c'],
        },
        {
          title: 'In neuem Tab verfassen',
          keys: ['d'],
        },
        {
          title: 'E-Mail durchsuchen',
          keys: ['/'],
        },
        {
          title: 'Chat-Kontakte durchsuchen',
          keys: ['g'],
        },
        {
          title: 'Menü „Weitere Aktionen“ öffnen',
          keys: ['.'],
        },
        {
          title: 'Menü „Verschieben nach“ öffnen',
          keys: ['v'],
        },
        {
          title: 'Menü „Label als“ öffnen',
          keys: ['l'],
        },
        {
          title: 'Hilfe zu Tastenkürzeln öffnen',
          keys: ['?'],
        },
      ],
    },
  ],
}
