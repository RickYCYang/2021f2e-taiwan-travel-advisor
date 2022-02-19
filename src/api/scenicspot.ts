import axios from "api/axios";
import { motcTourismScenicSpot } from "types/tourism";
import { getCount } from "./utils";

export const getScenicSpots = async (count: number) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/ScenicSpot`, {
    params: {
      $top: count,
      $format: "JSON",
    },
  })) as { data: Array<motcTourismScenicSpot> };
  return data;
};

export const getScenicSpotsByCity = async (count: number, city: string) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/ScenicSpot/${city}`, {
    params: {
      $top: count,
      $format: "JSON",
    },
  })) as { data: Array<motcTourismScenicSpot> };
  return data;
};

export const getScenicSpotsByKeyword = async (
  count: number,
  keyword: string
) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/ScenicSpot`, {
    params: {
      $filter: `contains(ScenicSpotName, '${keyword}')`,
      $top: count,
      $format: "JSON",
    },
  })) as { data: Array<motcTourismScenicSpot> };
  return data;
};
