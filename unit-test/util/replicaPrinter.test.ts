import { replicaPosPrinter } from "../../api-test/util/replicaPosPrinter";

test("pos 0, times 3", async () => {
  expect(await replicaPosPrinter(0, 3)).toBe("CCC");
});
