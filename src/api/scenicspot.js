import axios from "api/axios";

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

const getCount = (count) => {
  return count ?? 10;
};
