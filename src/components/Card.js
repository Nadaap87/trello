import { Draggable } from "react-beautiful-dnd";
import {
  makeStyles,
  Card as MaterialCard,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "auto",
    width: "100%",
    background: "ivory",
    padding: 6,
    boxSizing: "border-box",
    textAlign: "left",
  },
  cardMedia: {
    width: "100%",
  },
}));

const Card = ({ card, index }) => {
  const classes = useStyles();
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => {
        return (
          <MaterialCard
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
            }}
            className={classes.card}
          >
            <CardMedia
              component="img"
              image={card.img}
              className={classes.cardMedia}
              title=""
              alt=""
            />
            <CardContent>
              <Typography>{card.text}</Typography>
            </CardContent>
          </MaterialCard>
        );
      }}
    </Draggable>
  );
};

export default Card;
