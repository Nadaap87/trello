import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: 24,
    background: "rgba(0,0,0,0.3)",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return <footer className={classes.footer}></footer>;
};

export default Footer;
