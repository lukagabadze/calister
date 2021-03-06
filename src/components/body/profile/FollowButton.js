import React from "react";
import api from "../../../api";

function FollowButton({ followed, user, setUser }) {
  const userId = user._id;
  const followButtonHandler = (userId) => {
    api.follow(userId).then((res) => {
      const followers = res.data.followers;
      setUser({ ...user, followers });
    });
  };

  const followedStyle = !followed
    ? "bg-gray-300 text-black hover:bg-gray-500 hover:text-white"
    : "bg-gray-500 text-white hover:bg-gray-300 hover:text-black";

  return (
    <div>
      <button
        className={`px-5  rounded-md ${followedStyle} border border-gray-400 transition duartion-75`}
        onClick={() => followButtonHandler(userId)}
      >
        {!followed ? "Follow" : "Unfollow"}
      </button>
    </div>
  );
}

export default FollowButton;
