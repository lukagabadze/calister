import React from "react";

function Description({ description }) {
  return (
    <div className="h-full ">
      <p className="text-sm font-bold">Description:</p>
      <p className="w-full h-full overflow-auto">{description}</p>
    </div>
  );
}

export default Description;
