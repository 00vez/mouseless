// Stand-in for `native-keymap` in the web build. There is no browser API to
// read the OS keyboard layout, so we ship a fixed US ANSI table instead.
// Aliased in place of `native-keymap` via vue.config.js when
// VUE_APP_TARGET=web, so Keyboard.js/DB.js need no changes.

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((map, letter) => ({
  ...map,
  [`Key${letter.toUpperCase()}`]: {
    value: letter,
    withShift: letter.toUpperCase(),
    withAltGr: '',
    withShiftAltGr: '',
  },
}), {})

const digits = {
  Digit0: { value: '0', withShift: ')' },
  Digit1: { value: '1', withShift: '!' },
  Digit2: { value: '2', withShift: '@' },
  Digit3: { value: '3', withShift: '#' },
  Digit4: { value: '4', withShift: '$' },
  Digit5: { value: '5', withShift: '%' },
  Digit6: { value: '6', withShift: '^' },
  Digit7: { value: '7', withShift: '&' },
  Digit8: { value: '8', withShift: '*' },
  Digit9: { value: '9', withShift: '(' },
}

const punctuation = {
  Minus: { value: '-', withShift: '_' },
  Equal: { value: '=', withShift: '+' },
  BracketLeft: { value: '[', withShift: '{' },
  BracketRight: { value: ']', withShift: '}' },
  Backslash: { value: '\\', withShift: '|' },
  Semicolon: { value: ';', withShift: ':' },
  Quote: { value: '\'', withShift: '"' },
  Comma: { value: ',', withShift: '<' },
  Period: { value: '.', withShift: '>' },
  Slash: { value: '/', withShift: '?' },
  Backquote: { value: '`', withShift: '~' },
  IntlBackslash: { value: '\\', withShift: '|' },
  Space: { value: ' ', withShift: ' ' },
}

const basicKeyMap = Object.entries({ ...letters, ...digits, ...punctuation })
  .reduce((map, [code, data]) => ({
    ...map,
    [code]: {
      withAltGr: '',
      withShiftAltGr: '',
      ...data,
    },
  }), {})

module.exports = {
  getKeyMap() {
    return basicKeyMap
  },

  isISOKeyboard() {
    return false
  },

  getCurrentKeyboardLayout() {
    return { localizedName: 'Web (US)' }
  },
}
