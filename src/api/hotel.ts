import axios, { AxiosResponse } from "api/axios";
import { getCount } from "./utils";

export const getHotels = async (count: number) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/Hotel?$orderby=ZipCode&$top=${count}&$format=JSON`
  );
  return data;
};

export const getHotelsByCity = async (count: number, city: string) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/Hotel/${city}?$top=${count}&$format=JSON`
  );
  return data;
};

export const getHotelsByKeyword = async (count: number, keyword: string) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/Hotel?$filter=contains(Name%2C'${keyword}')&$orderby=ZipCode%20desc&$top=${count}&$format=JSON`
  );
  return data;
};
