import axios from "core/axios";

export const getFourLatestStartTimeAcitivities = async () => {
  const { data } = await axios.get(
    "Activity?$select=Name%2C%20Description%2C%20Location%2C%20Picture&$orderby=StartTime%20desc&$top=10&$format=JSON"
  );
  return data;
};
