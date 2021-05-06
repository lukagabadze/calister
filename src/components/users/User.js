import React from "react";
import { Link } from "react-router-dom";

function User({ user, query = "", descriptionHidden = false }) {
  const { _id, username, media, description, followers } = user;

  const usernameHandler = (username, query) => {
    const lowerUsername = username.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const ind = lowerUsername.indexOf(lowerQuery);
    if (ind === -1) return username;

    const start = username.slice(0, ind);
    const match = (
      <span className="text-red-400">
        {username.slice(ind, ind + query.length)}
      </span>
    );
    const end = username.slice(ind + query.length, username.length);

    return (
      <p className="truncate">
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
          <div className="flex-none flex w-2/12 h-auto">
            <img
              src={`${process.env.REACT_APP_API_URL}/image/${media}`}
              alt=""
              className="object-cover w-full border border-black rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-3 truncate">
            <div>
              <div className="text-base">
                {usernameHandler(username, query)}
              </div>
              <p className="text-sm">Followers: {followers.length}</p>
            </div>
            <p
              className={`truncate lg:block ${
                descriptionHidden ? "hidden" : null
              } `}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default User;
