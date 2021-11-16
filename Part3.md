##Test with mock
api-test/util/callCharAtEndpoint.ts
```ts
import chai from "chai";
import chaiHttp from "chai-http";


export async function callCharAtEndpoint(pos: number) {
    chai.use(chaiHttp);
    const agent = chai.request("http://localhost:3000");
    const req = agent.get("/charAt");
    req.query({ pos: pos });
    const res = await req.send();
    const char = res.text;
    return char;
}
```

api-test/util/replicaPosPrinter.ts
```ts
import { callCharAtEndpoint } from "./callCharAtEndpoint";

export async function replicaPosPrinter(
  pos: number,
  times: number
): Promise<string> {
  const char = await callCharAtEndpoint(pos);
  return char.repeat(times);
}
```

unit-test/util/replicaPrinter.test.ts
```ts
import { replicaPosPrinter } from "../../api-test/util/replicaPosPrinter";

test("pos 0, times 3", async () => {
  expect(await replicaPosPrinter(0, 3)).toBe("CCC");
});
```

unit-test/util/replicaPrinterWithMock.test.ts
```ts
import * as fn from "../../api-test/util/callCharAtEndpoint";
import { replicaPosPrinter } from "../../api-test/util/replicaPosPrinter";

const mockFn = jest.spyOn(fn, "callCharAtEndpoint").mockResolvedValue("A");

test("pos 0, times 3", async () => {
  const result = await replicaPosPrinter(0, 3);
  expect(result).toBe("AAA");
  expect(mockFn).toHaveBeenCalledTimes(1);
});

```