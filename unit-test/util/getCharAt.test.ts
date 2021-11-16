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
