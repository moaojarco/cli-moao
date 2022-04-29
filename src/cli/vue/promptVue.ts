import { app } from "../../app";
import type { IAnswers } from "../../../types";
import { createVueComponent } from "./createVueComponent";
import { deleteVueComponent } from "./deleteVueComponent";

async function promptVue() {
  await app.inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Vue 🟢: What you want to do?",
        choices: ["Create Component", "Delete Component"],
        filter(val: string) {
          return val.toLowerCase();
        },
      },
    ])
    .then(async (answers: IAnswers) => {
      if (answers.action === "create component") {
        await createVueComponent();
      }

      if (answers.action === "delete component") {
        await deleteVueComponent();
      }
    });
}

export default promptVue;
