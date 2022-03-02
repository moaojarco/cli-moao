const { createVueComponent } = require("./createVueComponent");
const { deleteVueComponent } = require("./deleteVueComponent");
const { promptCreateOrDelete } = require("../utils/radio");

function promptVue() {
  promptCreateOrDelete
    .run((answer) => {})
    .then((res) => {
      process.stdin.resume();
      if (res.includes("Create")) createVueComponent();
      if (res.includes("Delete")) deleteVueComponent();
    });
}

module.exports = { promptVue };
