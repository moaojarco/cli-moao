import { app } from "../../app";
import fs from "fs";
import type { IAnswers } from "../../../types";

const srcFolder: boolean = fs.existsSync("./src");

async function deleteVueComponent() {
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
        fs.rmSync(`./src/components/${answers.componentName}.vue`);
        console.log(`Component deleted: ${answers.componentName} 🗑`);
      });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export { deleteVueComponent };
