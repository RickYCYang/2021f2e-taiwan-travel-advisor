import {
  getRestaurants,
  getRestaurantsByCity,
  getRestaurantsByKeyword,
} from "api/restaurant";
import { AxiosResponse } from "api/axios";

describe("api/restaurant", () => {
  test("getRestaurants", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getRestaurants(5);
    expect(data.length).toBeGreaterThanOrEqual(5);
  });

  test("getRestaurantsByCity", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getRestaurantsByCity(1, "Taipei");
    expect(data.length).toBeGreaterThanOrEqual(1);
  });

  test("getRestaurantsByKeyword", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getRestaurantsByKeyword(1, "台北");
    expect(data.length).toBeGreaterThanOrEqual(1);
  });
});
