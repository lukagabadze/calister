import React from "react";
import { Logo } from "../seshComponents";

function Comments({ text, username, media }) {
  return (
    <div className="flex space-x-1">
      <Logo mediaUrl={media} />
      <div className="bg-gray-400 p-1 border-2 border-black rounded-xl">
        <div>
          <div className="text-xs text-white">{username}</div>
          <div className="text-sm">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
