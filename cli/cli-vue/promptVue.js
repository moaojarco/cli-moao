const inquirer = require("../utils/inquirer");
const { createVueComponent } = require("./createVueComponent");
const { deleteVueComponent } = require("./deleteVueComponent");

async function promptVue() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Nuxt.js 🟢: What you want to do?",
        choices: ["Create Component", "Delete Component"],
        filter(val) {
          return val.toLowerCase();
        },
      },
    ])
    .then(async (answers) => {
      // console.log(JSON.stringify(answers, null, "  "));
      if (answers.action === "create component") {
        await createVueComponent();
      }

      if (answers.action === "delete component") {
        await deleteVueComponent();
      }
    });
}

module.exports = { promptVue };
