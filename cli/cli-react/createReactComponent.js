const fs = require("fs");
const { rl } = require("../utils/readLineInterface");
const { refreshComponentsExports } = require("./refreshComponentsExports");

let exportComponentsFileExists = fs.existsSync("./components/index.ts")
let componentFolderExists = fs.existsSync("./components");

function createReactComponent() {
  try {
    if (!componentFolderExists) {
      fs.mkdirSync("./components");
      console.log("Components folder created! 📁");
    }

    rl.question(
      `Enter the component name: `,
      (componentName) => {

        if (!exportComponentsFileExists) {
          fs.writeFileSync(`./components/index.ts`, "");
          console.log("Created index.ts file! 📄");
        }

        refreshComponentsExports(componentName, "add");
        console.log(`Export "${componentName}" added to index.ts file! 📄`);

        fs.mkdirSync(`./components/${componentName}`);

        if (componentName === "Layout") {
          console.log(componentName);

          fs.writeFileSync(
            `./components/${componentName}/${componentName}.tsx`,
            `import { useState } from "react";
import styles from "./${componentName}.module.scss";

type Props = {
  children: JSX.Element;
}
  
export const ${componentName} = ({ children }: Props) => {
  return <div>{children}</div>
};  
  `
          );
        }

        if (componentName !== "Layout") {
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
        };

        fs.writeFileSync(`components/${componentName}/${componentName}.module.scss`, ``);

        console.log(`Component "${componentName}" created! ✅`);

        rl.close();
      }
    );
  } catch (error) {
    console.error("Error:", error.message);
  }
}

module.exports = { createReactComponent };