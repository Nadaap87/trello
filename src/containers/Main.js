import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

import Board from "../components/Board";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(1),
    boxSizing: "border-box",
  },
}));

const Main = () => {
  const classes = useStyles();
  const { currentBoard } = useSelector((state) => state.app);

  return (
    <main className={classes.main}>
      <Board id={currentBoard.id} columns={currentBoard.columns} />
    </main>
  );
};

export default Main;
