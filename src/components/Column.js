import { Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/actions";

import Card from "./Card";
import ColumnTitle from "./ColumnTitle";
import AddCard from "./AddCard";

const useStyles = makeStyles((theme) => ({
  columnWrapper: {
    backgroundColor: "#e3e3e3",
    position: "relative",
    padding: 10,
    display: "inline-flex",
    height: "auto",
    maxHeight: "calc(100% - 20px)",
    flexDirection: "column",
  },
  column: {
    flex: 1,
    overflowY: "auto",
    maxWidth: 250,
    width: 250,
    overflowX: "hidden",
    alignSelf: "center",
    maxHeight: "90vh",
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dropabbleColumn: {
    boxSizing: "border-box",
    minHeight: 30,
  },
}));

const Column = ({ id, cards, index, title, handleOnDeleteColumn }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleOnAddCard = (columnId) => (title) => {
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
            className={classes.columnWrapper}
          >
            <ColumnTitle
              {...provided.dragHandleProps}
              title={title}
              onDelete={() => handleOnDeleteColumn(id)}
            />
            <div className={classes.column}>
              <Droppable droppableId={id} type="COLUMN">
                {(provided, { isDraggingOver }) => {
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
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
            <AddCard handleOnAddCard={handleOnAddCard(id)} />
          </div>
        );
      }}
    </Draggable>
  );
};

export default Column;
