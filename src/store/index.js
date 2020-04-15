import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers";
import rootSaga from '../sagas';

const logger = createLogger();
const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(saga, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(rootSaga);

export default store;
