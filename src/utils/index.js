import { v4 as uuid } from "uuid";
const LOCALSTORAGE_KEY = "trello ¯_(ツ)_/¯";

export const initializeState = () => {
  const newBoard = createBoard();

  return { boards: [newBoard], currentBoard: newBoard.id };
};

const createBoard = () => ({
  id: uuid(),
  title: "Fresh Board",
  columns: [
    {
      id: uuid(),
      title: "Todo",
      cards: [
        {
          id: uuid(),
          title: "This is a card",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 2",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 3",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 2",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 3",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 2",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 3",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 2",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 3",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 2",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 3",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 2",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
        {
          id: uuid(),
          title: "This is a card 3",
          img:
            "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
        },
      ],
    },
    { id: uuid(), title: "In Progress", cards: [] },
    { id: uuid(), title: "Done", cards: [] },
  ],
});

export const createCard = (title) => ({
  id: uuid(),
  title,
  img: "",
});

export const getStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

export const setStateToLocalStorage = (state) =>
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
