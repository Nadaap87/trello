import { Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core";

import Column from "./Column";

const useStyles = makeStyles((theme) => ({
  board: {
    width: "100%",
    overflowX: "auto",
    display: "flex",
    gap: 8,
    height: "100%",
  },
}));

const Board = ({ id, columns }) => {
  const classes = useStyles();

  return (
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
  );
};

export default Board;
