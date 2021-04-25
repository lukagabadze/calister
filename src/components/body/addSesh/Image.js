import React from "react";
import { PlusSvg } from "./addSeshComponents";

const acceptedTypes = ["image/png", "image/jpg", "image/jpeg"];

function Image(props) {
  return (
    <div className="flex-grow flex items-center justify-center m-2 cursor-pointer border-2 border-dashed border-black hover:opacity-60 hover:border-gray-400 hover:text-white bg-gray-300 hover:bg-gray-500 duration-200">
      <label
        htmlFor="file"
        className="flex justify-center items-center h-full w-full cursor-pointer p-1"
      >
        {props.fileUrl ? (
          <img
            className="border-2 border-black rounded-xl"
            src={props.fileUrl}
            alt=""
          />
        ) : (
          <PlusSvg />
        )}
      </label>
      <input
        type="file"
        id="file"
        accept={acceptedTypes.toString()}
        className="w-0 h-0 opacity-0"
        onChange={props.onChangeHandler}
      />
    </div>
  );
}

export default Image;
