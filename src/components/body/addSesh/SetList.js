import React from "react";
import { Input } from "./addSeshComponents";

function SetList(props) {
  const sets = props.sets;
  let setsJSX = [];
  sets.forEach((set, ind) => {
    setsJSX.push(
      <li className="px-2" key={ind}>
        <Input
          name={`Set ${ind + 1}`}
          onChangeHandler={(e) => props.onChangeHandler(ind, e.target.value)}
          value={props.set}
        />
      </li>
    );
  });
  // for (let i = 0; i < props.numberOfSets; i++) {
  // sets.push(
  //   <li className="px-2" key={i}>
  //     <Input
  //       name={`Set ${i + 1}`}
  //       onChangeHandler={(e) => props.onChangeHandler(i, e.target.value)}
  //       value={props.sets[i]}
  //     />
  //   </li>
  // );
  // }

  return (
    <div className="flex-none w-9/12 border-r-2 border-gray-300">
      <div className="space-x-2 ml-2 mt-2">
        <button
          type="button"
          className="w-10 px-2 py-1 border-2 rounded-md border-gray-700 hover:bg-gray-700 hover:text-white transition duration-100"
          onClick={props.addSeshHandler}
        >
          +
        </button>
        <button
          type="button"
          className="w-10 px-2 py-1 border-2 rounded-md border-red-600 hover:bg-red-600 hover:text-white transition duration-100"
          onClick={props.delSeshHandler}
        >
          -
        </button>
      </div>
      <ul className="list-disc list-inside">{setsJSX}</ul>
    </div>
  );
}

export default SetList;
