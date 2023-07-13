const getBracket = require('./get-bracket');

const isBracketted = value => {
  const bracket = getBracket(value);
  return (bracket && isValid(value));
};

module.exports = isBracketted;
