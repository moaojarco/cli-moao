#!/usr/bin/env node
const { promptReact } = require("./promptReact");

if (require.main === module) {
  promptReact();
}
