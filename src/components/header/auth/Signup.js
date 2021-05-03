import React, { useState } from "react";
import { Card, Button, Input, Error } from "./AuthComponents";
import { signupHandler } from "./AuthHandlers";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../redux/index";

function Signup(props) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    password2: "",
  });

  return (
    <div>
      <Button active={!props.hidden} onClickHandler={props.setHidden}>
        Signup
      </Button>
      <form
        className={props.hidden ? "hidden" : null}
        onSubmit={async (e) => {
          e.preventDefault();
          setErrors({});
          if (form.password !== form.password2) {
            setErrors({ password2: "Passwords do not match" });
            return;
          }
          try {
            console.log("gabo was here");
            await signupHandler(form);
            await dispatch(fetchUser());
          } catch (err) {
            setErrors(err.error);
          }
        }}
      >
        <Card>
          <p className="text-xl font-bold">Signup</p>
          <Input
            placeholder="Username"
            type="text"
            onChangeHandler={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            value={form.username}
          />
          <Error error={errors.username} />

          <Input
            placeholder="Password"
            type="password"
            onChangeHandler={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            value={form.password}
          />
          <Error error={errors.password} />

          <Input
            placeholder="Repeat password"
            type="password"
            onChangeHandler={(e) =>
              setForm({ ...form, password2: e.target.value })
            }
            value={form.password2}
          />
          <Error error={errors.password2} />

          <Button type="submit">Submit</Button>
        </Card>
      </form>
    </div>
  );
}

export default Signup;
