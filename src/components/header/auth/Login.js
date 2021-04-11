import React, { useState } from "react";
import { Card, Button, Input, Error } from "./AuthComponents";
import { loginHandler } from "./AuthHandlers";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../redux/index";

function Login(props) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  return (
    <div>
      <Button active={!props.hidden} onClickHandler={props.setHidden}>
        Login
      </Button>
      <form
        className={props.hidden ? "hidden" : null}
        onSubmit={async (e) => {
          e.preventDefault();
          setErrors({});
          try {
            await loginHandler(form);
            await dispatch(fetchUser());
            console.log("succesfully logged in");
          } catch (err) {
            setErrors(err.error);
          }
        }}
      >
        <Card>
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

          <Button type="submit">Submit</Button>
        </Card>
      </form>
    </div>
  );
}

export default Login;
