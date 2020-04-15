import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const logger = createLogger();

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
