const fs = require("fs");
const inquirer = require("../utils/inquirer");

let componentFolderVite = fs.existsSync("./src/components");
let componentFolderNuxt = fs.existsSync("./components");

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
        if (componentFolderVite) {
          console.log("Removing component");
          setTimeout(() => {
            let componentFile = `./src/components/${answers.componentName}.vue`;

            fs.rm(componentFile, { recursive: true }, () =>
              console.log(`Component "${answers.componentName}" deleted! 🗑️`)
            );
          }, 2000);
        }

        if (componentFolderNuxt) {
          console.log("Removing component");
          setTimeout(() => {
            let componentFile = `./components/${answers.componentName}.vue`;

            fs.rm(componentFile, { recursive: true }, () =>
              console.log(`Component "${answers.componentName}" deleted! 🗑️`)
            );
          }, 2000);
        }
      });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { deleteVueComponent };
