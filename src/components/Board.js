import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core";

import Column from "./Column";

const useStyles = makeStyles((theme) => ({
  board: {
    width: "100%",
    overflowX: "auto",
    display: "flex",
    gap: 8,
  },
}));

const Board = ({ id, columns, onDragEndHandler }) => {
  const classes = useStyles();

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId={id} type="BOARD" direction="horizontal">
        {(provided) => {
          return (
            <div
              className={classes.board}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columns.map(({ id, cards, title }, index) => (
                <Column {...{ index, id, cards, title }} key={id} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
