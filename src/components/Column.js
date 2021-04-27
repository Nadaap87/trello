import { Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addCard, deleteCard, editCard } from "../redux/actions";

import Card from "./Card";
import ColumnHeader from "./ColumnHeader";
import AddCard from "./AddCard";

const useStyles = makeStyles((theme) => ({
  column: {
    backgroundColor: "#e3e3e3",
    position: "relative",
    display: "inline-flex",
    height: "auto",
    maxHeight: "calc(100% - 0px)",
    flexDirection: "column",
    scrollbarWidth: "none",
    boxSizing: "border-box",
    maxWidth: 250,
    width: 250,
    margin: theme.spacing(0, 0.5),
    padding: theme.spacing(1),
  },
  dropabbleColumn: {
    marginTop: theme.spacing(1),
    boxSizing: "border-box",
    overflowY: "auto",
    width: "100%",
    flex: 1,
  },
}));

const Column = ({
  id,
  cards,
  index,
  title,
  handleOnDeleteColumn,
  handleOnEditColumn,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleOnAddCard = (columnId) => (title) =>
    dispatch(addCard({ title, columnId }));

  const handleOnDeleteCard = (columnId) => (cardId) =>
    dispatch(deleteCard({ columnId, cardId }));

  const handleOnEditCard = (columnId) => (newCard) => {
    dispatch(editCard({ columnId, newCard }));
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
            <ColumnHeader
              {...provided.dragHandleProps}
              title={title}
              onDelete={handleOnDeleteColumn(id)}
              onEdit={handleOnEditColumn(id)}
            />
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
                          onDelete={handleOnDeleteCard(id)}
                          onSave={handleOnEditCard(id)}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
            <AddCard handleOnAddCard={handleOnAddCard(id)} />
          </div>
        );
      }}
    </Draggable>
  );
};

export default Column;
