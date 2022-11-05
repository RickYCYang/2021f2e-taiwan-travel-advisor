import {
  getNewestAcitivities,
  getNewestAcitivitiesByCity,
  getNewestAcitivitiesByKeyword,
} from 'api/activity';
import axios from '../../api/axios';
import * as utils from '../../api/utils';

// Mock jest and set the type
jest.mock('../../api/axios');
jest.mock('../../api/utils');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedUtils = utils as jest.Mocked<{
  getCount: (count?: number) => number;
}>;

describe('api/activity', () => {
  const count = 5;

  beforeEach(() => {
    //jest.resetAllMocks();
    mockedAxios.get.mockResolvedValue({
      data: 'data',
    });
    mockedUtils.getCount.mockReturnValue(count);
  });

  test('getNewestAcitivities', async () => {
    await getNewestAcitivities(count);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith('Tourism/Activity', {
      params: { $format: 'JSON', $top: count },
    });
  });

  test('getNewestAcitivitiesByCity', async () => {
    const city = 'Taipei';
    await getNewestAcitivitiesByCity(count, city);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`Tourism/Activity/${city}`, {
      params: { $format: 'JSON', $top: count },
    });
  });

  test('getNewestAcitivitiesByKeyword', async () => {
    const keyword = '音樂祭';
    await getNewestAcitivitiesByKeyword(count, keyword);
    expect(mockedUtils.getCount).toBeCalledTimes(1);
    expect(mockedUtils.getCount).toHaveBeenCalledWith(count);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith('Tourism/Activity', {
      params: {
        $filter: `contains(ActivityName, '${keyword}')`,
        $format: 'JSON',
        $top: count,
      },
    });
  });
});
