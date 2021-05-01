import React from "react";

function ProfileImage({ mediaUrl }) {
  return (
    <img
      className="w-52 h-52 object-cover rounded-full border border-black"
      src={`http://localhost:4000/${mediaUrl}`}
      alt=""
    />
  );
}

export default ProfileImage;
