import React from "react";
import { Input, Error } from "./addSeshComponents";

function Title(props) {
  return (
    <div className="pl-3 border-b-2 border-gray-300">
      <div className="flex items-center">
        <p className="">Title:</p>
        <Input
          name="Title"
          value={props.value}
          onChangeHandler={props.onChangeHandler}
        />
      </div>
      <Error error={props.error} />
    </div>
  );
}

export default Title;
