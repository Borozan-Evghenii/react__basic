import React from "react";
import modal from "./Modal.module.css";

export default function Modal({ children, visible, setVisible }) {
  const rootClass = [modal.modal];
  if (visible) {
    rootClass.push(modal.active);
  }
  return (
    <div onClick={(e) => setVisible(false)} className={rootClass.join("  ")}>
      <div className={modal.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
