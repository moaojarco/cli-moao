const fs = require("fs");
const { readline } = require("./readLineInterface");
const { refreshComponentsExports } = require("./refreshComponentsExports");

let exportComponentsFileExists = fs.existsSync("./components/index.ts")
let componentFolderExists = fs.existsSync("./components");

function createReactComponent() {
  try {
    readline.question(
      `Enter the component name: `,
      (componentName) => {
        if (!componentFolderExists) {
          fs.mkdirSync("./components");
          console.log("Components folder created! 📁");
        }

        if (!exportComponentsFileExists) {
          fs.writeFileSync(`./components/index.ts`, "");
          console.log("Created index.ts file! 📄");
        }

        refreshComponentsExports(componentName, "add");
        console.log(`Export "${componentName}" added to index.ts file! 📄`);

        fs.mkdirSync(`./components/${componentName}`);

        fs.writeFileSync(
          `./components/${componentName}/${componentName}.tsx`,
          `import { useState } from "react";
import styles from "./${componentName}.module.scss";

export const ${componentName} = () => {
  const [initial, setInitial] = useState<string>("");

  return (
    <>
      <h1>${componentName}</h1>
    </>
  );
};  
`
        );
        fs.writeFileSync(`components/${componentName}/${componentName}.module.scss`, ``);

        console.log(`Component "${componentName}" created! ✅`);

        readline.close();
      }
    );
  } catch (error) {
    console.error("Error:", error.message);
  }
}

module.exports = { createReactComponent };