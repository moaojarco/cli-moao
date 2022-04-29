import type { IAnswers } from "../../../types";
import fs from "fs";
import { componentTemplate, layoutTemplate } from "../../templates/react";
import { app } from "../../app";

const componentFolderVite: boolean = fs.existsSync("./src/components");
const componentFolderNext: boolean = fs.existsSync("./components");
const srcFolder: boolean = fs.existsSync("./src");
const tsConfig: boolean = fs.existsSync("./tsconfig.json");

async function createReactComponent() {
  try {
    await app.inquirer
      .prompt([
        {
          type: "input",
          name: "componentName",
          message: "Which component do you want to create?",
        },
      ])
      .then((answers: IAnswers) => {
        if (!srcFolder) {
          app.usingBase = "Next";
        }

        if (srcFolder) {
          app.usingBase = "Vite";
        }

        switch (app.usingBase) {
          case "Next":
            console.log("You're using Next.js 🍫");

            if (tsConfig) {
              console.log("Typescript detected! 🧊");
            }

            if (!componentFolderNext) {
              fs.mkdirSync("./components");
              console.log("Components folder created! 📁");
            }
            console.log("Creating component...");

            setTimeout(() => {
              if (tsConfig) {
                if (answers.componentName === "Layout") {
                  // console.log(answers.componentName);
                  fs.writeFileSync(
                    `./components/${answers.componentName}.tsx`,
                    layoutTemplate(answers)
                  );
                }

                if (answers.componentName !== "Layout") {
                  fs.writeFileSync(
                    `./components/${answers.componentName}.tsx`,
                    componentTemplate(answers)
                  );
                }

                console.log(`Component "${answers.componentName}" created! ✅`);
              }

              if (!tsConfig) {
                fs.writeFileSync(
                  `./components/${answers.componentName}.jsx`,
                  componentTemplate(answers)
                );
                console.log(`Component "${answers.componentName}" created! ✅`);
              }
            }, 2000);

            break;
          case "Vite":
            console.log("You're using Vite ⚡");

            if (tsConfig) {
              console.log("Typescript detected! 🧊");
            }

            if (!componentFolderVite) {
              fs.mkdirSync("./src/components");
              console.log("Components folder created! 📁");
            }
            console.log("Creating component...");

            setTimeout(() => {
              if (tsConfig) {
                if (answers.componentName === "Layout") {
                  // console.log(answers.componentName);
                  fs.writeFileSync(
                    `./src/components/${answers.componentName}.tsx`,
                    layoutTemplate(answers)
                  );
                }

                if (answers.componentName !== "Layout") {
                  fs.writeFileSync(
                    `./src/components/${answers.componentName}.tsx`,
                    componentTemplate(answers)
                  );
                }

                console.log(`Component "${answers.componentName}" created! ✅`);
              }

              if (!tsConfig) {
                fs.writeFileSync(
                  `./src/components/${answers.componentName}.jsx`,
                  componentTemplate(answers)
                );
                console.log(`Component "${answers.componentName}" created! ✅`);
              }
            }, 2000);
          default:
            break;
        }
      });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export { createReactComponent };
