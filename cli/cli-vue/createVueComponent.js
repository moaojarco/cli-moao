const fs = require("fs");
const inquirer = require("../utils/inquirer");

let componentFolderExists = fs.existsSync("./components");

async function createVueComponent() {
  try {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "componentName",
          message: "What component you want to create?",
        },
      ])
      .then((answers) => {
        if (!componentFolderExists) {
          fs.mkdirSync("./components");
          console.log("Components folder created! 📁");
        }

        fs.writeFileSync(
          `./components/${answers.componentName}.vue`,
          `
<template>
  <div>
    <h1>${answers.componentName}</h1>
  </div>
</template>

<script>
export default {
  name: '${answers.componentName}'
}
</script>
`
        );
        console.log(`Component "${answers.componentName}" created! ✅`);
      });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { createVueComponent };
