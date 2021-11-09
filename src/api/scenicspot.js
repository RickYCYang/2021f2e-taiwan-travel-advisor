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
