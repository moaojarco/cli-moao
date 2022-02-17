#!/usr/bin/env node

const { askUser, deleteFC, createFC } = require("./utils/functions");

if (require.main === module) {
  askUser();
}

module.exports = { createFC, deleteFC, askUser };