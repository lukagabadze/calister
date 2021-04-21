import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProfileImage from "./ProfileImage";
import Username from "./Username";
import Followers from "./Followers";
import FollowButton from "./FollowButton";
import Description from "./Description";

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/user/single/${userId}`
      );
      const fetchedUser = res.data;
      setUser(fetchedUser);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="w-full bg-gray-100 rounded-2xl border-2 border-gray-200 p-2">
      <div className="flex space-x-6">
        <ProfileImage mediaUrl={user.media} />
        <div className="flex flex-col space-y-3">
          <Username username={user.username} />
          <Followers followers={421} following={94} />
          <FollowButton userId={userId} />
          <Description description={user.description} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
