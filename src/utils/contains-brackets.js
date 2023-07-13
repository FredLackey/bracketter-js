const getBracket = require('./get-bracket');

const constainsBracket = valueOrValues => {
  const values = [].concat(valueOrValues);
  for (let i = 0; i < values.length; i++) {
    const bracket = getBracket(values[i]);
    if (bracket?.close && bracket?.open) {
      return true;
    }
  }
  return false;
};

module.exports = constainsBracket;