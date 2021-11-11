import axios from "api/axios";
import { getCount } from "./utils";

export const getHotels = async (count) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `Hotel?$orderby=ZipCode&$top=${count}&$format=JSON`
  );
  return data;
};

export const getHotelsByCity = async (count, city) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `Hotel/${city}?$top=${count}&$format=JSON`
  );
  return data;
};

export const getHotelsByKeyword = async (count, keyword) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `Hotel?$filter=contains(Name%2C'${keyword}')&$orderby=ZipCode%20desc&$top=${count}&$format=JSON`
  );
  return data;
};
