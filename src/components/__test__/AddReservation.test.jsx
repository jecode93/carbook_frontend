import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddReservation from '../AddReservation';

const mockStore = configureStore([]);

describe('AddReservation Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      bikes: {
        message: {
          bikes: [
            { id: 1, name: 'Bike1', image: 'bike1.jpg' },
            { id: 2, name: 'Bike2', image: 'bike2.jpg' },
          ],
        },
      },
      reservation: {
        reservationMessage: {},
        isLoading: false,
        error: null,
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <AddReservation />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
