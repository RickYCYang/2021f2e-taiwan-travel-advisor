import {
  getScenicSpots,
  getScenicSpotsByCity,
  getScenicSpotsByKeyword,
} from 'api/scenicspot';
import axios from '../../api/axios';
import * as utils from '../../api/utils';

// Mock jest and set the type
jest.mock('../../api/axios');
jest.mock('../../api/utils');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedUtils = utils as jest.Mocked<{
  getCount: (count?: number) => number;
}>;

describe('api/scenicspot', () => {
  const count = 5;

  beforeEach(() => {
    //jest.resetAllMocks();
    mockedAxios.get.mockResolvedValue({
      data: 'data',
    });
    mockedUtils.getCount.mockReturnValue(count);
  });

  test('getScenicSpots', async () => {
    await getScenicSpots(count);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith('Tourism/ScenicSpot', {
      params: { $format: 'JSON', $top: count },
    });
  });

  test('getScenicSpotsByCity', async () => {
    const city = 'Taipei';
    await getScenicSpotsByCity(count, city);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`Tourism/ScenicSpot/${city}`, {
      params: { $format: 'JSON', $top: count },
    });
  });

  test('getScenicSpotsByKeyword', async () => {
    const keyword = '台北';
    await getScenicSpotsByKeyword(count, keyword);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`Tourism/ScenicSpot`, {
      params: {
        $filter: `contains(ScenicSpotName, '${keyword}')`,
        $format: 'JSON',
        $top: count,
      },
    });
  });
});
