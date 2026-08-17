// https://support.microsoft.com/en-us/office/keyboard-shortcuts-in-word-for-mac-94e97e88-5b3c-4f2a-9c1e-6a1f0d0b0e16
module.exports = {
  id: 'word',
  title: 'Word',
  category: 'Produktivität',
  sets: [
    {
      title: 'Dokument',
      id: 'document',
      version: 1,
      shortcuts: [
        {
          title: 'Neues Dokument erstellen',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Dokument öffnen',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Dokument speichern',
          keys: ['Meta', 's'],
        },
        {
          title: 'Speichern unter',
          keys: ['Shift', 'Meta', 's'],
        },
        {
          title: 'Dokument drucken',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Dokument schließen',
          keys: ['Meta', 'w'],
        },
      ],
    },
    {
      title: 'Text formatieren',
      id: 'format',
      version: 1,
      shortcuts: [
        {
          title: 'Fett formatieren',
          keys: ['Meta', 'b'],
        },
        {
          title: 'Kursiv formatieren',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Unterstreichen',
          keys: ['Meta', 'u'],
        },
        {
          title: 'Durchgestrichen',
          keys: ['Shift', 'Meta', 'x'],
        },
        {
          title: 'Schriftgröße vergrößern',
          keys: ['Shift', 'Meta', '>'],
        },
        {
          title: 'Schriftgröße verkleinern',
          keys: ['Shift', 'Meta', '<'],
        },
      ],
    },
    {
      title: 'Absatz',
      id: 'paragraph',
      version: 1,
      shortcuts: [
        {
          title: 'Zentriert ausrichten',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Blocksatz',
          keys: ['Meta', 'j'],
        },
        {
          title: 'Links ausrichten',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Rechts ausrichten',
          keys: ['Meta', 'r'],
        },
      ],
    },
    {
      title: 'Bearbeiten',
      id: 'editing',
      version: 1,
      shortcuts: [
        {
          title: 'Rückgängig',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Wiederholen',
          keys: ['Meta', 'y'],
        },
        {
          title: 'Ausschneiden',
          keys: ['Meta', 'x'],
        },
        {
          title: 'Kopieren',
          keys: ['Meta', 'c'],
        },
        {
          title: 'Einfügen',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Alles auswählen',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Suchen',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Hyperlink einfügen',
          keys: ['Meta', 'k'],
        },
      ],
    },
  ],
}
