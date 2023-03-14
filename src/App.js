import React, { useEffect, useState } from "react";
import "./styles/App.css";

import AppRouter from "./components/AppRouter";
import Navbar from "./UI/navbar/Navbar";
import { AuthContext } from "./context/context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, isLoading, setIsLoading }}
    >
      <Navbar />
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
