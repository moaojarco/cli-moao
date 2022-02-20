const { prompt } = require("./radio");
const { promptReact } = require("../cli-react/promptReact");
const { promptVue } = require("../cli-vue/promptVue");

function askFramework() {
  prompt.run((answer) => {
    // BUG: Check if answer is "React" or "Vue"

    console.log(`You choose ${answer}`);
  }).then((res) => {
    console.log(res);
    process.stdin.resume();
    if (res.includes("React")) promptReact();
    if (res.includes("Vue")) promptVue();
  })
}

module.exports = { askFramework }