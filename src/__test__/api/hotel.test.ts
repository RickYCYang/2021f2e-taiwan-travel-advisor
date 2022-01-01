import { getHotels, getHotelsByCity, getHotelsByKeyword } from "api/hotel";
import { AxiosResponse } from "api/axios";

describe("api/hotel", () => {
  test("getHotels", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any = await getHotels(
      5
    );
    expect(data.length).toBeGreaterThanOrEqual(5);
  });

  test("getHotelsByCity", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getHotelsByCity(5, "Taipei");
    expect(data.length).toBeGreaterThanOrEqual(5);
  });

  test("getHotelsByKeyword", async () => {
    const data: boolean | AxiosResponse<unknown, any> | any =
      await getHotelsByKeyword(1, "台北");
    expect(data.length).toBeGreaterThanOrEqual(1);
  });
});
