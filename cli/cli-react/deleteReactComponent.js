const fs = require("fs");
const inquirer = require("../utils/inquirer");
const { refreshComponentsExports } = require("./refreshComponentsExports");

async function deleteReactComponent() {
  try {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "componentName",
          message: "Which component do you want to delete?",
        },
      ])
      .then((answers) => {
        let componentPath = `./components/${answers.componentName}`;

        fs.rm(componentPath, { recursive: true }, () =>
          console.log(`Component "${answers.componentName}" deleted! 🗑️`)
        );

        refreshComponentsExports(answers.componentName, "delete");
      });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { deleteReactComponent };
