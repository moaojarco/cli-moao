const fs = require("fs");
require("path").resolve("./");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let exportComponentsFile = "./components/index.ts";
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

        refreshComponentsExports(componentName, "add");
        console.log(`Export "${componentName}" added to index.ts file! 📄`);

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

      refreshComponentsExports(componentName, "delete");

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

      if (!res.includes("create") && !res.includes("delete")) {
        console.log("🎈 Error : Invalid option");
        askUser();
      }

      if (res.includes("exit")) process.exit();
    }
  );
}

function refreshComponentsExports(componentName, method) {
  if (method === "add") {
    if (exportComponentsFile) {
      if (!exportComponentsFile.includes(`export * from "./${componentName}/${componentName}";`)) {
        fs.appendFileSync('./components/index.ts', `
export * from "./${componentName}/${componentName}"`);
      }
    }
  };

  if (method === "delete") {
    if (fs.readFileSync(exportComponentsFile, "utf8").includes(`export * from "./${componentName}/${componentName}"`)) {
      let file = fs.readFileSync(exportComponentsFile, "utf8");
      file = file.replace(`export * from "./${componentName}/${componentName}"`, "").trim();
      fs.writeFileSync(exportComponentsFile, file);
    }
  };
}

module.exports = { askUser, createFC, deleteFC, refreshComponentsExports };