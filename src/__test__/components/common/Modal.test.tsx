import { render, screen, cleanup } from "@testing-library/react";
import Modal from "components/common/Modal";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";
import { configureStore } from "@reduxjs/toolkit";
import { openModal } from "redux/slices/modalSlice";
import userEvent from "@testing-library/user-event";

const testData = {
  photos: ["pic1", "pic2"],
  thumbnail: "pic1",
  title: "title",
  description: "description",
  phone: "phone",
  address: "address",
  time: "time",
  city: "city",
  website: "website",
  position: "position",
};

describe("components/common/Modal", () => {
  const store = configureStore({ reducer: rootReducer });

  beforeEach(() => {
    cleanup();
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
  });

  test("Modal's defailt state (hidden)", () => {
    const modal = screen.getByTestId("modal");
    expect(modal).toHaveClass("opacity-0 z-n1");
  });

  test("Modal open", () => {
    store.dispatch(openModal(testData));
    const modal = screen.getByTestId("modal");
    expect(modal).toHaveClass("opacity-100 z-40");
    expect(store.getState().modal.show).toEqual(true);
  });

  test("Modal close", () => {
    store.dispatch(openModal(testData));
    const modal = screen.getByTestId("modal");
    expect(modal).toHaveClass("opacity-100 z-40");
    expect(store.getState().modal.show).toEqual(true);

    const closeBtn = screen.getByTestId("closeModalBtn");
    userEvent.click(closeBtn);
    expect(modal).toHaveClass("opacity-0 z-n1");
    expect(store.getState().modal.show).toEqual(false);
  });
});
