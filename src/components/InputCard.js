import { useState } from "react";
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
    width: "100%",
    display: "flex",
    margin: "6px 0",
    alignItems: "center",
  },
}));

export default function InputCard({
  setOpen,
  content,
  onConfirm,
  placeholder,
  ...rest
}) {
  const classes = useStyle();
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const hanldeOnSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onConfirm(title);
    setOpen(false);
    setTitle("");
  };

  return (
    <form onSubmit={hanldeOnSubmit}>
      <Paper className={classes.card}>
        <InputBase
          onChange={handleOnChange}
          fullWidth
          inputProps={{
            className: classes.input,
          }}
          placeholder={placeholder}
          value={title}
          {...rest}
        />
      </Paper>
      <div className={classes.confirm}>
        <div>
          <Button type="submit" className={classes.btnConfirm}>
            {content}
          </Button>
        </div>
        <IconButton onClick={() => setOpen(false)} size="small">
          <ClearIcon />
        </IconButton>
      </div>
    </form>
  );
}
