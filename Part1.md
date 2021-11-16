##1st endpoint

### Init project
npm init --y

###Create 1st endpoint
npm i typescript ts-node express @types/express

api/app.ts

```typescript
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Contour");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

update package.json
```
    "start": "ts-node ./api/app.ts",
```
npm run start

### Test 1st endpoint with Jest
npm i jest @types/jest chai chai-http

npx jest --init

api-test/api/app.spec.js

```typescript
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

test("test / endpoint", async () => {
  const agent = chai.request("http://localhost:3000");
  const req = agent.get("/");
  const res = await req.send();

  expect(res.status).toBe(200);
});
```

npx jest

###Typescript

test/api/app.spec.ts

```typescript
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

test("test / endpoint", async () => {
  const agent = chai.request("http://localhost:3000");
  const req = agent.get("/");
  const res = await req.send();

  expect(res.status).toBe(200);
});
```
npm i @babel/preset-env @babel/preset-typescript


babel.config.js

```ts
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
};
```

npx jest

###Using jest.config

src/jest.config.js

```ts
const defaultJestConfig = require("jest-config").defaults;
const path = require("path");

const myConfig = defaultJestConfig;

myConfig.rootDir = path.resolve(process.cwd(), "./");
myConfig.testMatch = ["**/*spec.ts"];

module.exports = myConfig;
```

src/cli.ts

```ts
import path from "path";
import * as jest from "jest";

const configPath = path.resolve(__dirname, "./jest.config.js");

jest.run(["--config", configPath]);
```

ts-node ./src/cli.ts

Add to app.spec.ts

```ts
expect(res.type).toBe("text/html");
expect(res.text).toBe("Hello Contour");
```
