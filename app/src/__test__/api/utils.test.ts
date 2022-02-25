import { getCount } from "api/utils";

describe("api/utils", () => {
  test("getCount", () => {
    expect(getCount()).toBe(10);
    expect(getCount(20)).toBe(20);
  });
});
