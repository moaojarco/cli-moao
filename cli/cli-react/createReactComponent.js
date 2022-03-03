const inquirer = require("../utils/inquirer");
const fs = require("fs");
const { refreshComponentsExports } = require("./refreshComponentsExports");

let exportComponentsFileExists = fs.existsSync("./components/index.ts");
let componentFolderExists = fs.existsSync("./components");

async function createReactComponent() {
  try {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "componentName",
          message: "Which component do you want to create?",
        },
      ])
      .then((answers) => {
        if (!componentFolderExists) {
          fs.mkdirSync("./components");
          console.log("Components folder created! 📁");
        }

        if (!exportComponentsFileExists) {
          fs.writeFileSync(`./components/index.ts`, "");
          console.log("Created index.ts file! ✅");
        }

        refreshComponentsExports(answers.componentName, "add");

        console.log(
          `Export "${answers.componentName}" added to index.ts file! ✅`
        );

        fs.mkdirSync(`./components/${answers.componentName}`);

        if (answers.componentName === "Layout") {
          console.log(answers.componentName);

          fs.writeFileSync(
            `./components/${answers.componentName}/${answers.componentName}.tsx`,
            `import { useState } from "react";
  import styles from "./${answers.componentName}.module.scss";
  
  type Props = {
    children: JSX.Element;
  }
    
  export const ${answers.componentName} = ({ children }: Props) => {
    return <div>{children}</div>
  };  
    `
          );
        }

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
