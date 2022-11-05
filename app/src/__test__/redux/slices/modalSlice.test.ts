import reducer, { openModal, closeModal } from "redux/slices/modalSlice";

const initState = {
  show: false,
  location: "",
  city: "",
  photos: [],
  title: "",
  description: "",
  time: "",
  charge: "",
  phone: "",
  address: "",
  class1: "",
  cycle: "",
  nonCycle: "",
  website: "",
  position: {
    PositionLat: "",
    PositionLon: "",
  },
};

describe("redux/modalSlice", () => {
  test("initial state", () => {
    expect(reducer(undefined, { type: "" })).toStrictEqual(initState);
  });

  test("action openModal", () => {
    const _payload = {
      location: "location",
      photos: ["1", "2"],
      title: "title",
      description: "description",
      phone: "phone",
      address: "address",
      city: "city",
      time: "time",
      class1: "class1",
      cycle: "cycle",
      nonCycle: "nonCycle",
      charge: "charge",
      website: "website",
      position: {
        PositionLat: "1",
        PositionLon: "1",
      },
    };
    const expectedAction = {
      type: "modal/openModal",
      payload: _payload,
    };
    expect(openModal(_payload)).toStrictEqual(expectedAction);
    expect(reducer(undefined, openModal(_payload))).toStrictEqual({
      show: true,
      ..._payload,
    });
  });

  test("action openModal", () => {
    const expectedAction = {
      type: "modal/closeModal",
      payload: undefined,
    };
    expect(closeModal()).toStrictEqual(expectedAction);
    expect(reducer(undefined, closeModal())).toStrictEqual(initState);
  });
});
