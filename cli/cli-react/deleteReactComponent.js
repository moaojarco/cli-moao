const fs = require("fs");
const { rl } = require("../utils/readLineInterface");
const { refreshComponentsExports } = require("./refreshComponentsExports");

function deleteReactComponent() {
  rl.question(`Enter Component to delete: `, (componentName) => {
    let componentPath = `./components/${componentName}`;

    fs.rm(componentPath, { recursive: true }, () =>
      console.log(`Component "${componentName}" deleted! 🗑️`)
    );

    refreshComponentsExports(componentName, "delete");

    rl.close();
  });
}

module.exports = { deleteReactComponent };
