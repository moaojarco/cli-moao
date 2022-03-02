"use strict";
const { createReactComponent } = require("../cli-react/createReactComponent");
const inquirer = require("./inquirer");

async function askFramework() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "framework",
        message: "What framework you are using now?",
        choices: ["React 🔵", "Vue 🟢"],
      },
      {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: ["Create", "Delete"],
        filter(val) {
          return val.toLowerCase();
        },
      },
    ])
    .then(async (answers) => {
      // console.log(JSON.stringify(answers, null, "  "));

      if (answers.framework === "React 🔵") {
        await createReactComponent();
      }
    });
}

module.exports = { askFramework };
