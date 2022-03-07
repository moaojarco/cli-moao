const fs = require("fs");
const inquirer = require("../utils/inquirer");
const { refreshComponentsExports } = require("./refreshComponentsExports");

let componentFolderCRA = fs.existsSync("./src/components");
let componentFolderNext = fs.existsSync("./components");

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
        if (componentFolderCRA) {
          console.log("Removing component");
          setTimeout(() => {
            let componentPath = `./src/components/${answers.componentName}`;

            fs.rm(componentPath, { recursive: true }, () =>
              console.log(`Component "${answers.componentName}" deleted! 🗑️`)
            );

            refreshComponentsExports(
              answers.componentName,
              "delete",
              "create-react-app"
            );
          }, 2000);
        }

        if (componentFolderNext) {
          console.log("Removing component");
          setTimeout(() => {
            let componentPath = `./components/${answers.componentName}`;

            fs.rm(componentPath, { recursive: true }, () =>
              console.log(`Component "${answers.componentName}" deleted! 🗑️`)
            );

            refreshComponentsExports(answers.componentName, "delete", "next");
          }, 2000);
        }
      });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { deleteReactComponent };
