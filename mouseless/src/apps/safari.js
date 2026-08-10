// https://support.apple.com/en-gb/guide/safari/cpsh003/mac
module.exports = {
  id: 'safari',
  title: 'Safari',
  category: 'Utility',
  sets: [
    {
      title: 'Scrollen',
      id: 'scrolling',
      version: 1,
      shortcuts: [
        {
          title: 'Nach oben scrollen',
          keys: ['ArrowUp'],
        },
        {
          title: 'Weiter nach unten scrollen',
          keys: ['Alt', 'ArrowDown'],
        },
        {
          title: 'Eine Bildschirmlänge nach unten scrollen',
          keys: ['Space'],
        },
        {
          title: 'Eine Bildschirmlänge nach oben scrollen',
          keys: ['Shift', 'Space'],
        },
        {
          title: 'Zur oberen linken Ecke der Seite scrollen',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Zur unteren linken Ecke der Seite scrollen',
          keys: ['Meta', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Tabs',
      id: 'tabs',
      version: 1,
      shortcuts: [
        {
          title: 'Alle Tabs anzeigen',
          keys: ['Shift', 'Meta', '\\'],
        },
        {
          title: 'Nächsten Tab aktivieren',
          keys: ['Control', 'Tab'],
        },
        {
          title: 'Vorherigen Tab aktivieren',
          keys: ['Control', 'Shift', 'Tab'],
        },
        {
          title: 'Zweiten Tab auswählen',
          keys: ['Meta', '2'],
        },
        {
          title: 'Zuletzt geschlossenen Tab wieder öffnen',
          keys: ['Shift', 'Meta', 't'],
        },
      ],
    },
    {
      title: 'Layout',
      id: 'layout',
      version: 1,
      shortcuts: [
        {
          title: 'Vergrößern',
          keys: [
            ['Meta', '='],
            ['Meta', '+'],
          ],
        },
        {
          title: 'Verkleinern',
          keys: ['Meta', '-'],
        },
        {
          title: 'Originalgröße',
          keys: ['Meta', '0'],
        },
        {
          title: 'Vollbildansicht beenden',
          keys: ['Escape'],
        },
      ],
    },
    {
      title: 'Leseliste',
      id: 'reading',
      version: 1,
      shortcuts: [
        {
          title: 'Seitenleiste der Leseliste ein- oder ausblenden',
          keys: ['Control', 'Meta', '2'],
        },
        {
          title: 'Aktuelle Seite zur Leseliste hinzufügen',
          keys: ['Shift', 'Meta', 'd'],
        },
      ],
    },
    {
      title: 'Lesezeichen',
      id: 'bookmarks',
      version: 1,
      shortcuts: [
        {
          title: 'Lesezeichen-Seitenleiste ein- oder ausblenden',
          keys: ['Control', 'Meta', '1'],
        },
        {
          title: 'Nächstes Lesezeichen oder nächsten Ordner auswählen',
          keys: ['ArrowDown'],
        },
        {
          title: 'Ausgewähltes Lesezeichen öffnen',
          keys: ['Space'],
        },
        {
          title: 'Ausgewählten Ordner öffnen',
          keys: ['ArrowRight'],
        },
        {
          title: 'Ausgewählten Ordner schließen',
          keys: ['ArrowLeft'],
        },
        {
          title: 'Name oder Adresse eines Lesezeichens ändern',
          keys: ['Enter'],
        },
        {
          title: 'Bearbeiten eines Lesezeichennamens in der Seitenleiste abbrechen',
          keys: ['Escape'],
        },
        // duplicated
        // {
        //   title: 'Finish editing a bookmark name',
        //   keys: ['Enter'],
        // },
        {
          title: 'Lesezeichen löschen',
          keys: ['Backspace'],
        },
      ],
    },
    {
      title: 'Verschiedenes',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Nächstes Objekt auf einer Webseite hervorheben',
          keys: ['Tab'],
        },
        {
          title: 'Lesemodus schließen',
          keys: ['Escape'],
        },
      ],
    },
  ],
}
