function concatenateStrings(value1, value2) {
  return value1 + value2;
}
function getStringLength(value) {
  return value.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}

function getFirstChar(value) {
  return value[0];
}

function removeLeadingAndTrailingWhitespaces(value) {
  const str = value.trim();
  return str;
}

function repeatString(value, count) {
  return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  return str.replace(/[<>]/gi, '');
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  const array = str.split(';');
  return array;
}

function getRectangleString(width, height) {
  const topline = `┌${'─'.repeat(width - 2)}┐` + '\n';
  const column = `│${' '.repeat(width - 2)}│` + '\n';
  const bottomline = `└${'─'.repeat(width - 2)}┘` + '\n';
  return topline + column.repeat(height - 2) + bottomline;
}


function encodeToRot13(str) {
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  return str.replace(/[a-z]/gi, (letter) => output[input.indexOf(letter)]);
}

function isString(value) {
  if (typeof value === 'string' || value instanceof String) {
    return true;
  }
  return false;
}

function getCardId(value) {
  const obj = {
    'A♣': 0,
    '2♣': 1,
    '3♣': 2,
    '4♣': 3,
    '5♣': 4,
    '6♣': 5,
    '7♣': 6,
    '8♣': 7,
    '9♣': 8,
    '10♣': 9,
    'J♣': 10,
    'Q♣': 11,
    'K♣': 12,
    'A♦': 13,
    '2♦': 14,
    '3♦': 15,
    '4♦': 16,
    '5♦': 17,
    '6♦': 18,
    '7♦': 19,
    '8♦': 20,
    '9♦': 21,
    '10♦': 22,
    'J♦': 23,
    'Q♦': 24,
    'K♦': 25,
    'A♥': 26,
    '2♥': 27,
    '3♥': 28,
    '4♥': 29,
    '5♥': 30,
    '6♥': 31,
    '7♥': 32,
    '8♥': 33,
    '9♥': 34,
    '10♥': 35,
    'J♥': 36,
    'Q♥': 37,
    'K♥': 38,
    'A♠': 39,
    '2♠': 40,
    '3♠': 41,
    '4♠': 42,
    '5♠': 43,
    '6♠': 44,
    '7♠': 45,
    '8♠': 46,
    '9♠': 47,
    '10♠': 48,
    'J♠': 49,
    'Q♠': 50,
    'K♠': 51,
  };
  return obj[value];
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
