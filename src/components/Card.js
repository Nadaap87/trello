import { Draggable } from "react-beautiful-dnd";
import {
  makeStyles,
  Card as MaterialCard,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

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
    display: "flex",
    padding: theme.spacing(1),
  },
  title: { flex: 1 },
  actions: {
    display: "flex",
    gap: 3,
  },
}));

const Card = ({ card, index, ref, onDelete }) => {
  const classes = useStyles();

  const handleOnDelete = () => {
    onDelete(card.id);
  };
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
                <Typography className={classes.title}>{card.title}</Typography>
                <div>
                  <div className={classes.actions}>
                    <IconButton size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={handleOnDelete}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                </div>
              </CardContent>
            </MaterialCard>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;
