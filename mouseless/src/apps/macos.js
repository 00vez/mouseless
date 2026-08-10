// https://support.apple.com/en-gb/HT201236
module.exports = {
  id: 'macos',
  title: 'macOS',
  category: 'Utility',
  description: null,
  sets: [
    {
      title: 'Grundlagen',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Ausgewähltes Objekt in die Zwischenablage kopieren',
          keys: ['Meta', 'c'],
        },
        {
          title: 'Inhalt der Zwischenablage einfügen',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Letzten Befehl widerrufen',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Wiederholen',
          keys: ['Shift', 'Meta', 'z'],
        },
        {
          title: 'Ausgewähltes Objekt ausschneiden und in die Zwischenablage kopieren',
          keys: ['Meta', 'x'],
        },
        {
          title: 'Alle Objekte auswählen',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Aktuelles Dokument sichern',
          keys: ['Meta', 's'],
        },
        {
          title: 'Neuen Tab öffnen',
          keys: ['Meta', 't'],
        },
        {
          title: 'Zeichenanzeige einblenden, aus der du Emoji und andere Symbole auswählen kannst',
          keys: ['Control', 'Meta', 'Space'],
        },
      ],
    },
    {
      title: 'Fenster',
      id: 'windows',
      version: 1,
      shortcuts: [
        {
          title: 'Alle Fenster der vorderen App anzeigen',
          keys: ['Control', 'ArrowDown'],
        },
        {
          title: 'Fenster der vorderen App ausblenden',
          keys: ['Meta', 'h'],
        },
        {
          title: 'Alle Fenster der vorderen App verkleinern',
          keys: ['Alt', 'Meta', 'm'],
        },
        {
          title: 'Vorderes Fenster schließen',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Alle Fenster der App schließen',
          keys: ['Alt', 'Meta', 'w'],
        },
        {
          title: 'App im Vollbild verwenden',
          keys: ['Control', 'Meta', 'f'],
        },
        {
          title: 'Vordere App anzeigen und alle anderen Apps ausblenden',
          keys: ['Alt', 'Meta', 'h'],
        },
        {
          title: 'Vorderes Fenster im Dock verkleinern',
          keys: ['Meta', 'm'],
        },
      ],
    },
    {
      title: 'Suchen',
      id: 'search',
      version: 1,
      shortcuts: [
        {
          title: 'Objekte in einem Dokument suchen oder ein Suchfenster öffnen',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Erneut suchen',
          description: 'Findet das nächste Vorkommen des zuvor gefundenen Objekts',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Vorheriges Vorkommen suchen',
          keys: ['Shift', 'Meta', 'g'],
        },
      ],
    },
    // blocked shortcuts
    // {
    //   title: 'Screen Capturing',
    //   id: 'screen-capturing',
    //   version: 1,
    //   shortcuts: [
    //     {
    //       title: 'Capture a selected portion of the screen',
    //       keys: ['Shift', 'Meta', '5'],
    //     },
    //   ],
    // },
    {
      title: 'Verschiedenes',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Dock ein- oder ausblenden',
          keys: ['Alt', 'Meta', 'd'],
        },
        {
          title: 'Ausgewähltes Objekt öffnen oder ein Dialogfeld zum Auswählen einer zu öffnenden Datei öffnen',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Aktuelles Dokument drucken',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Spotlight-Suchfeld ein- oder ausblenden',
          keys: ['Meta', 'Space'],
        },
        {
          title: 'Einstellungen für die vordere App öffnen',
          keys: ['Meta', ','],
        },
      ],
    },
  ],
}
