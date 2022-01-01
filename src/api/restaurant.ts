import axios, { AxiosResponse } from "api/axios";
import { getCount } from "./utils";

export const getRestaurants = async (count: number) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/Restaurant?$top=${count}&$format=JSON`
  );
  return data;
};

export const getRestaurantsByCity = async (count: number, city: string) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/Restaurant/${city}?$top=${count}&$format=JSON`
  );
  return data;
};

export const getRestaurantsByKeyword = async (
  count: number,
  keyword: string
) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/Restaurant?$filter=contains(RestaurantName%2C'${keyword}')&$top=${count}&$format=JSON`
  );
  return data;
};
