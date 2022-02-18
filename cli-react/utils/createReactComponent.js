const fs = require("fs");
const { readline } = require("./readLineInterface");

let exportComponentsFile = "./components/index.ts";
let componentName;
let componentFolderExists = fs.existsSync("./components");


function createReactComponent() {
  try {
    componentName = readline.question(
      `Enter the component name: `,
      (name) => {
        console.log(`Component created: "${name}" ✅`);
        console.log(`Please check ./components/${name}.tsx`);
        componentName = name;

        if (!componentFolderExists) {
          fs.mkdirSync("./components");
          console.log("Components folder created! 📁");
        }

        if (!exportComponentsFile) {
          fs.writeFileSync(`./components/index.ts`, "");
          console.log("Created index.ts file! 📄");
        }

        fs.mkdirSync(`./components/${name}`);

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

        // refreshComponentsExports(componentName, "add");
        // console.log(`Export "${componentName}" added to index.ts file! 📄`);

        readline.close();
      }
    );
  } catch (error) {
    console.error("Error:", error.message);
  }
}

module.exports = { createReactComponent };