#! /usr/bin/env node

import { app } from "./app";

if (require.main === module) {
  app.askFramework();
}
