import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReservationList from '../ReservationList';

const mockStore = configureStore([]);

describe('ReservationList Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      reservation: {
        display: {
          message: [
            {
              id: 1, bike_id: 1, city: 'City1', date: '2023-12-31',
            },
            {
              id: 2, bike_id: 2, city: 'City2', date: '2023-12-30',
            },
          ],
        },
        isLoading: false,
      },
      bikes: {
        message: {
          bikes: [
            { id: 1, name: 'Bike1' },
            { id: 2, name: 'Bike2' },
          ],
        },
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <ReservationList />
      </Provider>,
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
