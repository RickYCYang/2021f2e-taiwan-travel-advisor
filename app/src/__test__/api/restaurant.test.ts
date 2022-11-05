import {
  getRestaurants,
  getRestaurantsByCity,
  getRestaurantsByKeyword,
} from 'api/restaurant';
import axios from '../../api/axios';
import * as utils from '../../api/utils';

// Mock jest and set the type
jest.mock('../../api/axios');
jest.mock('../../api/utils');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedUtils = utils as jest.Mocked<{
  getCount: (count?: number) => number;
}>;

describe('api/restaurant', () => {
  const count = 5;

  beforeEach(() => {
    //jest.resetAllMocks();
    mockedAxios.get.mockResolvedValue({
      data: 'data',
    });
    mockedUtils.getCount.mockReturnValue(count);
  });

  test('getRestaurants', async () => {
    await getRestaurants(count);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith('Tourism/Restaurant', {
      params: { $format: 'JSON', $top: count },
    });
  });

  test('getRestaurantsByCity', async () => {
    const city = 'Taipei';
    await getRestaurantsByCity(count, city);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`Tourism/Restaurant/${city}`, {
      params: { $format: 'JSON', $top: count },
    });
  });

  test('getRestaurantsByKeyword', async () => {
    const keyword = 'japen';
    await getRestaurantsByKeyword(count, keyword);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`Tourism/Restaurant`, {
      params: {
        $filter: `contains(RestaurantName, '${keyword}')`,
        $format: 'JSON',
        $top: count,
      },
    });
  });
});
