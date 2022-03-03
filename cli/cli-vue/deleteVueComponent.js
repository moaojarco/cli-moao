const fs = require("fs");
const inquirer = require("../utils/inquirer");

async function deleteVueComponent() {
  try {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "componentName",
          message: "Enter Component to delete: ",
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
