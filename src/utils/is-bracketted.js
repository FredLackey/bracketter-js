const findBracket = require('./find-bracket');

const isBracketted = value => {
  const bracket = findBracket(value);
  return (bracket && isValid(value));
};

module.exports = isBracketted;
