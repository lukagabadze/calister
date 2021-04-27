import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UsernameSettings from "./UsernameSettings";
import ProfileImageSettings from "./ProfileImageSettings";
import DescriptionSettings from "./DescriptionSettings";
import SubmitButton from "../SubmitButton";

const initialForm = {
  username: "",
  file: null,
  description: "",
  mediaUrl: "",
};

function ProfileSettings() {
  const userId = useSelector((state) => (state.user ? state.user._id : null));
  const [user, setUser] = useState({});
  const [form, setForm] = useState(initialForm);

  useEffect(async () => {
    if (!userId) {
      setUser({});
      return;
    }
    try {
      const res = await axios.get(
        `http://localhost:4000/user/single/${userId}`
      );
      const user = res.data;
      setUser(user);
      setForm({
        username: user.username,
        mediaUrl: `http://localhost:4000/${user.media}`,
        description: user.description,
      });
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  const originalMediaUrl = `http://localhost:4000/${user.media}`;
  const formChanged =
    user.username === form.username &&
    !form.file &&
    user.description === form.description
      ? false
      : true;

  return (
    <div className="w-full h-full p-2">
      {userId ? (
        <form className="flex flex-col space-y-5 justify-between space-y-6">
          <UsernameSettings
            username={form.username}
            setFormHandler={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
          <ProfileImageSettings
            mediaUrl={form.mediaUrl}
            originalMediaUrl={originalMediaUrl}
            revertImage={() =>
              setForm({ ...form, file: null, mediaUrl: originalMediaUrl })
            }
            onChangeHandler={(e) => {
              const file = e.target.files[0];
              const mediaUrl = URL.createObjectURL(file);
              setForm({ ...form, file, mediaUrl });
            }}
          />
          <DescriptionSettings
            description={form.description}
            onChangeHandler={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
          <SubmitButton formChanged={formChanged} />
        </form>
      ) : (
        <div>Please login to use settings</div>
      )}
    </div>
  );
}

export default ProfileSettings;
