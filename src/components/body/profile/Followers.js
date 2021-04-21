import React from "react";

function Followers({ followers, following }) {
  return (
    <div className="flex space-x-5">
      <div>Followers: {followers}</div>
      <div>Following: {following}</div>
    </div>
  );
}

export default Followers;
