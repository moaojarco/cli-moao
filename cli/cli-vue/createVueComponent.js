const fs = require("fs");
const inquirer = require("../utils/inquirer");
const { vueComponent } = require("../utils/templates");

let srcFolder = fs.existsSync("./src");
let componentFolderVite = fs.existsSync("./src/components");
let componentFolderNuxt = fs.existsSync("./components");
let usingVite, usingNuxt;
let viteFileJs = fs.existsSync("./vite.config.js");
let viteFileTs = fs.existsSync("./vite.config.ts");

async function createVueComponent() {
  try {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "componentName",
          message: "Which component do you want to create?",
        },
      ])
      .then((answers) => {
        if (viteFileJs || viteFileTs) {
          usingVite = true;
          console.log("Vite detected! ⚡");

          if (!componentFolderVite && usingVite) {
            fs.mkdirSync("./src/components");
            console.log("Components folder created! 📁");
          }

          console.log("Creating component...");

          setTimeout(() => {
            fs.writeFileSync(
              `./src/components/${answers.componentName}.vue`,
              vueComponent(answers)
            );
            console.log(`Component "${answers.componentName}" created! ✅`);
          }, 2000);
        }

        if (!srcFolder) {
          usingNuxt = true;
          console.log("Nuxt detected! 🚀");

          if (!componentFolderNuxt && usingNuxt) {
            fs.mkdirSync("./components");
            console.log("Components folder created! 📁");
          }
          console.log("Creating component...");

          setTimeout(() => {
            fs.writeFileSync(
              `./components/${answers.componentName}.vue`,
              vueComponent(answers)
            );
            console.log(`Component "${answers.componentName}" created! ✅`);
          }, 2000);
        }
      });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { createVueComponent };
