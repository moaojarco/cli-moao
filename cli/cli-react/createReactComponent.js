const inquirer = require("../utils/inquirer");
const fs = require("fs");
const { refreshComponentsExports } = require("./refreshComponentsExports");
const {
  layoutTemplate,
  componentTemplate,
  remixComponentTemplate,
} = require("../utils/templates");

let exportComponentCRA = "./src/components/index.ts";
let exportComponentNext = "./components/index.ts";

let componentFolderCRA = fs.existsSync("./src/components");
let componentFolderNext = fs.existsSync("./components");
let componentFolderRemix = fs.existsSync("./app/components");

let srcFolder = fs.existsSync("./src");
let appFolder = fs.existsSync("./app");
let viteFileJs = fs.existsSync("./vite.config.js");
let viteFileTs = fs.existsSync("./vite.config.ts");
let usingCreateReactApp, usingNext, usingRemix;

async function createReactComponent() {
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
        if (srcFolder && !viteFileJs && !viteFileTs) {
          usingCreateReactApp = true;
          console.log("CRA detected! 🟦");

          if (!componentFolderCRA && usingCreateReactApp) {
            fs.mkdirSync("./src/components");
            console.log("Components folder created! 📁");
          }

          console.log("Creating component...");

          setTimeout(() => {
            fs.mkdirSync(`./src/components/${answers.componentName}`);

            if (answers.componentName === "Layout") {
              // console.log(answers.componentName);
              fs.writeFileSync(
                `./src/components/${answers.componentName}/${answers.componentName}.tsx`,
                layoutTemplate(answers)
              );
            }

            if (answers.componentName !== "Layout") {
              fs.writeFileSync(
                `./src/components/${answers.componentName}/${answers.componentName}.tsx`,
                componentTemplate(answers)
              );
            }

            fs.writeFileSync(
              `src/components/${answers.componentName}/${answers.componentName}.module.scss`,
              ``
            );

            console.log(`Component "${answers.componentName}" created! ✅`);
            console.log(
              `Export "${answers.componentName}" added to index.ts file! ✅`
            );
          }, 2000);

          if (!exportComponentCRA) {
            fs.writeFileSync(`./src/components/index.ts`, "");
            console.log("Created index.ts file! ✅");
          }

          refreshComponentsExports(
            answers.componentName,
            "add",
            "create-react-app"
          );
        }

        if (viteFileJs || viteFileTs) {
          usingVite = true;
          console.log("Vite detected! ⚡");

          if (!componentFolderCRA && usingVite) {
            fs.mkdirSync("./src/components");
            console.log("Components folder created! 📁");
          }

          console.log("Creating component...");

          setTimeout(() => {
            fs.mkdirSync(`./src/components/${answers.componentName}`);

            if (answers.componentName === "Layout") {
              // console.log(answers.componentName);
              fs.writeFileSync(
                `./src/components/${answers.componentName}/${answers.componentName}.tsx`,
                layoutTemplate(answers)
              );
            }

            if (answers.componentName !== "Layout") {
              fs.writeFileSync(
                `./src/components/${answers.componentName}/${answers.componentName}.tsx`,
                componentTemplate(answers)
              );
            }

            fs.writeFileSync(
              `src/components/${answers.componentName}/${answers.componentName}.module.scss`,
              ``
            );

            console.log(`Component "${answers.componentName}" created! ✅`);
            console.log(
              `Export "${answers.componentName}" added to index.ts file! ✅`
            );
          }, 2000);

          if (!exportComponentCRA) {
            fs.writeFileSync(`./src/components/index.ts`, "");
            console.log("Created index.ts file! ✅");
          }

          refreshComponentsExports(
            answers.componentName,
            "add",
            "create-react-app"
          );
        }

        if (appFolder && !viteFileJs && !viteFileTs && !srcFolder) {
          usingRemix = true;
          console.log("Remix detected! 🔥");

          if (!componentFolderRemix && usingRemix) {
            fs.mkdirSync("./app/components");
            console.log("Components folder created! 📁");
          }

          console.log("Creating component...");

          setTimeout(() => {
            fs.writeFileSync(
              `./app/components/${answers.componentName}.tsx`,
              remixComponentTemplate(answers)
            );

            console.log(`Component "${answers.componentName}" created! ✅`);
          }, 2000);
        }
        if (!srcFolder && !appFolder) {
          usingNext = true;
          console.log("Next.js detected! 🍫");
          if (!componentFolderNext && usingNext) {
            fs.mkdirSync("./components");
            console.log("Components folder created! 📁");
          }
          console.log("Creating component...");

          setTimeout(() => {
            fs.mkdirSync(`./components/${answers.componentName}`);

            if (answers.componentName === "Layout") {
              // console.log(answers.componentName);
              fs.writeFileSync(
                `./components/${answers.componentName}/${answers.componentName}.tsx`,
                layoutTemplate(answers)
              );
            }

            if (answers.componentName !== "Layout") {
              fs.writeFileSync(
                `./components/${answers.componentName}/${answers.componentName}.tsx`,
                componentTemplate(answers)
              );
            }

            fs.writeFileSync(
              `components/${answers.componentName}/${answers.componentName}.module.scss`,
              ``
            );

            console.log(`Component "${answers.componentName}" created! ✅`);
            console.log(
              `Export "${answers.componentName}" added to index.ts file! ✅`
            );
          }, 2000);

          if (!exportComponentNext) {
            fs.writeFileSync(`./components/index.ts`, "");
            console.log("Created index.ts file! ✅");
          }

          refreshComponentsExports(answers.componentName, "add", "next");
        }
      });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { createReactComponent };
