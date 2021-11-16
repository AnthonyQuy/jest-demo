import * as fn from "../../api-test/util/callCharAtEndpoint";
import { replicaPosPrinter } from "../../api-test/util/replicaPosPrinter";

const mockFn = jest.spyOn(fn, "callCharAtEndpoint").mockResolvedValue("A");

test("pos 0, times 3", async () => {
  const result = await replicaPosPrinter(0, 3);
  expect(result).toBe("AAA");
  expect(mockFn).toHaveBeenCalledTimes(1);
});
