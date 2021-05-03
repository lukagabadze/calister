import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AddSesh from "./addSesh/AddSesh";
import SeshList from "./seshList/SeshList";
import SingleSesh from "./SingleSesh";
import Profile from "./profile/Profile";
import Settings from "./settings/Settings";
import UserSearch from "../header/userSearch/UserSearch";

function MainFeed() {
  const [seshes, setSeshes] = useState([]);

  return (
    <div className="lg:w-7/12 flex flex-col items-center justify-center m-auto space-y-5 mt-5">
      <Switch>
        <Route path="/" exact>
          <div className="border-2 border-gray-600 rounded-md text-black block sm:hidden">
            <UserSearch />
          </div>
          <AddSesh seshes={seshes} setSeshes={setSeshes} />
          <SeshList seshes={seshes} setSeshes={setSeshes} />
        </Route>
        <Route path="/sesh/:seshId" exact>
          <SingleSesh />
        </Route>
        <Route path="/profile/:userId" exact>
          <Profile />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default MainFeed;
