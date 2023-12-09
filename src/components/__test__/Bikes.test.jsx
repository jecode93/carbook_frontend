import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Bikes from "../Bikes";

const mockStore = configureStore([]);

describe("Cars Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      bikes: {
        message: null,
        isLoading: false,
        error: null,
      },
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Bikes />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(component.container).toMatchSnapshot();
  });
});
