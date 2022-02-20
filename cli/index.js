#!/usr/bin/env node
const { askFramework } = require("./utils/askFramework");

if (require.main === module) {
  askFramework();
}