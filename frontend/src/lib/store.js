import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

export const middlewares = [thunk];

const appliedMiddlewares = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(appliedMiddlewares)
    : appliedMiddlewares
);

export default store;
