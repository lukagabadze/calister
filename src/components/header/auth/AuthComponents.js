import React from "react";

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
    <div className="max-w-xs absolute z-50 transform -translate-x-36 flex flex-col justify-start space-y-2 p-2 my-2 border-4 border-blue-400 bg-gray-100 shadow-lg">
      {props.children}
    </div>
  );
};

export function Error(props) {
  return <p className="text-red-500">{props.error}</p>;
}
