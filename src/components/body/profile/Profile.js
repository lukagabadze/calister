import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FollowButton from "./FollowButton";
import ProfileImage from "./ProfileImage";
import Username from "./Username";
import Followers from "./Followers";
import Description from "./Description";
import ProfileSeshes from "./ProfileSeshes";

function Profile() {
  const { userId } = useParams();
  const author = useSelector((state) => state.user);
  const [user, setUser] = useState({});
  const [followed, setFollowed] = useState(false);

  useEffect(async () => {
    try {
      const userRes = await axios.get(
        `http://localhost:4000/user/single/${userId}`
      );
      const fetchedUser = userRes.data;
      setUser(fetchedUser);
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  useEffect(() => {
    setFollowed(
      Object.entries(user).length !== 0 && author
        ? user.followers.indexOf(author._id) !== -1
        : false
    );
  }, [user, author]);

  return (
    <div className="w-full flex flex-col space-y-20">
      <div className="flex flex-col space-y-2 w-full bg-gray-100 rounded-2xl border-2 border-gray-200 p-2">
        <div className="flex space-x-6">
          <div className="flex-none">
            <ProfileImage mediaUrl={user.media} />
          </div>
          <div className="flex flex-col space-y-3">
            <Username username={user.username} />
            <Followers followers={user.followers} following={user.following} />
            <FollowButton followed={followed} user={user} setUser={setUser} />
            <div className="hidden sm:block">
              <Description description={user.description} />
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <Description description={user.description} />
        </div>
      </div>
      <ProfileSeshes />
    </div>
  );
}

export default Profile;
