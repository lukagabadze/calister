import React from "react";

function Followers({ followers = [], following = [] }) {
  return (
    <div>
      <div className="flex space-x-5">
        <div>Followers: {followers.length}</div>
        <div>Following: {following.length}</div>
      </div>
    </div>
  );
}

export default Followers;
