import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#34c277",
      main: "#02b355",
      dark: "#017d3b",
      contrastText: "#fff",
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});

export default theme;
