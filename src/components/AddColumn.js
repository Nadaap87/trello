import { useState } from "react";
import { Paper, Typography, Collapse } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  add: {
    padding: theme.spacing(1, 1, 1, 2),
    background: "#EBECF0",
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
    cursor: "pointer",
  },
}));

const AddColumn = ({ handleOnAddColumn }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleOnConfirm = (title) => {
    handleOnAddColumn(title);
  };

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard
          multiline={false}
          content={"Add Column"}
          setOpen={setOpen}
          onConfirm={handleOnConfirm}
          placeholder={"Column Title"}
        />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.add}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>+ Add a Column</Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default AddColumn;
