import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import * as actions from "../redux/actions";
import Board from "../components/Board";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(1),
    boxSizing: "border-box",
    width: "100%",
    overflow: "hidden",
  },
}));

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { boards } = useSelector((state) => state.app);

  // NOT HADNLING BOARDS - DEFAULT IS INDEX 0
  const currentBoard = boards[0];

  const onDragEndHandler = (result) => {
    return result.destination && dispatch(actions.onDragEnd(result));
  };

  return (
    <main className={classes.main}>
      <DragDropContext onDragEnd={onDragEndHandler}>
        <Board
          id={currentBoard.id}
          columns={currentBoard.columns}
          onDragEndHandler={onDragEndHandler}
        />
      </DragDropContext>
    </main>
  );
};

export default Main;
