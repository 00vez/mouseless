// https://support.google.com/docs/answer/179738?co=GENIE.Platform%3DDesktop&hl=en
module.exports = {
  id: 'googledocs',
  title: 'Google Docs',
  category: 'Productivity',
  description: null,
  sets: [
    {
      title: 'Grundlagen',
      id: 'essentials',
      version: 1,
      shortcuts: [
        {
          title: 'Kopieren',
          keys: ['Meta', 'c'],
        },
        {
          title: 'Ausschneiden',
          keys: ['Meta', 'x'],
        },
        {
          title: 'Einfügen',
          keys: ['Meta', 'v'],
        },
        {
          title: 'Ohne Formatierung einfügen',
          keys: ['Meta', 'Shift', 'v'],
        },
        {
          title: 'Rückgängig machen',
          keys: ['Meta', 'z'],
        },
        {
          title: 'Wiederholen',
          keys: ['Meta', 'Shift', 'z'],
        },
        {
          title: 'Link einfügen oder bearbeiten',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Link öffnen',
          keys: ['Alt', 'Enter'],
        },
        {
          title: 'Drucken',
          keys: ['Meta', 'p'],
        },
        {
          title: 'Öffnen',
          keys: ['Meta', 'o'],
        },
        {
          title: 'Suchen',
          keys: ['Meta', 'f'],
        },
        {
          title: 'Suchen und ersetzen',
          keys: ['Meta', 'Shift', 'h'],
        },
        {
          title: 'Erneut suchen',
          keys: ['Meta', 'g'],
        },
        {
          title: 'Vorheriges suchen',
          keys: ['Meta', 'Shift', 'g'],
        },
        {
          title: 'Seitenumbruch einfügen',
          keys: ['Meta', 'Enter'],
        },
        {
          title: 'Letzte Aktion wiederholen',
          keys: ['Meta', 'y'],
        },
      ],
    },
    {
      title: 'Textformatierung',
      id: 'text',
      version: 1,
      shortcuts: [
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
          title: 'Durchgestrichen',
          keys: ['Meta', 'Shift', 'x'],
        },
        {
          title: 'Hochgestellt',
          keys: ['Meta', '.'],
        },
        {
          title: 'Tiefgestellt',
          keys: ['Meta', ','],
        },
        {
          title: 'Textformatierung kopieren',
          keys: ['Meta', 'Alt', 'c'],
        },
        {
          title: 'Textformatierung einfügen',
          keys: ['Meta', 'Alt', 'v'],
        },
        {
          title: 'Textformatierung löschen',
          keys: ['Meta', '\\'],
        },
        {
          title: 'Schriftgröße erhöhen',
          keys: ['Meta', 'Shift', '>'],
        },
        {
          title: 'Schriftgröße verringern',
          keys: ['Meta', 'Shift', '<'],
        },
      ],
    },
    {
      title: 'Absatzformatierung',
      id: 'paragraph',
      version: 1,
      shortcuts: [
        {
          title: 'Absatzeinzug erhöhen',
          keys: ['Meta', ']'],
        },
        {
          title: 'Absatzeinzug verringern',
          keys: ['Meta', '['],
        },
        {
          title: 'Normalen Textstil anwenden',
          keys: ['Meta', 'Alt', '0'],
        },
        // Apply heading style [1-6]: ⌘ + Option + [1-6]
        {
          title: 'Überschriftstil 1 anwenden',
          keys: ['Meta', 'Alt', '1'],
        },
        {
          title: 'Überschriftstil 2 anwenden',
          keys: ['Meta', 'Alt', '2'],
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
          title: 'Blocksatz',
          keys: ['Meta', 'Shift', 'j'],
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
          title: 'Absatz nach oben verschieben',
          keys: ['Control', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Absatz nach unten verschieben',
          keys: ['Control', 'Shift', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Bilder und Zeichnungen',
      id: 'images',
      version: 1,
      shortcuts: [
        {
          title: 'Alternativtext',
          keys: ['Meta', 'Alt', 'y'],
        },
        {
          title: 'Größer einstellen',
          keys: ['Meta', 'Control', 'k'],
        },
        {
          title: 'Horizontal größer einstellen',
          keys: ['Meta', 'Control', 'b'],
        },
        {
          title: 'Vertikal größer einstellen',
          keys: ['Meta', 'Control', 'i'],
        },
        {
          title: 'Kleiner einstellen',
          keys: ['Meta', 'Control', 'j'],
        },
        {
          title: 'Horizontal kleiner einstellen',
          keys: ['Meta', 'Control', 'w'],
        },
        {
          title: 'Vertikal kleiner einstellen',
          keys: ['Meta', 'Control', 'q'],
        },
        {
          title: '15° im Uhrzeigersinn drehen',
          keys: ['Alt', 'ArrowRight'],
        },
        {
          title: '15° gegen den Uhrzeigersinn drehen',
          keys: ['Alt', 'ArrowLeft'],
        },
        {
          title: '1° gegen den Uhrzeigersinn drehen',
          keys: ['Alt', 'Shift', 'ArrowLeft'],
        },
        {
          title: '1° im Uhrzeigersinn drehen',
          keys: ['Alt', 'Shift', 'ArrowRight'],
        },
        // TODO: Two bindings
        // {
        //   title: 'Close drawing editor',
        //   keys: ['Meta', 'Escape'],
        //   keys: ['Shift', 'Escape'],
        // },
      ],
    },
    {
      title: 'Kommentare und Fußnoten',
      id: 'comments',
      version: 1,
      shortcuts: [
        {
          title: 'Kommentar einfügen',
          keys: ['Meta', 'Alt', 'm'],
        },
        {
          title: 'Diskussionsfaden öffnen',
          keys: ['Meta', 'Alt', 'Shift', 'a'],
        },
        {
          title: 'Aktuellen Kommentar bestätigen',
          keys: ['Control', 'Enter'],
        },
        {
          title: 'Fußnote einfügen',
          keys: ['Meta', 'Alt', 'f'],
        },
      ],
    },
    {
      title: 'Menüs',
      id: 'menus',
      version: 1,
      shortcuts: [
        {
          title: 'Kontextmenü (Rechtsklick)',
          keys: ['Meta', 'Shift', '\\'],
        },
        {
          title: 'Menü „Datei“',
          keys: ['Control', 'Alt', 'f'],
        },
        {
          title: 'Menü „Bearbeiten“',
          keys: ['Control', 'Alt', 'e'],
        },
        {
          title: 'Menü „Ansicht“',
          keys: ['Control', 'Alt', 'v'],
        },
        {
          title: 'Menü „Einfügen“',
          keys: ['Control', 'Alt', 'i'],
        },
        {
          title: 'Menü „Format“',
          keys: ['Control', 'Alt', 'o'],
        },
        {
          title: 'Menü „Extras“',
          keys: ['Control', 'Alt', 't'],
        },
        {
          title: 'Menü „Hilfe“',
          keys: ['Control', 'Alt', 'h'],
        },
        {
          title: 'Menü „Barrierefreiheit“',
          description: 'Wird angezeigt, wenn die Unterstützung für den Screenreader aktiviert ist',
          keys: ['Control', 'Alt', 'a'],
        },
        {
          title: 'Menü „Eingabehilfen“',
          description: 'Verfügbar in Dokumenten in nicht-lateinischen Sprachen',
          keys: ['Meta', 'Alt', 'Shift', 'k'],
        },
        {
          title: 'Eingabesteuerungen umschalten',
          description: 'Verfügbar in Dokumenten in nicht-lateinischen Sprachen',
          keys: ['Meta', 'Shift', 'k'],
        },
      ],
    },
    {
      title: 'Textauswahl',
      id: 'selection',
      version: 1,
      shortcuts: [
        {
          title: 'Alle auswählen',
          keys: ['Meta', 'a'],
        },
        {
          title: 'Auswahl um ein Zeichen nach links erweitern',
          keys: ['Shift', 'ArrowLeft'],
        },
        {
          title: 'Auswahl um ein Zeichen nach rechts erweitern',
          keys: ['Shift', 'ArrowRight'],
        },
        {
          title: 'Auswahl um eine Zeile nach oben erweitern',
          keys: ['Shift', 'ArrowUp'],
        },
        {
          title: 'Auswahl um eine Zeile nach unten erweitern',
          keys: ['Shift', 'ArrowDown'],
        },
        // {
        //   title: 'Extend selection to the beginning of the line',
        //   keys: ['Shift', 'Fn', 'ArrowLeft'],
        // },
        {
          title: 'Auswahl um einen Absatz nach oben erweitern',
          keys: ['Alt', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Auswahl um einen Absatz nach unten erweitern',
          keys: ['Alt', 'Shift', 'ArrowDown'],
        },
        // {
        //   title: 'Extend selection to the end of the line',
        //   keys: ['Shift', 'Fn', 'ArrowRight'],
        // },
        {
          title: 'Auswahl bis zum Dokumentanfang erweitern',
          keys: ['Meta', 'Shift', 'ArrowUp'],
        },
        {
          title: 'Auswahl bis zum Dokumentende erweitern',
          keys: ['Meta', 'Shift', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Weitere Tools',
      id: 'other',
      version: 1,
      shortcuts: [
        {
          title: 'Versionsverlauf öffnen',
          keys: ['Meta', 'Alt', 'Shift', 'h'],
        },
        {
          title: 'Tool „Erkunden“ öffnen',
          keys: ['Meta', 'Alt', 'Shift', 'i'],
        },
        {
          title: 'Rechtschreibung/Grammatik öffnen',
          keys: ['Meta', 'Alt', 'x'],
        },
        {
          title: 'Wörterbuch öffnen',
          keys: ['Meta', 'Shift', 'y'],
        },
        {
          title: 'Wortanzahl',
          keys: ['Meta', 'Shift', 'c'],
        },
        {
          title: 'Spracheingabe starten (verfügbar in Chrome-Browsern)',
          keys: ['Meta', 'Shift', 's'],
        },
        // TODO: Two bindings
        // {
        //   title: 'Go to side panel',
        //   keys: ['Meta', 'Alt', '.'],
        //   keys: ['Meta', 'Alt', ','],
        // },
        // {
        //   title: 'Page up',
        //   keys: ['Fn', 'ArrowUp'],
        // },
        // {
        //   title: 'Page down',
        //   keys: ['Fn', 'ArrowDown'],
        // },
        {
          title: 'Zum nächsten Rechtschreibfehler gehen',
          keys: ['Meta', '\''],
        },
        {
          title: 'Zum vorherigen Rechtschreibfehler gehen',
          keys: ['Meta', ';'],
        },
        {
          title: 'Fokus aus dem Dokumenttext bewegen',
          keys: ['Meta', 'Alt', 'Shift', 'm'],
        },
        {
          title: 'Fokus zurück auf den Dokumenttext setzen',
          keys: ['Escape'],
        },
      ],
    },
    {
      title: 'Verschiedenes',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Häufige Tastenkürzel anzeigen',
          keys: ['Meta', '/'],
        },
        {
          title: 'Menüs ausblenden (kompakter Modus)',
          keys: ['Control', 'Shift', 'f'],
        },
      ],
    },
  ],
}
