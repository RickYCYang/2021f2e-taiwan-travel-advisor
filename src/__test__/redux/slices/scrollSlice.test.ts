import reducer, { setScrollTop } from "redux/slices/scrollSlice";

describe("redux/scrollSlice", () => {
  test("initial state", () => {
    expect(reducer(undefined, { type: "" })).toStrictEqual({
      scrollTop: 0,
      scrollLeft: 0,
    });
  });

  test("action setScrollTop", () => {
    const top = 100;
    const expectedAction = {
      type: "scroll/setScrollTop",
      payload: top,
    };
    expect(setScrollTop(top)).toStrictEqual(expectedAction);
    expect(reducer(undefined, setScrollTop(100))).toStrictEqual({
      scrollTop: 100,
      scrollLeft: 0,
    });
  });
});
