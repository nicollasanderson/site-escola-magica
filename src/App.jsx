import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { GlobaStyle } from "./styles/style";
import Router from "./routes";

function App() {
  return (
    <>
      <GlobaStyle />
      <Router />
    </>
  );
}

export default App;
