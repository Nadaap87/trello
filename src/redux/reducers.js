import * as utils from "../utils";

const initialState = utils.initializeState();

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
