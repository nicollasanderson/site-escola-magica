import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { GlobaStyle } from "./styles/style";

function App() {
  return (
    <div className="main-page">
      <GlobaStyle />
      <MainPage />
    </div>
  );
}

export default App;
