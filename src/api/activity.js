import axios from "api/axios";

export const getNewestAcitivities = async (count) => {
  count = count ?? 10;
  const { data } = await axios(
    "get",
    `Activity?$orderby=StartTime%20desc&$top=${count}&$format=JSON`
  );
  return data;
};
