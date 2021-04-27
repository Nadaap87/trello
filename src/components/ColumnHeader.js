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
    justifyContent: "space-between",
    textAlign: "left",
  },
  titleWrapper: {
    flex: 1,
    display: "flex",
  },
  title: {
    wordBreak: "break-all",
  },
  input: {
    background: "white",
    maxHeight: "100%",
    boxSizing: "border-box",
    paddingLeft: theme.spacing(1),
    borderRadius: theme.spacing(0.5),
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
    if (inputValue.trim() !== title.trim()) onEdit(inputValue);
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={classes.header} {...rest}>
      {!isInputOpen ? (
        <div className={classes.titleWrapper}>
          <Typography
            className={classes.title}
            component="span"
            onClick={toggleTitleEditor}
          >
            {title}
          </Typography>
        </div>
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
