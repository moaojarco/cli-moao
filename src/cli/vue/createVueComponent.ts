import { IAnswers } from "../../../types";
import { app } from "../../app";
import fs from "fs";
import { componentTemplate } from "../../templates/vue";

const componentFolderVue = fs.existsSync("./src/components");

async function createVueComponent() {
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
        if (!componentFolderVue) {
          fs.mkdirSync("./src/components");
          console.log("Components folder created! 📁");
        }
        console.log("Creating component...");

        setTimeout(() => {
          fs.writeFileSync(
            `./src/components/${answers.componentName}.vue`,
            componentTemplate(answers)
          );
        }, 2000);
      });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export { createVueComponent };
