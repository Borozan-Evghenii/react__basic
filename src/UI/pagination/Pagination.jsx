import React from "react";
import { getPagesArray } from "./../../utils/pages";

export default function Pagination({ page, changePage, totalPages }) {
  console.log(totalPages);
  let pageArray = getPagesArray(totalPages);

  return (
    <div className="pagination">
      {pageArray.map((p) => (
        <span
          key={p}
          onClick={() => changePage(p)}
          className={
            page === p
              ? "pagination__item pagination__item--active"
              : "pagination__item"
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
}
