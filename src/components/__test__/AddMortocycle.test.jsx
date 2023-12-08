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

  test('View when there is data in the mock Storage', () => {
    store = mockStore({
      bikes: {
        message: [
          {
            name: 'Test bike 001',
            image: 'https://i.ebayimg.com/images/g/nPcAAOSwUCRkO9sD/s-l500.jpg',
            description: 'Test bike 00 ',
            deposit: '2000',
            finance_fee: '1000',
            option_to_purchase_fee: '1000',
            total_amount_payable: '1000',
            duration: '1000',
          },
        ],
        isLoading: false,
        error: null,
      },
    });
  
    const tree = renderer
      .create(
        <Provider store={store}>
          <AddMotorcycle />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toContainHTML('<label class="font-bold">Bike Name</label>');
  });  
});
