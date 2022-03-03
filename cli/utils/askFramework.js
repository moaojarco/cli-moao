"use strict";
const { createReactComponent } = require("../cli-react/createReactComponent");
const { deleteReactComponent } = require("../cli-react/deleteReactComponent");
const { createVueComponent } = require("../cli-vue/createVueComponent");
const { deleteVueComponent } = require("../cli-vue/deleteVueComponent");
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

      if (answers.framework === "React 🔵" && answers.action === "create") {
        await createReactComponent();
      }

      if (answers.framework === "React 🔵" && answers.action === "delete") {
        await deleteReactComponent();
      }

      if (answers.framework === "Vue 🟢" && answers.action === "create") {
        await createVueComponent();
      }

      if (answers.framework === "Vue 🟢" && answers.action === "delete") {
        await deleteVueComponent();
      }
    });
}

module.exports = { askFramework };
