import React from "react";

function ProfileImage({ mediaUrl }) {
  return (
    <img
      className="object-cover rounded-full border border-black"
      src={`${process.env.REACT_APP_API_URL}/${mediaUrl}`}
      alt=""
    />
  );
}

export default ProfileImage;
