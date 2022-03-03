const inquirer = require("../utils/inquirer");
const { createReactComponent } = require("./createReactComponent");
const { deleteReactComponent } = require("./deleteReactComponent");

async function promptReact() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Next.js 🔵: What you want to do?",
        choices: ["Create Component", "Delete Component"],
        filter(val) {
          return val.toLowerCase();
        },
      },
    ])
    .then(async (answers) => {
      // console.log(JSON.stringify(answers, null, "  "));
      if (answers.action === "create component") {
        await createReactComponent();
      }

      if (answers.action === "delete component") {
        await deleteReactComponent();
      }
    });
}

module.exports = { promptReact };
