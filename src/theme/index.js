import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export let theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

theme = responsiveFontSizes(theme);
