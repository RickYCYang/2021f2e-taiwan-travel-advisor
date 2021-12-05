import axios, { AxiosResponse } from "api/axios";
import { getCount } from "./utils";

export const getScenicSpots = async (count: number) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/ScenicSpot?$top=${count}&$format=JSON`
  );
  return data;
};

export const getScenicSpotsByCity = async (count: number, city: string) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/ScenicSpot/${city}?$top=${count}&$format=JSON`
  );
  return data;
};

export const getScenicSpotsByKeyword = async (
  count: number,
  keyword: string
) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/ScenicSpot?$filter=contains(Name%2C'${keyword}')&$top=${count}&$format=JSON`
  );
  return data;
};
