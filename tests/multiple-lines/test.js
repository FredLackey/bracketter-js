const { replace } = require('../../index');

const lines = [
  'Hello {name}! How are you?',
  'Today is {day}.',
];

const values = {
  name: 'World',
}

const defaults = {
  day: 'a great day',
}

const result = replace({ 
  lines,
  values,
  defaults,
});

console.log(result);