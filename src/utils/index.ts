import * as fs from "fs";
const isNextFramework = () =>fs.existsSync("next.config.js");

const usesSrcDirectory = ()=>fs.existsSync("src/app");


