import { Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  column: {
    height: 500,
    width: 300,
    background: "lightgray",
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
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {cards?.map((item, index) => {
                      return null;
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
