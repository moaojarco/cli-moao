import { IAnswers } from "../types";
import promptReact from "./cli/react/promptReact";
import promptVue from "./cli/vue/promptVue";
import inquirer from "./utils/inquirer";

export class App {
  public inquirer;
  public using: "Next" | "Vite";

  constructor() {
    this.inquirer = inquirer;
    this.using = "Next" || "Vite";
  }

  get usingBase() {
    return this.using;
  }

  set usingBase(value: "Next" | "Vite") {
    this.using = value;
  }

  askFramework() {
    this.inquirer
      .prompt([
        {
          type: "list",
          name: "framework",
          message: "What framework you are using now?",
          choices: ["React 🔵", "Vue 🟢"],
        },
      ])
      .then(async (answers: IAnswers) => {
        if (answers.framework === "React 🔵") {
          await promptReact();
        }

        if (answers.framework === "Vue 🟢") {
          await promptVue();
        }
      });
  }
}

export const app = new App();
