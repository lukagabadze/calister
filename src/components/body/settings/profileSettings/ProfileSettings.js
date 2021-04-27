import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../../../redux/index";
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [form, setForm] = useState(initialForm);

  useEffect(async () => {
    if (!user) {
      return;
    }
    setForm({
      username: user.username,
      mediaUrl: `http://localhost:4000/${user.media}`,
      description: user.description,
    });
  }, [user]);

  const originalMediaUrl = user ? `http://localhost:4000/${user.media}` : null;
  const formChanged =
    user &&
    user.username === form.username &&
    !form.file &&
    user.description === form.description
      ? false
      : true;

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formChanged) return;

    const { username, file, description } = form;
    const data = new FormData();
    data.append("username", username);
    data.append("file", file);
    data.append("description", description);
    try {
      const res = await axios.post(`http://localhost:4000/user/edit`, data);
      const newUser = res.data;
      setForm({
        username: newUser.username,
        file: null,
        description: newUser.description,
        mediaUrl: `http://localhost:4000/${newUser.media}`,
      });
      dispatch(fetchUser());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full p-2">
      {user ? (
        <form
          className="flex flex-col space-y-5 justify-between space-y-6"
          onSubmit={formSubmitHandler}
        >
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
