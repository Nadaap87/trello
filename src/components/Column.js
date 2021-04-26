import { Droppable, Draggable } from "react-beautiful-dnd";

const Column = ({ id, cards, index, title }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, { isDragging: isDraggingColumn }) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            style={{
              ...provided.draggableProps.style,
              height: 500,
              width: 300,
              background: "lightgrey",
            }}
          >
            <div {...provided.dragHandleProps}>{title}</div>
            <Droppable droppableId={id} type="DROPPABLE_COLUMN">
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
