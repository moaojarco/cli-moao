const fs = require("fs");
const { readline } = require("./readLineInterface");

let componentsFolder = "./components";
let componentFolderExists = fs.existsSync("./components");


function createVueComponent() {

  if (!componentFolderExists) {
    fs.mkdirSync("./components");
    console.log("Components folder created! 📁");
  }

  readline.question("Enter the component name: ", (componentName) => {
    fs.writeFileSync(`${componentsFolder}/${componentName}.vue`, `
<template>
  <div>
    <h1>${componentName}</h1>
  </div>
</template>

<script>
export default {
  name: '${componentName}'
}
</script>
`)
    console.log(`Created ${componentName} component ✅`);
    readline.close();
  });
}

module.exports = { createVueComponent };