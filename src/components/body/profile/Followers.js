import React from "react";

function Followers({ followers = [], following = [] }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:space-x-5 text-sm ">
        <div>Followers: {followers.length}</div>
        <div>Following: {following.length}</div>
      </div>
    </div>
  );
}

export default Followers;
