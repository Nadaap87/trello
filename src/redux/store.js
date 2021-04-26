import { combineReducers, createStore } from "redux";
import { appReducer } from "./reducers";
import * as utils from "../utils";
const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer, utils.getStateFromLocalStorage());

store.subscribe(() => {
  utils.setStateToLocalStorage(store.getState());
});
