import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import unitFilter from "./sagas/unitFilter";

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware =
  window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(unitFilter);

export default store;
