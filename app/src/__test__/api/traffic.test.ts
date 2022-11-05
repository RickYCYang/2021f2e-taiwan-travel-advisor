import {
  getRoutesByCity,
  getStopsByCityAndRouteName,
  getArrivalTimeByCityAndRouteName,
} from 'api/traffic';
import axios from '../../api/axios';

// Mock jest and set the type
jest.mock('../../api/axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('api/traffic', () => {
  const city = 'Taipei';
  const routeName = '203';

  beforeEach(() => {
    //jest.resetAllMocks();
    mockedAxios.get.mockResolvedValue({
      data: 'data',
    });
  });

  test('getRoutesByCity', async () => {
    await getRoutesByCity(city);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`Bus/Route/City/${city}`, {
      params: {
        $select: `RouteUID,RouteName,DepartureStopNameZh,DestinationStopNameZh`,
        $orderby: 'RouteUID',
        $format: 'JSON',
      },
    });
  });

  test('getStopsByCityAndRouteName', async () => {
    await getStopsByCityAndRouteName(city, routeName);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `Bus/DisplayStopOfRoute/City/${city}/${routeName}`,
      {
        params: {
          $select: 'RouteName,Direction,Stops',
          $top: 30,
          $format: 'JSON',
        },
      }
    );
  });

  test('getArrivalTimeByCityAndRouteName', async () => {
    await getArrivalTimeByCityAndRouteName(city, routeName);
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `Bus/EstimatedTimeOfArrival/City/${city}/${routeName}`,
      {
        params: {
          $format: 'JSON',
        },
      }
    );
  });
});
