const replaceBracket = (value, replacement, bracket) => {
  
  const left  = value.substr(0, bracket.oPos);
  const right = value.substr(bracket.cPos + 1);

  return `${left}${replacement}${right}`;

};

module.exports = replaceBracket;
