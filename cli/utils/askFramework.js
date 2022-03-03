const { createReactComponent } = require("../cli-react/createReactComponent");
const { deleteReactComponent } = require("../cli-react/deleteReactComponent");
const { createVueComponent } = require("../cli-vue/createVueComponent");
const { deleteVueComponent } = require("../cli-vue/deleteVueComponent");
const inquirer = require("./inquirer");

async function askFramework() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "framework",
        message: "What framework you are using now?",
        choices: ["React 🔵 (Next.js)", "Vue 🟢 (Nuxt.js)"],
      },
      {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: ["Create Component", "Delete Component"],
        filter(val) {
          return val.toLowerCase();
        },
      },
    ])
    .then(async (answers) => {
      // console.log(JSON.stringify(answers, null, "  "));

      if (
        answers.framework === "React 🔵 (Next.js)" &&
        answers.action === "create component"
      ) {
        await createReactComponent();
      }

      if (
        answers.framework === "React 🔵 (Next.js)" &&
        answers.action === "delete component"
      ) {
        await deleteReactComponent();
      }

      if (
        answers.framework === "Vue 🟢 (Nuxt.js)" &&
        answers.action === "create component"
      ) {
        await createVueComponent();
      }

      if (
        answers.framework === "Vue 🟢 (Nuxt.js)" &&
        answers.action === "delete component"
      ) {
        await deleteVueComponent();
      }
    });
}

module.exports = { askFramework };
