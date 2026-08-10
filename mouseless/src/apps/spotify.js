// https://support.spotify.com/us/using_spotify/system_settings/keyboard-shortcuts/
module.exports = {
  id: 'spotify',
  title: 'Spotify',
  category: 'Entertainment',
  description: null,
  sets: [
    {
      title: 'Grundlagen',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Neue Wiedergabeliste erstellen',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Alle auswählen',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Wiedergabe/Pause',
          keys: ['Space'],
        },
        {
          title: 'Wiederholen',
          keys: ['Meta', 'r'],
        },
        {
          title: 'Zufallswiedergabe',
          keys: ['Meta', 's'],
        },
        {
          title: 'Filtern (bei Songs und Wiedergabelisten)',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Ausgewählte Zeile abspielen',
          keys: ['Enter'],
        },
        {
          title: 'Nächster Titel',
          keys: ['Control', 'Meta', 'ArrowRight'],
        },
        {
          title: 'Vorheriger Titel',
          keys: ['Control', 'Meta', 'ArrowLeft'],
        },
      ],
    },
    {
      title: 'Lautstärke',
      id: 'volume',
      version: 1,
      shortcuts: [
        {
          title: 'Lauter',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Leiser',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'Stummschalten',
          keys: ['Meta', 'Shift', 'ArrowDown'],
        },
        {
          title: 'Maximale Lautstärke',
          keys: ['Meta', 'Shift', 'ArrowUp'],
        },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Zurück',
          keys: ['Meta', 'Alt', 'ArrowLeft'],
        },
        {
          title: 'Vorwärts',
          keys: ['Meta', 'Alt', 'ArrowRight'],
        },
      ],
    },
    {
      title: 'Fenster',
      id: 'window',
      version: 1,
      shortcuts: [
        {
          title: 'Beenden',
          keys: ['Meta', 'q'],
        },
        {
          title: 'Fenster ausblenden',
          keys: ['Meta', 'h'],
        },
        {
          title: 'Fenster anderer Apps ausblenden',
          keys: ['Meta', 'Alt', 'h'],
        },
        {
          title: 'Fenster schließen',
          keys: ['Meta', 'w'],
        },
        {
          title: 'Fenster verkleinern',
          keys: ['Meta', 'm'],
        },
        {
          title: 'Aus dem verkleinerten Zustand wiederherstellen',
          keys: ['Meta', 'Alt', '1'],
        },
      ],
    },
    {
      title: 'Verschiedenes',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Aktiven Benutzer abmelden',
          keys: ['Meta', 'Shift', 'w'],
        },
        {
          title: 'Fokus auf das Suchfeld setzen',
          keys: ['Meta', 'Alt', 'f'],
        },
        {
          title: 'Einstellungen',
          keys: ['Meta', ','],
        },
        {
          title: 'Hilfe anzeigen',
          keys: ['Meta', 'Shift', '?'],
        },
      ],
    },
  ],
}
