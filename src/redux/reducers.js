import * as utils from "../utils";
import * as types from "./types";

const initialState = utils.initializeState();

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_DRAG_END: {
      const { destination, source, type } = action.payload;
      // DROP TYPE BOARD
      if (type === "BOARD") {
        const { droppableId } = destination;
        const board = state.boards.find((board) => board.id === droppableId);
        const [moved] = board.columns.splice(source.index, 1);
        board.columns.splice(destination.index, 0, moved);
      }
      // DROP TYPE COLUMN
      else if (type === "COLUMN") {
        const board = state.boards.find(
          (board) => board.id === state.currentBoard
        );
        // DIFFERENT COLUMNS
        if (source.droppableId !== destination.droppableId) {
          const sourceCards = board.columns.find(
            (col) => col.id === source.droppableId
          ).cards;
          const destinationCards = board.columns.find(
            (col) => col.id === destination.droppableId
          ).cards;

          const [removed] = sourceCards.splice(source.index, 1);
          destinationCards.splice(destination.index, 0, removed);
          return { ...state };
        }
        // SAME COLUMN
        else {
          const columnCards = board.columns.find(
            (col) => col.id === source.droppableId
          ).cards;
          const [moved] = columnCards.splice(source.index, 1);
          columnCards.splice(destination.index, 0, moved);
          return { ...state };
        }
      }

      return { ...state };
    }
    case types.ADD_CARD: {
      const { title, columnId } = action.payload;

      const board = state.boards.find(
        (board) => board.id === state.currentBoard
      );

      const column = board.columns.find((col) => col.id === columnId);
      const newCard = utils.createCard(title);

      column.cards.push(newCard);
      return { ...state };
    }

    case types.ADD_COLUMN: {
      const { title } = action.payload;
      const board = state.boards.find(
        (board) => board.id === state.currentBoard
      );
      const newColumn = utils.createColumn(title);
      board.columns.push(newColumn);

      return { ...state };
    }
    case types.DELETE_COLUMN: {
      const { columnId } = action.payload;
      const board = state.boards.find(
        (board) => board.id === state.currentBoard
      );
      const newColumns = board.columns.filter((col) => col.id !== columnId);
      board.columns = newColumns;

      return { ...state };
    }
    default: {
      return state;
    }
  }
};
