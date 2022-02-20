
const { createReactComponent } = require("./createReactComponent");
const { deleteReactComponent } = require("./deleteReactComponent");
const { rl } = require("../utils/readLineInterface");

function promptReact() {
  rl.question(
    `
     ____________________________________________________
    |                 CLI React 🔵 (Next.js)             |
    |                                                    |
    |_ Hey, what you want to do? ('create' or 'delete') _|
    
    -> `,
    (res) => {
      if (res.includes("create")) createReactComponent();
      if (res.includes("delete")) deleteReactComponent();

      if (!res.includes("create") && !res.includes("delete")) {
        console.log("🎈 Error : Invalid option");
        promptReact();
      }
    }
  );
}

module.exports = { promptReact };