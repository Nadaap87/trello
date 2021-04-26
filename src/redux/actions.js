import * as types from "./types";

export const addColumn = (payload) => ({
  type: types.ADD_COLUMN,
  payload,
});

export const editColumn = (payload) => ({
  type: types.EDIT_COLUMN,
  payload,
});

export const deleteColumn = (payload) => ({
  type: types.DELETE_COLUMN,
  payload,
});

export const onDragEnd = (payload) => ({
  type: types.ON_DRAG_END,
  payload,
});

export const addCard = (payload) => ({
  type: types.ADD_CARD,
  payload,
});
