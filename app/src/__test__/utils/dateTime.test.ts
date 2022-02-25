import { addSeconds, getHoursAndMinuteStr, fillZero } from "utils/dateTime";

describe("utils/dateTime", () => {
  test("addSeconds", () => {
    const seconds = 10;
    const date = new Date();
    const dateAddSecond = addSeconds(date, seconds);
    const _dateAddSecond = new Date(date.getTime() + seconds * 1000);
    expect(dateAddSecond.toISOString).toBe(_dateAddSecond.toISOString);
  });

  test("fillZero - one digit", () => {
    const digit = 1;
    expect(fillZero(digit)).toBe("01");
  });

  test("fillZero - two digit", () => {
    const digit = 10;
    expect(fillZero(digit)).toBe("10");
  });

  test("getHoursAndMinuteStr", () => {
    const date = new Date("2021-01-01 10:10:50");
    expect(getHoursAndMinuteStr(date)).toBe("10 : 10");
  });
});
