import { makeStyles, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "0 6px 12px 6px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "left",
  },
}));

const ColumnTitle = ({ title, onDelete, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.header} {...rest}>
      <Typography className={classes.title}>{title}</Typography>
      <IconButton size="small" onClick={onDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default ColumnTitle;
