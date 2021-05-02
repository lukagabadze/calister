import React, { useState } from "react";
import axios from "axios";
import SubmitButton from "../SubmitButton";
import Error from "../Error";

const initialForm = {
  password1: "",
  password2: "",
};
const initialErrors = {
  password1: "",
  password2: "",
};
const passwordMinLength = 6;

function AccountSettings() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState("");

  const formOnSubmitHandler = async (e) => {
    e.preventDefault();
    setErrors(initialErrors);
    const { password1, password2 } = form;
    if (password1 !== password2) {
      return setErrors({ password2: "Passwords must match" });
    }
    if (password1.length < passwordMinLength) {
      return setErrors({ password1: "Password too short" });
    }
    try {
      await axios.post(`http://localhost:4000/user/password`, {
        password1,
        password2,
      });
      setForm(initialForm);
      setErrors(initialErrors);
      setStatus("Password successfully changed!");
    } catch (err) {
      return setStatus("Failed to change the password!");
    }
  };

  const formChanged =
    form.password1 !== "" &&
    form.password1 === form.password2 &&
    form.password1.length >= passwordMinLength;

  return (
    <form className="flex flex-col space-y-6" onSubmit={formOnSubmitHandler}>
      <div className="">
        <p className="mb-3 border-b-2 border-black">Change Password</p>
        <div className="flex flex-col">
          <label htmlFor="password1">New password:</label>
          <input
            type="password"
            id="password1"
            className="border-2 border-black rounded-sm w-full truncate"
            value={form.password1}
            onChange={(e) => setForm({ ...form, password1: e.target.value })}
          />
          <Error message={errors.password1} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password2">Repeat password:</label>
          <input
            type="password"
            id="password1"
            className="border-2 border-black rounded-sm w-full truncate"
            value={form.password2}
            onChange={(e) => setForm({ ...form, password2: e.target.value })}
          />
          <Error message={errors.password2} />
        </div>
      </div>
      <div className="flex space-x-2">
        <SubmitButton formChanged={formChanged} />
        <p>{status}</p>
      </div>
    </form>
  );
}

export default AccountSettings;
