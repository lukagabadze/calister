import React from "react";
import { Route, Switch } from "react-router-dom";
import AddSesh from "./addSesh/AddSesh";
import SeshList from "./seshList/SeshList";
import SingleSesh from "./SingleSesh";
import Profile from "./profile/Profile";
import Settings from "./settings/Settings";
import UserSearch from "../header/userSearch/UserSearch";

function MainFeed() {
  return (
    <div className="lg:w-7/12 flex flex-col items-center justify-center m-auto space-y-5 mt-5">
      <Switch>
        <Route path="/" exact>
          <div className="border-2 border-gray-600 rounded-md text-black block sm:hidden">
            <UserSearch />
          </div>
          <AddSesh />
          <SeshList />
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
