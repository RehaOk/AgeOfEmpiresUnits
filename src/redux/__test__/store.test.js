import "@testing-library/jest-dom/extend-expect";
import store from "../store";

test("Expect store to be an object", async () => {
  expect(store).toBeInstanceOf(Object);
});

test("Expect variables to be set correctly at development", () => {
  process.env.NODE_ENV = "development";
  const compose = jest.fn(() => ({ composeKey: true }));
  const applyMiddleware = jest.fn(() => ({ middlewareKey: true }));
  global.__REDUX_DEVTOOLS_EXTENSION__ = jest.fn();
  const reduxDevTools =
    global.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  const middleware =
    global.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development"
      ? compose(applyMiddleware({}), reduxDevTools)
      : applyMiddleware({});

  expect(middleware).toBeTruthy();
  expect(compose).toBeCalled();
  expect(applyMiddleware).toBeCalled();
});

test("Expect variables to be set correctly at production", () => {
  process.env.NODE_ENV = "production";
  const compose = jest.fn(() => ({ composeKey: true }));
  const applyMiddleware = jest.fn(() => ({ middlewareKey: true }));
  global.__REDUX_DEVTOOLS_EXTENSION__ = jest.fn();
  const reduxDevTools =
    global.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  const middleware =
    global.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development"
      ? compose(applyMiddleware({}), reduxDevTools)
      : applyMiddleware({});

  expect(middleware).toBeTruthy();
  expect(compose).not.toBeCalled();
  expect(applyMiddleware).toBeCalled();
});
