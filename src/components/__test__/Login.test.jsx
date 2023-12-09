import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Login from '../Login';
import { login } from '../../redux/auth/authSlice';

const mockStore = configureStore([]);

describe('Login Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      auth: {
        token: null,
      },
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(component.container).toMatchSnapshot();
  }); 
  
});
