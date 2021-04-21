import React from "react";

function FollowButton() {
  return (
    <div>
      <button
        className="px-3 rounded-md bg-gray-300 border border-gray-400 hover:bg-gray-500 hover:text-white transition duartion-75"
        onClick={() => alert("not yet")}
      >
        Follow
      </button>
    </div>
  );
}

export default FollowButton;
