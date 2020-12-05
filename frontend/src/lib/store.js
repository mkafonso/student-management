import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const appliedMiddlewares = applyMiddleware(logger);

const store = createStore(rootReducer, composeWithDevTools(appliedMiddlewares));

export default store;
