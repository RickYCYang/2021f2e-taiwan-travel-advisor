import axios from "api/axios";
import { getCount } from "./utils";

export const getNewestAcitivities = async (count) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `Tourism/Activity?$orderby=StartTime%20desc&$top=${count}&$format=JSON`
  );
  return data;
};

export const getNewestAcitivitiesByCity = async (count, city) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `Tourism/Activity/${city}?$orderby=StartTime%20desc&$top=${count}&$format=JSON`
  );
  return data;
};

export const getNewestAcitivitiesByKeyword = async (count, keyword) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `Tourism/Activity?$filter=contains(Name%2C'${keyword}')&$orderby=StartTime%20desc&$top=${count}&$format=JSON`
  );
  return data;
};
