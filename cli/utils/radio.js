var Radio = require('prompt-radio');
var prompt = new Radio({
  name: 'frameworks',
  message: 'Which framework are you using?',
  choices: [
    'React 🔵 (Next.js)',
    'Vue 🟢 (Nuxt.js)'
  ],
  default: 'React 🔵 (Next.js)'
});




module.exports = { prompt }