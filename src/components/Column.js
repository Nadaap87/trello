import { Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/actions";

import Card from "./Card";
import ColumnTitle from "./ColumnTitle";
import AddCard from "./AddCard";

const useStyles = makeStyles((theme) => ({
  column: {
    width: 350,
    height: "fit-content",
    padding: "12px 8px",
    boxSizing: "border-box",
    background: "lightgray",
    boxSizing: "border-box",
    flexShrink: 0,
  },
  dropabbleColumn: {
    minHeight: 50,
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
    height: "auto",
  },
}));

const Column = ({ id, cards, index, title }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleOnAddCard = (title, columnId) => {
    dispatch(addCard({ title, columnId }));
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, { isDragging: isDraggingColumn }) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            style={{
              ...provided.draggableProps.style,
            }}
            className={classes.column}
          >
            <ColumnTitle {...provided.dragHandleProps} title={title} />
            <Droppable droppableId={id} type="COLUMN">
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={classes.dropabbleColumn}
                  >
                    {cards?.map((card, index) => {
                      return (
                        <Card
                          {...{
                            card,
                            index,
                          }}
                          key={card.id}
                        />
                      );
                    })}
                  </div>
                );
              }}
            </Droppable>
            <AddCard handleOnAddCard={handleOnAddCard} columnId={id} />
          </div>
        );
      }}
    </Draggable>
  );
};

export default Column;
