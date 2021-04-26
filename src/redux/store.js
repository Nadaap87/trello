import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { appReducer } from "./reducers";

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
