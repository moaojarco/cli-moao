const fs = require("fs");
const { readline } = require("./readLineInterface");

let componentsFolder = "./components";
let componentFolderExists = fs.existsSync("./components");


function createVueComponent() {
  try {

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
      console.log(`Component "${componentName}" created! ✅`);
      readline.close();
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}


module.exports = { createVueComponent };