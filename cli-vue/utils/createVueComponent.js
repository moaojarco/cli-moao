const fs = require("fs");
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let componentsFolder = "./components";


function createVueComponent() {

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