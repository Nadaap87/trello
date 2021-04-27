import { combineReducers, createStore } from "redux";
import { appReducer } from "./reducers";
import * as utils from "../utils";

const rootReducer = combineReducers({
  app: appReducer,
});

const state = utils.getStateFromLocalStorage() || {};

export const store = createStore(rootReducer, state);

store.subscribe(() => {
  utils.setStateToLocalStorage(store.getState());
});
