#!/usr/bin/env node

const fs = require("fs");
require('path').resolve('./')

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let componentsFolder = fs.existsSync(`./components`);

function createFC() {
  try {
    let componentName = readline.question(`Enter the component name: `, (name) => {
      console.log(`Component created: ${name} ✅`);
      console.log(`Please check ./components/${name}.tsx`);
      componentName = name;

      if (!componentsFolder) {
        fs.mkdirSync(`./components`);
        console.log("Components folder created! 💣");
      }

      fs.mkdirSync(`./components/${name}`);

      fs.writeFileSync(
        `./components/${componentName}/index.tsx`,
        `import { useState } from "react";
import { styles } from "./styles.module.scss";

const ${componentName} = () => {
  const [initial, setInitial] = useState<string>("");

  return (
        <h1>Component</h1>
      )
    }`
      );

      fs.writeFileSync(
        `components/${componentName}/styles.module.scss`,
        ``
      )
      readline.close();
    });
  } catch (error) {
    console.error("Error creating component");
  }

}

function deleteFC() {
  let componentName = readline.question(`Enter Component to delete: `, (name) => {
    componentName = name;
    let componentPath = `./components/${componentName}`;

    fs.rm(componentPath, { recursive: true }, () => console.log('done'));

    readline.close();
  });
}

function askUser() {
  readline.question(`🕵️‍♂️ Hey sir, what you want to do? ('create' or 'delete') `, (res) => {
    if (res.includes("create")) createFC();
    if (res.includes("delete")) deleteFC();
  });
}

if (require.main === module) {
  askUser()
}


module.exports = { createFC, deleteFC, askUser }