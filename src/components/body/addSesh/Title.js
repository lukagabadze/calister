import React from "react";
import { Input } from "./addSeshComponents";

function Title(props) {
  return (
    <div className="flex items-center pl-3 border-b-2 border-gray-300">
      <p className="">Title:</p>
      <Input
        name="Title"
        value={props.value}
        onChangeHandler={props.onChangeHandler}
      />
    </div>
  );
}

export default Title;
