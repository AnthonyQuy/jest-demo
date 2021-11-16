const defaultJestConfig = require("jest-config").defaults;
const path = require("path");

const myConfig = defaultJestConfig;

myConfig.rootDir = path.resolve(process.cwd(), "./");
myConfig.testMatch = ["**/*spec.ts"];

module.exports = myConfig;
