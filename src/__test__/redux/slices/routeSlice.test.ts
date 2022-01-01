import reducer, { setStops } from "redux/slices/routeSlice";

describe("redux/routeSlice", () => {
  test("initial state", () => {
    expect(reducer(undefined, { type: "" })).toStrictEqual({
      stops: [],
    });
  });

  test("action setStops", () => {
    const _payload = [
      {
        StationID: "1",
        StopBoarding: 1,
        StopID: "1",
        StopName: {
          En: "E1",
          Zh_tw: "Z1",
        },
        StopPosition: {
          PositionLat: 1,
          PositionLon: 1,
        },
        StopSequence: 1,
        StopUID: "1",
        estimateTime: 1,
        stopStatus: 1,
      },
    ];
    const expectedAction = {
      type: "route/setStops",
      payload: _payload,
    };
    expect(setStops(_payload)).toStrictEqual(expectedAction);
    expect(reducer(undefined, setStops(_payload))).toStrictEqual({
      stops: _payload,
    });
  });
});
