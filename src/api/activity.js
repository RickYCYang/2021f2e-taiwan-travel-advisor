import axios from "api/axios";
import { getCount } from "./utils";

export const getNewestAcitivities = async (count) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `Activity?$orderby=StartTime%20desc&$top=${count}&$format=JSON`
  );
  return data;
};

export const getNewestAcitivitiesByCity = async (count, city) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `Activity/${city}?$orderby=StartTime%20desc&$top=${count}&$format=JSON`
  );
  return data;
};
