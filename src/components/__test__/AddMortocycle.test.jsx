import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddMotorcycle from '../AddMotorcycle';

const mockStore = configureStore([]);

describe('AddMotorcycle', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      bikes: {
        message: null,
        isLoading: false,
        error: null,
      },
    });
  });

  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <AddMotorcycle />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('form submission calls dispatch with correct data', () => {
    render(
      <Provider store={store}>
        <AddMotorcycle />
      </Provider>,
    );
  });
});
