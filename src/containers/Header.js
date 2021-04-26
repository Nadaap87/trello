import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    background: "rgba(0,0,0,0.4)",
    height: 48,
  },
}));

const Header = () => {
  const classes = useStyles();
  return <header className={classes.header}></header>;
};

export default Header;
