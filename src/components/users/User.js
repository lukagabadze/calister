import React from "react";
import { Link } from "react-router-dom";

function User({ user, query = "" }) {
  const { _id, username, media, description, followers } = user;

  const usernameHandler = (username, query) => {
    const ind = username.indexOf(query);
    if (ind === -1) return username;

    const start = username.slice(0, ind);
    const match = <span className="text-red-400">{query}</span>;
    const end = username.slice(ind + query.length, username.length);

    return (
      <p>
        {start}
        {match}
        {end}
      </p>
    );
  };

  return (
    <Link to={`/profile/${_id}`}>
      <div className="text-black border-b border-black p-2 hover:bg-gray-300 cursor-pointer">
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
              <p className="text-base">{usernameHandler(username, query)}</p>
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
