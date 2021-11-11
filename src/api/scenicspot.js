import axios from "api/axios";
import { getCount } from "./utils";

export const getScenicSpots = async (count) => {
  count = getCount(count);
  const { data } = await axios("get", `ScenicSpot?$top=${count}&$format=JSON`);
  return data;
};

export const getScenicSpotsByCity = async (count, city) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `ScenicSpot/${city}?$top=${count}&$format=JSON`
  );
  return data;
};

export const getScenicSpotsByKeyword = async (count, keyword) => {
  count = getCount(count);
  const { data } = await axios(
    "get",
    `ScenicSpot?$filter=contains(Name%2C'${keyword}')&$top=${count}&$format=JSON`
  );
  return data;
};
