import {
  getRoutesByCity,
  getStopsByCityAndRouteName,
  getArrivalTimeByCityAndRouteName,
} from "api/traffic";
import { AxiosResponse } from "api/axios";

describe("api/traffic", () => {
  test("getRoutesByCity", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getRoutesByCity("Taipei");
    expect(data.length).toBeGreaterThanOrEqual(5);
  });

  test("getStopsByCityAndRouteName", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getStopsByCityAndRouteName("Taipei", "203");
    expect(data.length).toBeGreaterThanOrEqual(1);
  });

  test("getArrivalTimeByCityAndRouteName", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getArrivalTimeByCityAndRouteName("Taipei", "203");
    expect(data.length).toBeGreaterThanOrEqual(1);
  });
});
