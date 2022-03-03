const fs = require("fs");
const inquirer = require("../utils/inquirer");

async function deleteVueComponent() {
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
        let componentFile = `./components/${answers.componentName}.vue`;

        fs.rm(componentFile, { recursive: true }, () =>
          console.log(`Component "${answers.componentName}" deleted! 🗑️`)
        );
      });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { deleteVueComponent };
