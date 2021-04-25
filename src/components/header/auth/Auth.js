import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import { useSelector } from "react-redux";

function Auth() {
  const user = useSelector((state) => state.user);

  const [hidden, setHidden] = useState({ login: true, signup: true });

  let content = (
    <div className="flex items-center space-x-10 mr-24">
      <Login
        hidden={hidden.login}
        setHidden={() => setHidden({ login: !hidden.login, signup: true })}
      />
      <Signup
        hidden={hidden.signup}
        setHidden={() => setHidden({ signup: !hidden.signup, login: true })}
      />
    </div>
  );

  if (user !== null) {
    content = (
      <div className="flex items-center space-x-3 mr-12">
        <p className="text-xl text-white">Hello, {user.username}</p>
        <Logout />
      </div>
    );
  }

  return content;
}

export default Auth;
