import React from "react";
import axios from "axios";

function FollowButton({ followed, user, setUser }) {
  const userId = user._id;
  const followButtonHandler = async (userId) => {
    try {
      const body = {
        userId,
      };
      const res = await axios.post("http://localhost:4000/user/follow", body);
      const followers = res.data.followers;
      setUser({ ...user, followers });
    } catch (err) {
      console.log(err);
    }
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
