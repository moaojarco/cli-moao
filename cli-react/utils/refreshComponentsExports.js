const fs = require("fs");

let exportComponentsFile = "./components/index.ts";
let exportComponentsFileExists = fs.existsSync(exportComponentsFile);

function refreshComponentsExports(componentName, method) {
  if (method === "add") {
    if (exportComponentsFileExists) {
      if (!exportComponentsFile.includes(`export * from "./${componentName}/${componentName}";`)) {
        fs.appendFileSync('./components/index.ts', `
export * from "./${componentName}/${componentName}"`);
      }
    }
  };

  if (method === "delete") {
    if (fs.readFileSync(exportComponentsFile, "utf8").includes(`export * from "./${componentName}/${componentName}"`)) {
      let file = fs.readFileSync(exportComponentsFile, "utf8");
      file = file.replace(`export * from "./${componentName}/${componentName}"`, "").trim();
      fs.writeFileSync(exportComponentsFile, file);
    }
  };
}

module.exports = { refreshComponentsExports };