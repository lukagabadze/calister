import React from "react";
import { Route, NavLink } from "react-router-dom";
import ProfileSettings from "./profileSettings/ProfileSettings";

function Settings() {
  const activeClass =
    "border-r-2 border-black font-bold bg-gray-300 outline-none";

  return (
    <div className="bg-gray-100 w-full flex border-2 border-gray-300 rounded-md">
      <div className="bg-gray-200 flex flex-col w-1/5 text-center">
        <NavLink to="/settings/profile" activeClassName={activeClass}>
          Profile
        </NavLink>
        <NavLink to="/settings/security" activeClassName={activeClass}>
          Security
        </NavLink>
        <NavLink to="/settings/other" activeClassName={activeClass}>
          Other...
        </NavLink>
      </div>
      <div>
        <Route path="/settings/profile" exact>
          <ProfileSettings />
        </Route>
        <Route path="/settings/security" exact>
          Not yet...
        </Route>
        <Route path="/settings/other" exact>
          Not yet...
        </Route>
      </div>
    </div>
  );
}

export default Settings;
