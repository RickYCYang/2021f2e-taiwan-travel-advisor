import axios from "api/axios";

export const getHotels = async (count) => {
  count = count ?? 20;
  const { data } = await axios(
    "get",
    `Hotel?$orderby=ZipCode&$top=${count}&$format=JSON`
  );
  return data;
};
