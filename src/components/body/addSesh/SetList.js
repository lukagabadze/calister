import React from "react";
import { Input } from "./addSeshComponents";

function SetList(props) {
  let sets = [];
  for (let i = 0; i < props.numberOfSets; i++) {
    sets.push(
      <li className="px-2" key={i}>
        <Input
          name={`Set ${i + 1}`}
          onChangeHandler={(e) => props.onChangeHandler(i, e.target.value)}
          value={props.sets[i]}
        />
      </li>
    );
  }

  // console.log("SET LIST:");
  // console.log(props.sets);

  return (
    <div className="flex-none w-9/12 border-r-2 border-gray-300">
      <button
        className="border-2 border-gray-400 px-2 py-1 m-2 text-gray-400 hover:bg-gray-400 hover:text-white duration-100 rounded-md"
        onClick={props.addSeshHandler}
      >
        Add a set
      </button>
      <ul className="list-disc list-inside">{sets}</ul>
    </div>
  );
}

export default SetList;
