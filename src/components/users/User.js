import React from "react";
import { Link } from "react-router-dom";

function User({ user }) {
  const { _id, username, media, description, followers } = user;
  return (
    <Link to={`/profile/${_id}`}>
      <div className="border-b border-black p-2 hover:bg-gray-300 cursor-pointer">
        <div className="flex space-x-3">
          <div className="flex-none w-2/12 h-auto">
            <img
              src={`http://localhost:4000/${media}`}
              alt=""
              className="object-cover w-full h-full border border-black rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-3 truncate">
            <div>
              <p className="text-base">{username}</p>
              <p className="text-sm">Followers: {followers.length}</p>
            </div>
            <p className="truncate">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default User;
