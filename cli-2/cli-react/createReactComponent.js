const inquirer = require("../utils/inquirer");
const fs = require("fs");

let exportComponentsFileExists = fs.existsSync("./components/index.ts");
let componentFolderExists = fs.existsSync("./components");

async function createReactComponent() {
  try {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "componentName",
          message: "What component you want to create?",
        },
      ])
      .then((answers) => {
        if (!componentFolderExists) {
          fs.mkdirSync("./components");
          console.log("Components folder created! 📁");
        }

        if (!exportComponentsFileExists) {
          fs.writeFileSync(`./components/index.ts`, "");
          console.log("Created index.ts file! 📄");
        }

        console.log(
          `Export "${answers.componentName}" added to index.ts file! 📄`
        );

        fs.mkdirSync(`./components/${answers.componentName}`);

        if (answers.componentName !== "Layout") {
          fs.writeFileSync(
            `./components/${answers.componentName}/${answers.componentName}.tsx`,
            `import { useState } from "react";
    import styles from "./${answers.componentName}.module.scss";
    
    export const ${answers.componentName} = () => {
      const [initial, setInitial] = useState<string>("");
    
      return (
        <>
          <h1>${answers.componentName}</h1>
        </>
      );
    };  
    `
          );
        }

        fs.writeFileSync(
          `components/${answers.componentName}/${answers.componentName}.module.scss`,
          ``
        );

        console.log(`Component "${answers.componentName}" created! ✅`);
        // console.log(JSON.stringify(answers, null, "  "));
      });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { createReactComponent };
