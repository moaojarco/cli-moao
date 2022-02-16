const fs = require("fs");



const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFC() {
  let componentName = readline.question(`Enter the component name: `, (name) => {
    console.log(`Created ${name}`);
    componentName = name;

    if (fs.existsSync(`./src/components/${componentName}.tsx`)) throw Error;

    fs.writeFileSync(
      `./src/components/${componentName}.tsx`,
      `import { useState } from 'react';

const ${componentName} = () => {
    
  const [initial, setInitial] = useState<string>("");

  return (
    <h1>Component</h1>
  )
}`
    );
    readline.close();
  });
}

function deleteFC() {
  let componentName = readline.question(`Component to delete: `, (name) => {
    componentName = name;
    let componentPath = `./src/components/${name}.tsx`;

    fs.unlink(componentPath, () => {
      console.log("Component deleted!");
    });

    readline.close();
  });
}

function askUser() {
  readline.question(`What you want to do? ('create' or 'delete') `, (res) => {
    if (res.includes("create")) createFC();
    if (res.includes("delete")) deleteFC();
  });
}



module.exports = { createFC, deleteFC, askUser }