import React from "react";

export default function CancelSearch({ hidden, onClickHandler }) {
  return (
    <div className={hidden ? "hidden" : null}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={onClickHandler}
        className="h-7 w-7 rounded-full cursor-pointer hover:bg-red-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
