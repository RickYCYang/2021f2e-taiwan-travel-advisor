import { render, screen, cleanup, waitFor } from '@testing-library/react';
import Activities from 'components/activity/Activities';
import { motcTourismActivity } from 'types/tourism';
import { Provider } from 'react-redux';
import rootReducer from 'redux/slices';
import { configureStore } from '@reduxjs/toolkit';
import {
  getNewestAcitivities,
  getNewestAcitivitiesByCity,
  getNewestAcitivitiesByKeyword,
} from 'api/activity';
import { QueryClient, QueryClientProvider } from 'react-query';
jest.mock('api/activity');

const testData: Array<motcTourismActivity> = [
  {
    type: 'Activity',
    ActivityID: 'ID1',
    ActivityName: 'ActivityName1',
    Address: 'Address1',
    Charge: 'Charge1',
    City: 'City1',
    Description: 'Description1',
    Organizer: 'Organizer1',
    Picture: { PictureDescription1: 'pic1' },
    Location: 'Location1',
    SrcUpdateTime: '2022/10/10',
    UpdateTime: '2022/10/10',
  },
  {
    type: 'Activity',
    ActivityID: 'ID2',
    ActivityName: 'ActivityName2',
    Address: 'Address2',
    Charge: 'Charge2',
    City: 'City2',
    Description: 'Description2',
    Organizer: 'Organizer2',
    Picture: { PictureDescription1: 'pic2' },
    Location: 'Location2',
    SrcUpdateTime: '2022/10/10',
    UpdateTime: '2022/10/10',
  },
];

describe('components/activity/ActivityCardCollection', () => {
  beforeEach(cleanup);
  const store = configureStore({ reducer: rootReducer });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });

  test('default', async () => {
    (getNewestAcitivities as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Activities />
        </QueryClientProvider>
      </Provider>
    );
    const subTitle = screen.getByText('熱門活動');
    const activityCards = await screen.findAllByTestId('activityCard');
    expect(getNewestAcitivities).toHaveBeenCalledTimes(1);
    expect(subTitle).toBeInTheDocument;
    expect(activityCards.length).toBe(2);
  });

  test('render with city', async () => {
    (getNewestAcitivitiesByCity as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Activities city="Taipei" />
        </QueryClientProvider>
      </Provider>
    );
    const subTitle = screen.getByText('熱門活動');
    const activityCards = await screen.findAllByTestId('activityCard');
    expect(getNewestAcitivitiesByCity).toHaveBeenCalledTimes(1);
    expect(subTitle).toBeInTheDocument;
    expect(activityCards.length).toBe(2);
  });

  test('render with keyword', async () => {
    (getNewestAcitivitiesByKeyword as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Activities keyword="音樂祭" />
        </QueryClientProvider>
      </Provider>
    );
    const subTitle = screen.getByText('熱門活動');
    const activityCards = await screen.findAllByTestId('activityCard');
    expect(getNewestAcitivitiesByKeyword).toHaveBeenCalledTimes(1);
    expect(subTitle).toBeInTheDocument;
    expect(activityCards.length).toBe(2);
  });

  test('render with defaultCount', async () => {
    (getNewestAcitivities as jest.Mock).mockReturnValue([testData[0]]);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Activities defaultCount={1} />
        </QueryClientProvider>
      </Provider>
    );

    const activityCards = await screen.findAllByTestId('activityCard');
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(activityCards.length).toBe(1));
  });
});
