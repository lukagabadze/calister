import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import { SettingsLink } from "./AuthComponents";
import { useSelector } from "react-redux";

function Auth() {
  const user = useSelector((state) => state.user);

  const [hidden, setHidden] = useState({ login: true, signup: true });

  return (
    <div className="">
      {!user ? (
        <div className="flex items-center space-x-5">
          <Login
            hidden={hidden.login}
            setHidden={() => setHidden({ login: !hidden.login, signup: true })}
          />
          <Signup
            hidden={hidden.signup}
            setHidden={() => setHidden({ signup: !hidden.signup, login: true })}
          />
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <p className="text-lg text-white">Hello, {user.username}</p>
          <SettingsLink />
          <Logout />
        </div>
      )}
    </div>
  );
}

export default Auth;
