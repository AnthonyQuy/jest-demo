import path from "path";
import * as jest from "jest";

const configPath = path.resolve(__dirname, "./jest.config.js");

jest.run(["--config", configPath]);
