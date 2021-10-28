import axios from "api/axios";

export const getLatestStartTimeAcitivities = async (count) => {
  count = count ?? 10;
  const { data } = await axios(
    "get",
    `Activity?$select=Name%2C%20Description%2C%20Location%2C%20Picture&$orderby=StartTime%20desc&$top=${count}&$format=JSON`
  );
  return data;
};
