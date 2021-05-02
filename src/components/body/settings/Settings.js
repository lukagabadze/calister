import React from "react";
import { useSelector } from "react-redux";
import { Route, NavLink } from "react-router-dom";
import AccountSettings from "./accountSettings/AccountSettings";
import ProfileSettings from "./profileSettings/ProfileSettings";

function Settings() {
  const user = useSelector((state) => state.user);

  const activeClass =
    "border-r-2 border-black font-bold bg-gray-300 outline-none";

  return (
    <div className="bg-gray-100 w-full flex border-2 border-gray-300 rounded-md">
      <div className="text-sm sm:text-base bg-gray-200 flex flex-col w-1/5 text-center">
        <NavLink to="/settings/profile" activeClassName={activeClass}>
          Profile
        </NavLink>
        <NavLink to="/settings/security" activeClassName={activeClass}>
          Account
        </NavLink>
        <NavLink to="/settings/other" activeClassName={activeClass}>
          Other...
        </NavLink>
      </div>

      <div className="text-sm sm:text-base p-2">
        {user ? (
          <div>
            <Route path="/settings/profile" exact>
              <ProfileSettings user={user} />
            </Route>
            <Route path="/settings/security" exact>
              <AccountSettings />
            </Route>
            <Route path="/settings/other" exact>
              Not yet...
            </Route>
          </div>
        ) : (
          <p>Please login to use settings</p>
        )}
      </div>
    </div>
  );
}

export default Settings;
