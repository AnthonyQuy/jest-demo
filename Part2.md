##Add test 2nd endpoint with expectation function

```ts
app.get("/charAt", (req, res) => {
  const data = "Contour Network";
  const pos = Number.parseInt(req.query.pos as string);
  res.send(data.charAt(pos));
});
```

unit test getCharAt.ts

/unit-test/util/getCharAt.test.ts

```ts
import getCharAt from "../../api-test/util/getCharAt";

test("pos 0", () => {
  expect(getCharAt(0)).toBe("C");
});

test("pos 1", () => {
  expect(getCharAt(1)).toBe("o");
});

test("pos 8", () => {
  expect(getCharAt(8)).toBe("G");
});
```
npx jest ./test/util/getCharAt.test.ts

/api-test/util/getCharAt.ts

```ts
export default function getCharAt(pos: string | number) {
  const data = "Contour Global";
  return data[pos];
}
```

/api-test/api/charAt.spec.ts

```ts
import chai from "chai";
import chaiHttp from "chai-http";
import getCharAt from "../util/getCharAt";

chai.use(chaiHttp);

const agent = chai.request("http://localhost:3000");

test("test /charAt endpoint", async () => {
  for (var i = 0; i < 10; i++) {
    const req = agent.get("/charAt");
    req.query({ pos: i });
    let res = await req.send();
    expect(res.text).toBe(getCharAt(i));
  }
});

```
