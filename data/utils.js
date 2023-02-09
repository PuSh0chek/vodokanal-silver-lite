"use strict";

import fs from "fs-extra";
import * as path from "path";
import { join } from "path";

//path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(path.join("/foo", "bar", "baz/asdf", "quux", ".."));

export const loadSqlQueries = async (folderName) => {
  const filePath = join(process.cwd(), "data", folderName);
  const files = await fs.readdir(filePath);
  const sqlFiles = await files.filter((f) => f.endsWith(".sql"));
  const queries = {};

  for (const sqlFile of sqlFiles) {
    const query = await fs.readFileSync(join(filePath, sqlFile), {
      encoding: "utf-8",
    });
    queries[(sqlFile.replace(".sql"), "")] = query;
  }
  return queries;
};

//fs.pathExists(file).then((exists) => console.log(exists)). catch ((e) => console.log(e));
