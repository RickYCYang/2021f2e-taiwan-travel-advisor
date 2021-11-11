import axios from "api/axios";
import { getCount } from "./utils";

export const getRestaurants = async (count) => {
  count = getCount(count);
  const { data } = await axios("get", `Restaurant?$top=${count}&$format=JSON`);
  return data;
};

export const getRestaurantsByCity = async (count, city) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `Restaurant/${city}?$top=${count}&$format=JSON`
  );
  return data;
};

export const getRestaurantsByKeyword = async (count, keyword) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `Restaurant?$filter=contains(Name%2C'${keyword}')&$top=${count}&$format=JSON`
  );
  return data;
};
