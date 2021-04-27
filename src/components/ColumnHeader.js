import {
  makeStyles,
  Typography,
  IconButton,
  InputBase,
  ClickAwayListener,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    height: 48,
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    textAlign: "left",
  },
  input: {
    background: "white",
    maxHeight: "100%",
    boxSizing: "border-box",
    paddingLeft: 8,
    height: 28,
    borderRadius: 4,
  },
}));

const ColumnTitle = ({ title, onDelete, onEdit, ...rest }) => {
  const classes = useStyles();
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState();

  const toggleTitleEditor = () => {
    setInputValue(title);
    setIsInputOpen(true);
  };

  const handleSubmit = () => {
    setInputValue("");
    setIsInputOpen(false);
    onEdit(inputValue);
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={classes.header} {...rest}>
      {!isInputOpen ? (
        <Typography onClick={toggleTitleEditor} className={classes.title}>
          {title}
        </Typography>
      ) : (
        <ClickAwayListener onClickAway={handleSubmit}>
          <form onSubmit={handleSubmit}>
            <InputBase
              fullWidth
              className={classes.input}
              value={inputValue}
              onChange={onChange}
            />
          </form>
        </ClickAwayListener>
      )}
      <IconButton size="small" onClick={onDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default ColumnTitle;
