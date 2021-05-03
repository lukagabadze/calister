import React from "react";
import { Link } from "react-router-dom";

export const Button = (props) => {
  return (
    <button
      className={
        "border-2 hover:text-white bg-blue-100 hover:bg-blue-400 focus:outline-none  duration-100 rounded-sm px-4 py-1 " +
        (props.active ? "bg-blue-400 border-black" : "border-blue-400")
      }
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  );
};

export const Input = (props) => {
  return (
    <input
      className="border-2 border-blue-500 rounded-sm px-1"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
      value={props.value}
    />
  );
};

export const Card = (props) => {
  return (
    <div className="absolute right-5 z-10 flex flex-col justify-start space-y-2 p-2 my-2 border-4 border-blue-400 bg-gray-100 shadow-lg">
      {props.children}
    </div>
  );
};

export function Error(props) {
  return <p className="text-red-500">{props.error}</p>;
}

export function SettingsLink() {
  return (
    <Link to="/settings/profile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        className="w-9 h-9 hover:fill-current hover:text-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </Link>
  );
}
