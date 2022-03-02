const Radio = require("prompt-radio");

const promptFramework = new Radio({
  name: "frameworks",
  message: "Which framework are you using?",
  choices: ["React 🔵 (Next.js)", "Vue 🟢 (Nuxt.js)"],
  default: "React 🔵 (Next.js)",
});

const promptCreateOrDelete = new Radio({
  name: "do",
  message: "What you want to do?",
  choices: ["Create", "Delete"],
  default: ["Create"],
});

module.exports = { promptFramework, promptCreateOrDelete };
