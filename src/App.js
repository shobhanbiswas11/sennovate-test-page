import React from "react";
import { Header } from "./components";
import { ContactPage } from "./containers";
import "./style/css/global.css";

export default function App() {
  return (
    <>
      <Header />
      <ContactPage />
    </>
  );
}
