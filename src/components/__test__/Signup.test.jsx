import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Signup from '../Signup';
import { signup } from '../../redux/auth/authSlice';

const mockStore = configureStore([]);

describe('Signup Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      message: '',
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  
});
