import { getHotels, getHotelsByCity, getHotelsByKeyword } from 'api/hotel';
import axios from '../../api/axios';
import * as utils from '../../api/utils';

// Mock jest and set the type
jest.mock('../../api/axios');
jest.mock('../../api/utils');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedUtils = utils as jest.Mocked<{
  getCount: (count?: number) => number;
}>;

describe('api/hotel', () => {
  const count = 5;

  beforeEach(() => {
    //jest.resetAllMocks();
    mockedAxios.get.mockResolvedValue({
      data: 'data',
    });
    mockedUtils.getCount.mockReturnValue(count);
  });

  test('getHotels', async () => {
    await getHotels(count);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith('Tourism/Hotel', {
      params: { $orderby: 'ZipCode', $format: 'JSON', $top: count },
    });
  });

  test('getHotelsByCity', async () => {
    const city = 'Taipei';
    await getHotelsByCity(count, city);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`Tourism/Hotel/${city}`, {
      params: { $format: 'JSON', $top: count },
    });
  });

  test('getHotelsByKeyword', async () => {
    const keyword = '台北';
    await getHotelsByKeyword(count, keyword);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`Tourism/Hotel`, {
      params: {
        $filter: `contains(HotelName, '${keyword}')`,
        $orderby: 'ZipCode',
        $format: 'JSON',
        $top: count,
      },
    });
  });
});
