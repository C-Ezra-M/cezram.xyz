#!/usr/bin/node
import { open } from "node:fs/promises";

let f, lockFileObject;
try {
    f = await open("package-lock.json");
    lockFileObject = JSON.parse(await f.readFile());
    console.log("## Package information\n\nThis section was generated based on `package-lock.json`.\n");
    console.log("### Direct dependencies\n");
    for (let [key, value] of Object.entries(lockFileObject.packages[""].dependencies)) {
        console.log(`- [${key}](https://npmjs.com/package/${key})${value}`);
    }
    console.log("\n### All npm dependencies\n");
    for (let [key, value] of Object.entries(lockFileObject.packages)) {
        if (key !== "") console.log(`- ${key}@${value.version}`);

    }
} finally {
    await f?.close();
}