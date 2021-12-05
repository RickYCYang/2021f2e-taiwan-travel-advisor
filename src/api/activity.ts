import axios, { AxiosResponse } from "api/axios";
import { getCount } from "./utils";

export const getNewestAcitivities = async (count: number) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/Activity?$orderby=StartTime%20desc&$top=${count}&$format=JSON`
  );
  return data;
};

export const getNewestAcitivitiesByCity = async (
  count: number,
  city: string
) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/Activity/${city}?$orderby=StartTime%20desc&$top=${count}&$format=JSON`
  );
  return data;
};

export const getNewestAcitivitiesByKeyword = async (
  count: number,
  keyword: string
) => {
  count = getCount(count);
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Tourism/Activity?$filter=contains(Name%2C'${keyword}')&$orderby=StartTime%20desc&$top=${count}&$format=JSON`
  );
  return data;
};
