const fs = require("fs");

let exportComponentCRA = "./src/components/index.ts";
let exportComponentNext = "./components/index.ts";

async function refreshComponentsExports(componentName, method, framework) {
  if (method === "add") {
    if (framework === "create-react-app") {
      if (
        !exportComponentCRA.includes(
          `export * from "./${componentName}/${componentName}";`
        )
      ) {
        fs.appendFileSync(
          "./src/components/index.ts",
          `
  export * from "./${componentName}/${componentName}"`
        );
      }
    }

    if (framework === "next") {
      if (
        !exportComponentNext.includes(
          `export * from "./${componentName}/${componentName}";`
        )
      ) {
        fs.appendFileSync(
          "./components/index.ts",
          `
  export * from "./${componentName}/${componentName}"`
        );
      }
    }
  }

  if (method === "delete") {
    if (framework === "create-react-app") {
      if (
        fs
          .readFileSync(exportComponentCRA, "utf8")
          .includes(`export * from "./${componentName}/${componentName}"`)
      ) {
        let file = fs.readFileSync(exportComponentCRA, "utf8");
        file = file
          .replace(`export * from "./${componentName}/${componentName}"`, "")
          .trim();
        fs.writeFileSync(exportComponentCRA, file);
      }
    }

    if (framework === "next") {
      if (
        fs
          .readFileSync(exportComponentNext, "utf8")
          .includes(`export * from "./${componentName}/${componentName}"`)
      ) {
        let file = fs.readFileSync(exportComponentNext, "utf8");
        file = file
          .replace(`export * from "./${componentName}/${componentName}"`, "")
          .trim();
        fs.writeFileSync(exportComponentNext, file);
      }
    }
  }
}

module.exports = { refreshComponentsExports };
