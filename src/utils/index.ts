import * as fs from "fs";
export const isNextFramework = () =>fs.existsSync("next.config.js");

export const usesSrcDirectory = ()=>fs.existsSync("src/app");


