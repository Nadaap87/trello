import { Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core";

import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  column: {
    minWidth: 350,
    width: 350,
    position: "relative",
    height: "100%",
    padding: " 8px 8px 8px 0",
    boxSizing: "border-box",
    background: "grey",
  },
  dropabbleColumn: {
    width: "100%",
    padding: 8,
    boxSizing: "border-box",
    overflowY: "auto",
    transition: "all 200ms linear",
    scrollbarWidth: "none",
    height: "auto",
    gap: 6,
    display: "flex",
    flexDirection: "column",
  },
}));

const Column = ({ id, cards, index, title }) => {
  const classes = useStyles();
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
            <div {...provided.dragHandleProps}>{title}</div>

            <Droppable droppableId={id} type="COLUMN">
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={classes.dropabbleColumn}
                  >
                    {cards?.map((card, index) => {
                      return <Card {...{ card, index }} key={card.id} />;
                    })}
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Column;
