import {
  getNewestAcitivities,
  getNewestAcitivitiesByCity,
  getNewestAcitivitiesByKeyword,
} from "api/activity";
import { AxiosResponse } from "api/axios";

describe("api/activity", () => {
  test("getNewestAcitivities", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getNewestAcitivities(5);
    expect(data.length).toBeGreaterThanOrEqual(5);
  });

  test("getNewestAcitivitiesByCity", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getNewestAcitivitiesByCity(5, "Taipei");
    expect(data.length).toBeGreaterThanOrEqual(5);
  });

  test("getNewestAcitivitiesByKeyword", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getNewestAcitivitiesByKeyword(1, "音樂祭");

    expect(data.length).toBeGreaterThanOrEqual(1);
  });
});
