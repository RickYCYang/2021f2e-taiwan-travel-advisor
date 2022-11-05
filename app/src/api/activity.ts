import axios from 'api/axios';
import { getCount } from './utils';
import { motcTourismActivity } from 'types/tourism';

export const getNewestAcitivities = async (count: number) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/Activity`, {
    params: {
      $top: count,
      $format: 'JSON',
    },
  })) as { data: Array<motcTourismActivity> };

  return data;
};

export const getNewestAcitivitiesByCity = async (
  count: number,
  city: string
) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/Activity/${city}`, {
    params: {
      $top: count,
      $format: 'JSON',
    },
  })) as { data: Array<motcTourismActivity> };
  return data;
};

export const getNewestAcitivitiesByKeyword = async (
  count: number,
  keyword: string
) => {
  count = getCount(count);
  const { data } = (await axios.get(`Tourism/Activity`, {
    params: {
      $filter: `contains(ActivityName, '${keyword}')`,
      $top: count,
      $format: 'JSON',
    },
  })) as { data: Array<motcTourismActivity> };
  return data;
};
