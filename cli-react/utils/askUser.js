
const { createReactComponent } = require("./createReactComponent");
const { deleteReactComponent } = require("./deleteReactComponent");
const { readline } = require("./readLineInterface");

function askUser() {
  readline.question(
    `
    _____________________________________________________
    |                                                    |
     Hey, what you want to do? ('create' or 'delete')    |
    |____________________________________________________|
    
    -> `,
    (res) => {
      if (res.includes("create")) createReactComponent();
      if (res.includes("delete")) deleteReactComponent();

      if (!res.includes("create") && !res.includes("delete")) {
        console.log("🎈 Error : Invalid option");
        askUser();
      }

      if (res.includes("exit")) process.exit();
    }
  );
}

module.exports = { askUser };