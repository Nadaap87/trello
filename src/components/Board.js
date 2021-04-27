import { Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { addColumn, deleteColumn, editColumn } from "../redux/actions";

import Column from "./Column";
import AddColumn from "./AddColumn";

const useStyles = makeStyles((theme) => ({
  columnContainer: {
    height: "100%",
    display: "inline-block",
    verticalAlign: "top",
    padding: "0 8px",
    boxSizing: "border-box",
  },
  columns: {
    display: "flex",
    height: "100%",
    overflowY: "hidden",
    scrollbarWidth: "none",
    flexWrap: "nowrap",
  },
}));

const Board = ({ id, columns }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOnAddColumn = (title) => {
    dispatch(addColumn({ title }));
  };

  const handleOnDeleteColumn = (columnId) => () => {
    dispatch(deleteColumn({ columnId }));
  };

  const handleOnEditColumn = (columnId) => (title) => {
    dispatch(editColumn({ title, columnId }));
  };

  return (
    <>
      <Droppable droppableId={id} type="BOARD" direction="horizontal">
        {(provided) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classes.columns}
            >
              {columns.map(({ id, cards, title }, index) => (
                <div className={classes.columnContainer} key={id}>
                  <Column
                    {...{
                      index,
                      id,
                      cards,
                      title,
                      handleOnDeleteColumn,
                      handleOnEditColumn,
                    }}
                    key={id}
                  />
                </div>
              ))}
              {provided.placeholder}
              <div className={classes.columnContainer}>
                <AddColumn handleOnAddColumn={handleOnAddColumn} />
              </div>
            </div>
          );
        }}
      </Droppable>
    </>
  );
};

export default Board;
