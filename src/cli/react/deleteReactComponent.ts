import { app } from "../../app";
import fs from "fs";
import type { IAnswers } from "../../../types";

const srcFolder: boolean = fs.existsSync("./src");
const tsConfig: boolean = fs.existsSync("./tsconfig.json");

async function deleteReactComponent() {
  try {
    await app.inquirer
      .prompt([
        {
          type: "input",
          name: "componentName",
          message: "Which component do you want to delete?",
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
            if (tsConfig) {
              fs.rmSync(`./components/${answers.componentName}.tsx`);
            }

            if (!tsConfig) {
              fs.rmSync(`./components/${answers.componentName}.jsx`);
            }

            console.log(`Component deleted: ${answers.componentName} 🗑`);
            break;
          case "Vite":
            if (tsConfig) {
              fs.rmSync(`./src/components/${answers.componentName}.tsx`);
              const folder = fs.readdirSync("./src/components", {
                withFileTypes: false,
              });

              if (folder.length === 0) {
                fs.rmdirSync("./src/components");
                setTimeout(() => {
                  console.log(
                    "Components folder has been deleted because is empty.🍃"
                  );
                }, 1000);
              }
            }

            if (!tsConfig) {
              fs.rmSync(`./src/components/${answers.componentName}.jsx`);
            }

            console.log(`Component deleted: ${answers.componentName} 🗑`);
            break;
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

export { deleteReactComponent };
