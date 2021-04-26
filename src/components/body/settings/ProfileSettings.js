import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const initialForm = {
  username: "",
  mediaUrl: "",
  file: null,
  description: "",
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

  // console.log(user.description);

  const formChanged =
    user.username === form.username &&
    !form.file &&
    user.description === form.description
      ? false
      : true;

  return (
    <div className="w-full h-full p-2">
      {userId ? (
        <form className="w-full h-full flex flex-col space-y-5 justify-between">
          <div className="flex flex-col space-y-6">
            <div className="flex space-x-2">
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                className="border-2 border-black rounded-sm"
                placeholder="Username..."
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
            </div>
            <div className="flex flex-col">
              <p className="mb-2 border-b-2 border-black">Profile picture:</p>
              <label htmlFor="image" className="w-32 cursor-pointer">
                <img
                  className="border-2 border-black mt-2 rounded-md hover:opacity-50"
                  src={form.mediaUrl}
                  alt=""
                />
              </label>
              <input
                type="file"
                id="image"
                className="w-0 h-0 opacity-0"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const mediaUrl = URL.createObjectURL(file);
                  setForm({ ...form, file, mediaUrl });
                }}
              />
            </div>
            <div>
              <p>Description:</p>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full h-28 text-sm resize-none border-2 border-black rounded-sm"
              />
            </div>
          </div>
          <button
            className={`w-min px-3 border-2 border-black rounded-md ${
              formChanged
                ? "bg-green-400 hover:bg-green-300"
                : "bg-gray-300 opacity-50 cursor-default"
            }`}
            type="submit"
          >
            Save
          </button>
        </form>
      ) : (
        <div>Please login to use settings</div>
      )}
    </div>
  );
}

export default ProfileSettings;
