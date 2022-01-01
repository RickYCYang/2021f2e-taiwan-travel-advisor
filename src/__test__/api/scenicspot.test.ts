import {
  getScenicSpots,
  getScenicSpotsByCity,
  getScenicSpotsByKeyword,
} from "api/scenicspot";
import { AxiosResponse } from "api/axios";

describe("api/scenicspot", () => {
  test("getScenicSpots", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getScenicSpots(5);
    expect(data.length).toBeGreaterThanOrEqual(5);
  });

  test("getScenicSpotsByCity", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getScenicSpotsByCity(5, "Taipei");
    expect(data.length).toBeGreaterThanOrEqual(5);
  });

  test("getScenicSpotsByKeyword", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getScenicSpotsByKeyword(1, "台北");
    expect(data.length).toBeGreaterThanOrEqual(1);
  });
});
