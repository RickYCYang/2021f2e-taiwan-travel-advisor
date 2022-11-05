import axios from 'api/axios';
import { getCount } from './utils';
import { motcTourismHotel } from 'types/tourism';

export const getHotels = async (count: number) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/Hotel`, {
    params: {
      $orderby: 'ZipCode',
      $top: count,
      $format: 'JSON',
    },
  })) as { data: Array<motcTourismHotel> };
  return data;
};

export const getHotelsByCity = async (count: number, city: string) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/Hotel/${city}`, {
    params: {
      $top: count,
      $format: 'JSON',
    },
  })) as { data: Array<motcTourismHotel> };
  return data;
};

export const getHotelsByKeyword = async (count: number, keyword: string) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/Hotel`, {
    params: {
      $filter: `contains(HotelName, '${keyword}')`,
      $orderby: 'ZipCode',
      $top: count,
      $format: 'JSON',
    },
  })) as { data: Array<motcTourismHotel> };
  return data;
};
