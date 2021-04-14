import React from "react";
import { Title, Sets, Image } from "./seshComponents";

function Sesh({ title, sets, mediaUrl }) {
  return (
    <div className="flex flex-col border-2 border-gray-500 bg-gray-300 rounded-lg">
      <Title title={title} />
      <div className="flex">
        <ul className="w-full space-y-3 p-2 border-r-2 border-black list-disc list-inside">
          <Sets sets={sets} />
        </ul>
        {mediaUrl ? (
          <div className="flex-none w-3/12 flex items-center  bg-gray-200">
            <Image mediaUrl={mediaUrl} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Sesh;
