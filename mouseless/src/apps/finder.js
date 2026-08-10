// https://support.apple.com/en-gb/HT201236
module.exports = {
  id: 'finder',
  title: 'Finder',
  category: 'Utility',
  description: null,
  sets: [
    {
      title: 'Grundlagen',
      id: 'essentials',
      version: 2,
      shortcuts: [
        {
          title: 'Neuen Ordner erstellen',
          keys: ['Shift', 'Meta', 'n'],
        },
        {
          title: 'Neues Finder-Fenster öffnen',
          keys: ['Meta', 'n'],
        },
        {
          title: 'Neuen Tab öffnen',
          keys: ['Meta', 't'],
        },
        {
          title: 'Neuen Smart-Ordner erstellen',
          keys: ['Alt', 'Meta', 'n'],
        },
        {
          title: 'Ausgewählte Dateien duplizieren',
          keys: ['Meta', 'd'],
        },
        {
          title: 'Info-Fenster für eine ausgewählte Datei anzeigen',
          keys: ['Meta', 'i'],
        },
        {
          title: 'Spotlight-Suche im Finder-Fenster starten',
          keys: ['Meta', 'f'],
        },
      ],
    },
    {
      title: 'Quick Look',
      id: 'quick-look',
      version: 1,
      shortcuts: [
        {
          title: 'Quick Look zum Vorschauen der ausgewählten Dateien verwenden',
          keys: ['Space'],
        },
        {
          title: 'Quick-Look-Diashow der ausgewählten Dateien ansehen',
          keys: ['Alt', 'Space'],
        },
      ],
    },
    {
      title: 'Navigation',
      id: 'navigation',
      version: 1,
      shortcuts: [
        {
          title: 'Zum vorherigen Ordner gehen',
          keys: ['Meta', '['],
        },
        {
          title: 'Zum nächsten Ordner gehen',
          keys: ['Meta', ']'],
        },
        {
          title: 'Fenster „Gehe zu Ordner“ öffnen',
          keys: ['Shift', 'Meta', 'g'],
        },
        {
          title: 'Ausgewähltes Objekt öffnen',
          keys: ['Meta', 'ArrowDown'],
        },
        {
          title: 'Ordner öffnen, der den aktuellen Ordner enthält',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Ordner, der den aktuellen Ordner enthält, in einem neuen Fenster öffnen',
          keys: ['Meta', 'Control', 'ArrowUp'],
        },
      ],
    },
    {
      title: 'Systemordner',
      id: 'system-folders',
      version: 1,
      shortcuts: [
        {
          title: 'Home-Ordner des aktuellen macOS-Benutzerkontos öffnen',
          keys: ['Shift', 'Meta', 'h'],
        },
        {
          title: 'Computer-Fenster öffnen',
          keys: ['Shift', 'Meta', 'c'],
        },
        {
          title: 'Netzwerk-Fenster öffnen',
          keys: ['Shift', 'Meta', 'k'],
        },
        {
          title: 'Desktop-Ordner öffnen',
          keys: ['Shift', 'Meta', 'd'],
        },
        {
          title: 'Ordner „Dienstprogramme“ öffnen',
          keys: ['Shift', 'Meta', 'u'],
        },
        {
          title: 'Ordner „Downloads“ öffnen',
          keys: ['Alt', 'Meta', 'l'],
        },
        {
          title: 'Ordner „Dokumente“ öffnen',
          keys: ['Shift', 'Meta', 'o'],
        },
        {
          title: 'iCloud Drive öffnen',
          keys: ['Shift', 'Meta', 'i'],
        },
      ],
    },
    {
      title: 'Layout',
      id: 'layout',
      version: 2,
      shortcuts: [
        {
          title: 'Objekte im Finder-Fenster als Symbole anzeigen',
          keys: ['Meta', '1'],
        },
        {
          title: 'Objekte im Finder-Fenster als Liste anzeigen',
          keys: ['Meta', '2'],
        },
        {
          title: 'Objekte im Finder-Fenster in Spalten anzeigen',
          keys: ['Meta', '3'],
        },
        {
          title: 'Objekte im Finder-Fenster mit Cover Flow anzeigen',
          keys: ['Meta', '4'],
        },
        {
          title: 'Vorschaubereich in Finder-Fenstern ein- oder ausblenden',
          keys: ['Shift', 'Meta', 'p'],
        },
        {
          title: 'Tab-Leiste in Finder-Fenstern ein- oder ausblenden',
          keys: ['Shift', 'Meta', 't'],
        },
        {
          title: 'Pfadleiste in Finder-Fenstern aus- oder einblenden',
          keys: ['Alt', 'Meta', 'p'],
        },
        {
          title: 'Seitenleiste in Finder-Fenstern aus- oder einblenden',
          keys: ['Alt', 'Meta', 's'],
        },
        {
          title: 'Statusleiste in Finder-Fenstern aus- oder einblenden',
          keys: ['Meta', '/'],
        },
        {
          title: 'Symbolleiste ein- oder ausblenden, wenn ein einzelner Tab im aktuellen Finder-Fenster geöffnet ist',
          keys: ['Alt', 'Meta', 't'],
        },
        {
          title: 'Anzeigeoptionen zeigen',
          keys: ['Meta', 'j'],
        },
      ],
    },
    {
      title: 'Papierkorb',
      id: 'trash',
      version: 1,
      shortcuts: [
        {
          title: 'Ausgewähltes Objekt in den Papierkorb bewegen',
          keys: ['Meta', 'Backspace'],
        },
        {
          title: 'Papierkorb leeren',
          keys: ['Shift', 'Meta', 'Backspace'],
        },
        {
          title: 'Papierkorb ohne Bestätigungsdialog leeren',
          keys: ['Alt', 'Shift', 'Meta', 'Backspace'],
        },
      ],
    },
    {
      title: 'Verschiedenes',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Ausgewählten Datenträger oder Volume auswerfen',
          keys: ['Meta', 'e'],
        },
        {
          title: 'Fenster „Zuletzt“ öffnen, das alle zuletzt angezeigten oder geänderten Dateien zeigt',
          keys: ['Shift', 'Meta', 'f'],
        },
        {
          title: 'AirDrop-Fenster öffnen',
          keys: ['Shift', 'Meta', 'r'],
        },
        {
          title: 'Ausgewähltes Finder-Objekt zum Dock hinzufügen',
          keys: ['Control', 'Shift', 'Meta', 't'],
        },
        {
          title: 'Ausgewähltes Objekt zur Seitenleiste hinzufügen',
          keys: ['Control', 'Meta', 't'],
        },
        {
          title: 'Fenster „Mit Server verbinden“ öffnen',
          keys: ['Meta', 'k'],
        },
        {
          title: 'Alias des ausgewählten Objekts erstellen',
          keys: ['Meta', 'l'],
        },
        {
          title: 'Dateien aus der Zwischenablage an den aktuellen Ort bewegen',
          keys: ['Alt', 'Meta', 'v'],
        },
      ],
    },
  ],
  // TODO: Meta-R: (1) When an alias is selected the Finder: show the original file for the selected alias. (2) In some apps, such as Calendar or Safari, refresh or reload the page. (3) In Software Update preferences, check for software updates again.
  // TODO: Works only in the list view
  // {
  //   title: 'Open the selected folder',
  //   description: 'This works only when in list view',
  //   keys: ['ArrowRight'],
  // },
  // {
  //   title: 'Close the selected folder',
  //   description: 'This works only when in list view',
  //   keys: ['ArrowLeft'],
  // },
  // TODO: Special keys
  // {
  //   title: 'Turn target display mode on or off',
  //   keys: ['Meta', 'Brightness Up'],
  // },
  // {
  //   title: 'Turn video mirroring on or off when your Mac is connected to more than one display',
  //   keys: ['Meta', 'Brightness Down'],
  // },
  // {
  //   title: 'Open Displays preferences. This works with either Brightness key',
  //   keys: ['Option', 'Brightness Up'],
  // },
  // {
  //   title: 'Change the brightness of your external display, if supported by your display',
  //   keys: ['Control', 'Brightness Up or Control', 'Brightness Down'],
  // },
  // {
  //   title: 'Adjust the display brightness in smaller steps. Add the Control key to this shortcut to make the adjustment on your external display, if supported by your display',
  //   keys: ['Option', 'Shift', 'Brightness Up or Option', 'Shift', 'Brightness Down'],
  // },
  // {
  //   title: 'Open Mission Control preferences',
  //   keys: ['Option', 'Mission Control'],
  // },
  // {
  //   title: 'Show the desktop',
  //   keys: ['Meta', 'Mission Control'],
  // },
  // {
  //   title: 'Open Sound preferences. This works with any of the volume keys',
  //   keys: ['Option', 'Volume Up'],
  // },
  // {
  //   title: 'Adjust the sound volume in smaller steps',
  //   keys: ['Option', 'Shift', 'Volume Up or Option', 'Shift', 'Volume Down'],
  // },
  // {
  //   title: 'Open Keyboard preferences. This works with either Keyboard Brightness key',
  //   keys: ['Option', 'Keyboard Brightness Up'],
  // },
  // {
  //   title: 'Adjust the keyboard brightness in smaller steps',
  //   keys: ['Option', 'Shift', 'Keyboard Brightness Up or Option', 'Shift', 'Keyboard Brightness Down'],
  // },
  // {
  //   title: 'Open the item in a separate window, then close the original window',
  //   keys: ['Option key while double', 'clicking'],
  // },
  // {
  //   title: 'Open a folder in a separate tab or window',
  //   keys: ['Meta key while double', 'clicking'],
  // },
  // {
  //   title: 'Move the dragged item to the other volume, instead of copying it',
  //   keys: ['Meta key while dragging to another volume'],
  // },
  // {
  //   title: 'Copy the dragged item. The pointer changes while you drag the item',
  //   keys: ['Option key while dragging'],
  // },
  // {
  //   title: 'Make an alias of the dragged item. The pointer changes while you drag the item',
  //   keys: ['Alt', 'Meta while dragging'],
  // },
  // {
  //   title: 'Open all folders within the selected folder. This works only when in list view',
  //   keys: ['Alt', 'click a disclosure triangle'],
  // },
  // {
  //   title: 'See the folders that contain the current folder',
  //   keys: ['Meta', 'click a window title'],
  // },
}
