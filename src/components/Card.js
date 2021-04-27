import { useState } from "react";

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

import EditCard from "./EditCard";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "auto",
    background: "ivory",
    textAlign: "left",
    marginBottom: theme.spacing(1),
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
    gap: theme.spacing(0.5),
  },
}));

const Card = ({ card, index, onDelete, onSave }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOnDelete = () => {
    onDelete(card.id);
  };

  const openEdit = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleOnSave = (newCard) => {
    setAnchorEl(null);
    onSave(newCard);
  };

  return (
    <>
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
              <CardContent className={classes.cardContent}>
                <Typography className={classes.title}>{card.title}</Typography>
                <div>
                  <div className={classes.actions}>
                    <IconButton size="small" onClick={openEdit}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={handleOnDelete}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                </div>
              </CardContent>
            </MaterialCard>
          );
        }}
      </Draggable>
      {anchorEl && (
        <EditCard
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          card={card}
          onSave={handleOnSave}
        />
      )}
    </>
  );
};

export default Card;
