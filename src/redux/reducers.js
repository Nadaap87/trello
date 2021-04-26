import * as utils from "../utils";
import * as types from "./types";

const initialState = utils.initializeState();

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_DRAG_END: {
      const { destination, source, type } = action.payload;
      if (type === "BOARD") {
        const { droppableId } = destination;
        const board = state.boards.find((board) => board.id === droppableId);
        const [moved] = board.columns.splice(source.index, 1);
        board.columns.splice(destination.index, 0, moved);
      } else if (type === "COLUMN") {
        console.log(action.payload);
      }
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
