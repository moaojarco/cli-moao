const fs = require("fs");
require("path").resolve("./");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let importComponentsFile = "./components/index.ts";
let componentName;
let componentsFolder = "./components";

function createFC() {
  try {
    componentName = readline.question(
      `Enter the component name: `,
      (name) => {
        console.log(`Component created: "${name}" ✅`);
        console.log(`Please check ./components/${name}.tsx`);
        componentName = name;

        if (!fs.existsSync(componentsFolder)) {
          fs.mkdirSync(`./components`);
          console.log("Components folder created! 📁");
        }

        if (!importComponentsFile) {
          fs.writeFileSync(`./components/index.ts`, "");
          console.log("Created index.ts file! 📄");
        }


        fs.mkdirSync(`./components/${name}`);

        fs.writeFileSync(
          `./components/${componentName}/${componentName}.tsx`,
          `import { useState } from "react";
import styles from "./${componentName}.module.scss";

const ${componentName} = () => {
  const [initial, setInitial] = useState<string>("");

  return (
    <>
      <h1>Component</h1>
    </>
  );
};

export default ${componentName};    
`
        );
        refreshComponentsExports(componentName);
        fs.writeFileSync(`components/${componentName}/${componentName}.module.scss`, ``);
        readline.close();
      }
    );
  } catch (error) {
    console.error("Error creating component");
  }
}

function deleteFC() {
  let componentName = readline.question(
    `Enter Component to delete: `,
    (name) => {
      componentName = name;
      let componentPath = `./components/${componentName}`;

      fs.rm(componentPath, { recursive: true }, () => console.log("done"));

      readline.close();
    }
  );
}

function askUser() {
  readline.question(
    `
    _____________________________________________________
    |                                                    |
     Hey, what you want to do? ('create' or 'delete')    |
    |____________________________________________________|
    
    -> `,
    (res) => {
      if (res.includes("create")) createFC();
      if (res.includes("delete")) deleteFC();
      else askUser();
    }
  );
}

function refreshComponentsExports(componentName) {
  if (importComponentsFile) {
    if (importComponentsFile.includes(`export * from "./${componentName}/${componentName}";`)) console.log("Component already exists");

    if (!importComponentsFile.includes(`export * from "./${componentName}/${componentName}";`)) {
      fs.appendFileSync('./components/index.ts', `
export * from "./${componentName}/${componentName}";`);
      console.log(`Export "${componentName}" added to index.ts file! 📄`);
    }
  }

};

module.exports = { askUser, createFC, deleteFC, refreshComponentsExports };