#!/usr/bin/env node
const { askUser } = require("./utils/askUser");

if (require.main === module) {
  askUser();
}