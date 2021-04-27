import { useState } from "react";

import {
  Popover,
  makeStyles,
  InputBase,
  Button,
  fade,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0,0,0,0.4)",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  input: {
    padding: 8,
    border: "1px solid lightgray",
    margin: 3,
    boxSizing: "border-box",
    borderRadius: 4,
  },
  actions: {
    display: "flex",
    padding: 6,
    boxSizing: "border-box",
    zIndex: 9999,
  },
  btnConfirm: {
    background: "#5AAC44",
    color: "#fff",
    "&:hover": {
      background: fade("#5AAC44", 0.75),
    },
    justifySelf: "flex-start",
  },
}));

const EditCard = ({ anchorEl, onClose, card, onSave }) => {
  const classes = useStyles();
  const [title, setTitle] = useState(card.title);
  const [img, setImg] = useState(card.img);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onImgURLChange = (e) => {
    setImg(e.target.value);
  };

  const handleOnSave = () => {
    onSave({
      ...card,
      title,
      img,
    });
  };

  return (
    <>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={true}
        onClose={onClose}
        classes={{ root: classes.root, paper: classes.paper }}
      >
        {img && <img src={img} alt="Not found" height={150} />}
        <InputBase
          value={img}
          onChange={onImgURLChange}
          className={classes.input}
          placeholder="Image cover url"
        />
        <InputBase
          className={classes.input}
          value={title}
          onChange={onTitleChange}
          multiline
          rows={3}
          placeholder="Card title"
        />
        <div className={classes.actions}>
          <Button className={classes.btnConfirm} onClick={handleOnSave}>
            Save
          </Button>
        </div>
      </Popover>
    </>
  );
};

export default EditCard;
