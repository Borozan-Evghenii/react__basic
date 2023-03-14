import React from "react";
import "./styles/App.css";

import AppRouter from "./components/AppRouter";
import Navbar from "./UI/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
