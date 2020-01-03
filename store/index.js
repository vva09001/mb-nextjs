import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import saga from "./saga";

const bindMiddleware = middleware => {
  return applyMiddleware(...middleware);
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(saga);
  return store;
};

export default configureStore;
