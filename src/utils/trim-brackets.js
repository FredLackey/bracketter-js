const isBracketted = require('./is-bracketted');
const findBracket  = require('./find-bracket');

const trimBrackets = value => {
  while (isBracketted(value)) {
    const bracket = findBracket(value);
    if (value.length <= (bracket.open.length + bracket.close.length)) {
      return '';
    }
    value = value.substr(bracket.open.length);
    value = value.substr(0, value.length - bracket.close.length);
  }
  return value;
};

module.exports = trimBrackets;
