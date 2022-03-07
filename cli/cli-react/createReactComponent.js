const inquirer = require("../utils/inquirer");
const fs = require("fs");
const { refreshComponentsExports } = require("./refreshComponentsExports");
const {
  layoutTemplate,
  componentTemplate,
  layoutRemixTemplate,
} = require("../utils/templates");

let exportComponentCRA = "./src/components/index.ts";
let exportComponentNext = "./components/index.ts";
let exportComponentRemix = "./app/components/index.ts";

let componentFolderCRA = fs.existsSync("./src/components");
let componentFolderNext = fs.existsSync("./components");
let componentFolderRemix = fs.existsSync("./app/components");

let srcFolder = fs.existsSync("./src");
let appFolder = fs.existsSync("./app");
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
        if (srcFolder) {
          usingCreateReactApp = true;
          if (!componentFolderCRA && usingCreateReactApp) {
            console.log("Create React APP detected!");

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

          console.log(
            `Export "${answers.componentName}" added to index.ts file! ✅`
          );
        }

        if (!appFolder && !srcFolder) {
          usingNext = true;
          console.log("Next.js detected!");
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
          }, 2000);

          if (!exportComponentNext) {
            fs.writeFileSync(`./components/index.ts`, "");
            console.log("Created index.ts file! ✅");
          }

          refreshComponentsExports(answers.componentName, "add", "next");

          console.log(
            `Export "${answers.componentName}" added to index.ts file! ✅`
          );
        }

        if (appFolder) {
          usingRemix = true;
          if (!componentFolderRemix && usingRemix) {
            console.log("Remix detected!");

            fs.mkdirSync("./app/components");
            console.log("Components folder created! 📁");
          }

          console.log("Creating component...");

          setTimeout(() => {
            fs.mkdirSync(`./app/components/${answers.componentName}`);

            if (answers.componentName === "Layout") {
              // console.log(answers.componentName);
              fs.writeFileSync(
                `./app/components/${answers.componentName}/${answers.componentName}.tsx`,
                layoutRemixTemplate(answers)
              );
            }

            if (answers.componentName !== "Layout") {
              fs.writeFileSync(
                `./app/components/${answers.componentName}/${answers.componentName}.tsx`,
                componentTemplate(answers)
              );
            }

            fs.writeFileSync(
              `app/components/${answers.componentName}/${answers.componentName}.module.scss`,
              ``
            );

            console.log(`Component "${answers.componentName}" created! ✅`);
          }, 2000);

          if (!exportComponentRemix) {
            fs.writeFileSync(`./app/components/index.ts`, "");
            console.log("Created index.ts file! ✅");
          }

          refreshComponentsExports(answers.componentName, "add", "remix");

          console.log(
            `Export "${answers.componentName}" added to index.ts file! ✅`
          );
          // console.log(JSON.stringify(answers, null, "  "));
        }
      });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { createReactComponent };
