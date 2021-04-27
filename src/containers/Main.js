import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import * as actions from "../redux/actions";
import Board from "../components/Board";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(2),
    boxSizing: "border-box",
    width: "100%",
    overflow: "hidden",
  },
}));

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // *** NOT HADNLING BOARDS ***
  const { boards, currentBoard } = useSelector((state) => state.app);
  const board = boards[currentBoard];

  const handleOnDragEnd = (result) =>
    result.destination && dispatch(actions.onDragEnd(result));

  return (
    <main className={classes.main}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Board id={board.id} columns={board.columns} />
      </DragDropContext>
    </main>
  );
};

export default Main;
