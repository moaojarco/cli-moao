#!/usr/bin/env node

const fs = require("fs");
const { createVueComponent } = require("./utils");

let componentFolderExists = fs.existsSync("./components");



if (require.main === module) {
  if (!componentFolderExists) {
    fs.mkdirSync("./components");
    console.log("Created components folder ✅");
  }

  createVueComponent();
}

