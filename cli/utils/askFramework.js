const { promptFramework } = require("./radio");
const { promptReact } = require("../cli-react/promptReact");
const { promptVue } = require("../cli-vue/promptVue");

function askFramework() {
  promptFramework
    .run((answer) => {})
    .then((res) => {
      process.stdin.resume();
      if (res.includes("React")) promptReact();
      if (res.includes("Vue")) promptVue();
    });
}

module.exports = { askFramework };
