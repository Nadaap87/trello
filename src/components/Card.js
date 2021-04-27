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
    background: "ivory",
    textAlign: "left",
    marginBottom: 8,
    whiteSpace: "normal",
    wordBreak: "break-all",
  },
  cardMedia: { "> img": { height: "auto", maxHeight: 150 } },
  cardContent: {
    boxSizing: "border-box",
  },
}));

const Card = ({ card, index, ref }) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div ref={ref}>
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
              <CardContent className={classes.cardContent}>
                <Typography>{card.title}</Typography>
              </CardContent>
            </MaterialCard>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;
