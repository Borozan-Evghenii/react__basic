import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css";
import Button from "../button/Button";
import { AuthContext } from "../../context/context";

export default function Navbar() {
  const navigation = [
    { url: "/about", name: "About" },
    { url: "/", name: "Home" },
  ];

  const { isAuth, setIsAuth } = useContext(AuthContext)

  const exit = () => {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }
  return (
    <header className={cl.header}>
      {navigation.map((nav) => (
        <Link key={nav.name} to={nav.url}>
          {nav.name}
        </Link>
      ))}
      {isAuth? <Button onClick={exit}>Exit</Button>: ''}
    </header>
  );
}
