import React from "react";
import clasess from "./Button.module.css";

export default function Button({ children, ...props }) {
  return (
    <button {...props} className={clasess.button}>
      {children}
    </button>
  );
}
