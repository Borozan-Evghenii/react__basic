import React from "react";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css";

export default function Navbar() {
  const navigation = [
    { url: "/about", name: "About" },
    { url: "/", name: "Home" },
  ];

  return (
    <header className={cl.header}>
      {navigation.map((nav) => (
        <Link key={nav.name} to={nav.url}>
          {nav.name}
        </Link>
      ))}
    </header>
  );
}
