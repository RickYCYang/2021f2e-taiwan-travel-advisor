import { render, screen, cleanup, waitFor } from "@testing-library/react";
import Traffic from "views/Traffic";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";
import { configureStore } from "@reduxjs/toolkit";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
jest.mock("api/traffic");

describe("views/Traffic", () => {
  beforeEach(cleanup);
  const store = configureStore({ reducer: rootReducer });
  const history = createMemoryHistory();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });

  test("default", () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Traffic />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const searchbar = screen.getByTestId("searchbar");
    const routeFlow = screen.getByTestId("routeFlow");
    const hintMsg = screen.getByText("*每隔15秒自動更新");
    expect(searchbar).toBeInTheDocument;
    expect(routeFlow).toBeInTheDocument;
    expect(hintMsg).toBeInTheDocument;
  });
});
