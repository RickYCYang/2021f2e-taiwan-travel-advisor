import axios from "api/axios";

export const getRestaurants = async (count) => {
  count = count ?? 10;
  const { data } = await axios("get", `Restaurant?$top=${count}&$format=JSON`);
  return data;
};
