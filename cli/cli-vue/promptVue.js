const { createVueComponent } = require("./createVueComponent");
const { deleteVueComponent } = require("./deleteVueComponent");
const { rl } = require("../utils/readLineInterface");


function promptVue() {
  rl.question(
    `
     ____________________________________________________
    |                 CLI Vue 🟢 (Nuxt.js)               |
    |                                                    |
    |_ Hey, what you want to do? ('create' or 'delete') _|
    
    -> `,
    (res) => {
      if (res.includes("create")) createVueComponent();
      if (res.includes("delete")) deleteVueComponent();

      if (!res.includes("create") && !res.includes("delete")) {
        console.log("🎈 Error : Invalid option");
        promptVue();
      }

      if (res.includes("exit")) process.exit();
    }
  );
}

module.exports = { promptVue };