import {
  setLocalStorageWithExpiry,
  removeLocalStorage,
  getLocalStorageWithExpiry,
} from "utils/localStorage";

const clearLocalStorage = () => localStorage.clear();

describe("utils/localStorage", () => {
  beforeAll(clearLocalStorage);
  afterAll(clearLocalStorage);

  test("setLocalStorageWithExpiry", () => {
    const [_key, _value] = ["_key", "_value"];
    setLocalStorageWithExpiry(_key, _value, 1);
    const { value } = JSON.parse(localStorage.getItem(_key) || "");
    expect(value).toBe(_value);
  });

  test("getLocalStorageWithExpiry", () => {
    const [_key, _value] = ["_key", "_value"];
    const value = getLocalStorageWithExpiry("_key");
    expect(value).toBe(_value);
  });

  test("removeLocalStorage", () => {
    const [_key, _value] = ["_key", "_value"];
    removeLocalStorage(_key);
    const value = getLocalStorageWithExpiry("_key");
    expect(value).toBe(null);
  });
});
