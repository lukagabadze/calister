import React, { useState, useEffect } from "react";
import api from "../../../../api";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../../redux/index";
import UsernameSettings from "./UsernameSettings";
import ProfileImageSettings from "./ProfileImageSettings";
import DescriptionSettings from "./DescriptionSettings";
import SubmitButton from "../SubmitButton";

const apiUrl = process.env.REACT_APP_API_URL;

const initialForm = {
  username: "",
  file: null,
  description: "",
  mediaUrl: "",
};

function ProfileSettings(props) {
  const dispatch = useDispatch();
  const user = props.user;
  const [form, setForm] = useState(initialForm);

  useEffect(async () => {
    if (!user) {
      return;
    }
    setForm({
      username: user.username,
      mediaUrl: `${apiUrl}/image/${user.media}`,
      description: user.description,
    });
  }, [user]);

  const originalMediaUrl = user ? `${apiUrl}/image/${user.media}` : null;
  const formChanged =
    user &&
    user.username === form.username &&
    !form.file &&
    user.description === form.description
      ? false
      : true;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formChanged) return;

    const { username, file, description } = form;
    const body = new FormData();
    body.append("username", username);
    body.append("file", file);
    body.append("description", description);

    api.editProfile(body).then((res) => {
      const newUser = res.data;
      setForm({
        username: newUser.username,
        file: null,
        description: newUser.description,
        mediaUrl: `${apiUrl}/image/${newUser.media}`,
      });
      dispatch(fetchUser());
    });
  };

  return (
    <form
      className="flex flex-col space-y-5 justify-between space-y-6"
      onSubmit={formSubmitHandler}
    >
      <UsernameSettings
        username={form.username}
        setFormHandler={(e) => setForm({ ...form, username: e.target.value })}
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
  );
}

export default ProfileSettings;
