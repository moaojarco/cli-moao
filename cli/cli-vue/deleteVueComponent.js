const fs = require("fs");
const { rl } = require("../utils/readLineInterface");


function deleteVueComponent() {
  rl.question("Enter the component name: ", (componentName) => {
    let componentFile = `./components/${componentName}.vue`;
    fs.rm(componentFile, { recursive: true }, () => console.log(`Component "${componentName}" deleted! 🗑️`));

    rl.close();
  })
};

module.exports = { deleteVueComponent };