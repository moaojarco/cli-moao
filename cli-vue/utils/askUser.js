const { createVueComponent } = require("./createVueComponent");
const { deleteVueComponent } = require("./deleteVueComponent");
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
      if (res.includes("create")) createVueComponent();
      if (res.includes("delete")) deleteVueComponent();

      if (!res.includes("create") && !res.includes("delete")) {
        console.log("🎈 Error : Invalid option");
        askUser();
      }

      if (res.includes("exit")) process.exit();
    }
  );
}

module.exports = { askUser };