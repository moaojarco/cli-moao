const fs = require("fs");
const { readline } = require("./readLineInterface");

function deleteVueComponent() {
  readline.question("Enter the component name: ", (componentName) => {
    let componentFile = `./components/${componentName}.vue`;
    fs.rm(componentFile, { recursive: true }, () => console.log(`Component "${componentName}" deleted! 🗑️`));

    readline.close();
  })
};

module.exports = { deleteVueComponent };