const fs = require("fs");
require('path').resolve('./')

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let componentsFolder = fs.existsSync(`./components`);

function createFC() {
  let componentName = readline.question(`Enter the component name: `, (name) => {
    console.log(`Component created: ${name} ✅`);
    console.log(`Please check ./components/${name}.tsx`);
    componentName = name;

    if (!componentsFolder) {
      fs.mkdirSync(`./components`);
      console.log("Components folder created! 💣");
    }

    fs.writeFileSync(
      `./components/${componentName}.tsx`,
      `import { useState } from 'react';

    const ${componentName} = () => {

      const [initial, setInitial] = useState <string> ("");

      return (
        <h1>Component</h1>
      )
    }`
    );
    readline.close();
  });
}

function deleteFC() {
  let componentName = readline.question(`Enter Component to delete: `, (name) => {
    componentName = name;
    let componentPath = `./components/${name}.tsx`;

    fs.unlink(componentPath, () => {
      console.log("Component deleted! 💣");
    });

    readline.close();
  });
}

function askUser() {
  readline.question(`🕵️‍♂️ Hey sir, what you want to do? ('create' or 'delete') `, (res) => {
    if (res.includes("create")) createFC();
    if (res.includes("delete")) deleteFC();
  });
}

askUser()


module.exports = { createFC, deleteFC, askUser }