import { useState, useEffect } from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  card: {
    width: "100%",
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: "#5AAC44",
    color: "#fff",
    "&:hover": {
      background: fade("#5AAC44", 0.75),
    },
    justifySelf: "flex-start",
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
    width: "100%",
    display: "flex",
    margin: "6px 0",
    alignItems: "center",
  },
}));

export default function InputCard({ setOpen, content, onConfirm }) {
  const classes = useStyle();
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleConfirm = () => {
    if (!title.trim()) return;
    onConfirm(title);
    setOpen(false);
    setTitle("");
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            multiline
            fullWidth
            rows={3}
            inputProps={{
              className: classes.input,
            }}
            value={title}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <div>
          <Button className={classes.btnConfirm} onClick={handleConfirm}>
            {content}
          </Button>
        </div>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
