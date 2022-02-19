import axios from "api/axios";
import { getCount } from "./utils";
import { motcTourismRestaurant } from "types/tourism";

export const getRestaurants = async (count: number) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/Restaurant`, {
    params: {
      $top: count,
      $format: "JSON",
    },
  })) as { data: Array<motcTourismRestaurant> };
  return data;
};

export const getRestaurantsByCity = async (count: number, city: string) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/Restaurant/${city}`, {
    params: {
      $top: count,
      $format: "JSON",
    },
  })) as { data: Array<motcTourismRestaurant> };
  return data;
};

export const getRestaurantsByKeyword = async (
  count: number,
  keyword: string
) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/Restaurant`, {
    params: {
      $filter: `contains(RestaurantName, '${keyword}')`,
      $top: count,
      $format: "JSON",
    },
  })) as { data: Array<motcTourismRestaurant> };
  return data;
};
