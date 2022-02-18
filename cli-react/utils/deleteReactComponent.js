const fs = require("fs");
const { readline } = require("./readLineInterface");
const { refreshComponentsExports } = require("./refreshComponentsExports");

function deleteReactComponent() {
  let componentName = readline.question(
    `Enter Component to delete: `,
    (name) => {
      componentName = name;
      let componentPath = `./components/${componentName}`;

      fs.rm(componentPath, { recursive: true }, () => console.log(`Component "${componentName}" deleted! 🗑️`));

      refreshComponentsExports(componentName, "delete");

      readline.close();
    }
  );
}

module.exports = { deleteReactComponent };