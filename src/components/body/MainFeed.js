import React, { useState } from "react";
import AddSesh from "./addSesh/AddSesh";
import SeshList from "./seshList/SeshList";

function MainFeed() {
  const [seshes, setSeshes] = useState([]);

  return (
    <div className="w-7/12 flex flex-col items-center justify-center m-auto space-y-5 mt-5">
      <AddSesh seshes={seshes} setSeshes={setSeshes} />
      <SeshList seshes={seshes} setSeshes={setSeshes} />
    </div>
  );
}

export default MainFeed;
