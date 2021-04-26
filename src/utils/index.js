import { v4 as uuid } from "uuid";
const LOCALSTORAGE_KEY = "trello ¯_(ツ)_/¯";

export const initializeState = () => {
  const newBoard = createBoard();

  return { boards: [newBoard], currentBoard: newBoard };
};

const createBoard = () => ({
  id: uuid(),
  title: "Fresh Board",
  columns: [
    { id: uuid(), title: "Todo", cards: [] },
    { id: uuid(), title: "In Progress", cards: [] },
    { id: uuid(), title: "Done", cars: [] },
  ],
});

export const getStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

export const setStateToLocalStorage = (state) =>
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
