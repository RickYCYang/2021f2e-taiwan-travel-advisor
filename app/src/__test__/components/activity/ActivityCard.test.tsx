import { render, screen, cleanup } from '@testing-library/react';
import ActivityCard from 'components/activity/ActivityCard';
import { motcTourismActivity, motcTourismType } from 'types/tourism';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import rootReducer from 'redux/slices';
import { configureStore } from '@reduxjs/toolkit';

const testData: motcTourismActivity = {
  type: motcTourismType.activity,
  ActivityID: 'ID1',
  ActivityName: 'ActivityName1',
  Address: 'Address1',
  Charge: 'Charge1',
  City: 'City1',
  Description: 'Description1',
  Organizer: 'Organizer1',
  Picture: { PictureDescription1: 'PictureDescription1' },
  Location: 'Location1',
  SrcUpdateTime: '2021-12-31T00:24:58+08:00',
  UpdateTime: '2021-12-31T00:24:58+08:00',
};

describe('components/activity/ActivityCard', () => {
  beforeEach(cleanup);
  const store = configureStore({ reducer: rootReducer });

  test('render', () => {
    render(
      <Provider store={store}>
        <ActivityCard activity={testData} />
      </Provider>
    );
    expect(screen.getByText(testData.ActivityName)).toBeInTheDocument;
    expect(screen.getByText(testData.Description ?? '')).toBeInTheDocument;
    expect(screen.getByText(testData.Location ?? '')).toBeInTheDocument;
  });

  test('open modal', () => {
    render(
      <Provider store={store}>
        <ActivityCard activity={testData} />
      </Provider>
    );
    const openModalBtn = screen.getByText('活動詳情');
    userEvent.click(openModalBtn);
    expect(store.getState().modal.show).toBe(true);
  });
});
