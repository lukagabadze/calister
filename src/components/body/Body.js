import React from "react";
import AddSesh from "./addSesh/AddSesh";
import SeshList from "./seshList/SeshList";

function Body() {
  return (
    <div className="w-7/12 flex flex-col items-center justify-center m-auto space-y-5 mt-5">
      <AddSesh />
      <SeshList />
    </div>
  );
}

export default Body;
