import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../seshComponents";

function Comments({ text, username, media, authorId }) {
  return (
    <div className="flex space-x-1">
      <div className="flex-none">
        <Link to={`/profile/${authorId}`}>
          <Logo media={media} />
        </Link>
      </div>
      <div className="bg-gray-400 p-1 border-2 border-black rounded-xl truncate">
        <Link to={`/profile/${authorId}`}>
          <div className="text-xs underline text-white">{username}</div>
        </Link>
        <div className="text-sm truncate">{text}</div>
      </div>
    </div>
  );
}

export default Comments;
