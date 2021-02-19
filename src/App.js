import { StylesProvider, ThemeProvider } from "@material-ui/core";
import React from "react";
import { ContactPage, Header } from "./AppElements";
import { theme } from "./style";
import "./style/css/global.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Header />
        <ContactPage />
      </StylesProvider>
    </ThemeProvider>
  );
}
