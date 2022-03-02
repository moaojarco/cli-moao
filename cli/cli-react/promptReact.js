const { createReactComponent } = require("./createReactComponent");
const { deleteReactComponent } = require("./deleteReactComponent");
const { promptCreateOrDelete } = require("../utils/radio");

function promptReact() {
  promptCreateOrDelete
    .run((answer) => {})
    .then((res) => {
      process.stdin.resume();
      if (res.includes("Create")) createReactComponent();
      if (res.includes("Delete")) deleteReactComponent();
    });
}

module.exports = { promptReact };
