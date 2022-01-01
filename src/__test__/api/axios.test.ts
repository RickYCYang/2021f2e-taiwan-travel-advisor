import { AxiosResponse } from "axios";
import request from "api/axios";

describe("api/axios", () => {
  test("request get", async () => {
    const { status }: boolean | AxiosResponse<unknown, any> | any =
      await request("get", `Tourism/Activity?$format=JSON`);
    expect(status).toBe(200);
  });
});
