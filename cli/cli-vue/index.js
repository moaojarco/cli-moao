#! /usr/bin/env node
const { promptVue } = require("./promptVue");

if (require.main === module) {
  promptVue();
}
