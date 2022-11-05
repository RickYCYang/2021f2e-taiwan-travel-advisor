import { render, screen, cleanup } from '@testing-library/react';
import RouteFlow from 'components/traffic/RouteFlow';
import { Provider } from 'react-redux';
import rootReducer from 'redux/slices';
import { configureStore } from '@reduxjs/toolkit';
import { setStops } from 'redux/slices/routeSlice';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getHoursAndMinuteStr } from 'utils/dateTime';
jest.mock('utils/dateTime');

const testDataStop = [
  {
    StationID: '2717',
    StopBoarding: 0,
    StopID: '33210',
    StopName: { Zh_tw: '歡仔園', En: 'Huanziyuan' },
    StopPosition: {
      PositionLon: 121.4447909,
      PositionLat: 25.0118181,
      GeoHash: 'wsqq7932k',
    },
    StopSequence: 1,
    StopUID: 'TPE33210',
    estimateTime: undefined,
    stopStatus: 1,
  },
  {
    StationID: '2562',
    StopBoarding: 0,
    StopID: '33222',
    StopName: { Zh_tw: '仁愛新村', En: 'Renai New Village' },
    StopPosition: {
      PositionLon: 121.458394,
      PositionLat: 24.999752,
      GeoHash: 'wsqq5z561',
    },
    StopSequence: 12,
    StopUID: 'TPE33222',
    estimateTime: 488,
    stopStatus: 0,
  },
];

describe('components/traffic/Searchbar', () => {
  beforeEach(cleanup);
  const history = createMemoryHistory();
  const store = configureStore({ reducer: rootReducer });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });

  test('initial', async () => {
    (getHoursAndMinuteStr as jest.Mock).mockReturnValue('18 : 20');
    store.dispatch(setStops(testDataStop));
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router history={history}>
            <RouteFlow />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
    const station1 = screen.getByText('歡仔園');
    const station1Status = screen.getByText('未發車');
    const station2 = screen.getByText('仁愛新村');
    const station2Status = screen.getByText('18 : 20');
    const hintMsg = screen.getByText('*每隔15秒自動更新');
    expect(station1).toBeInTheDocument;
    expect(station1Status).toBeInTheDocument;
    expect(station2).toBeInTheDocument;
    expect(station2Status).toBeInTheDocument;
    expect(hintMsg).toBeInTheDocument;
  });
});
