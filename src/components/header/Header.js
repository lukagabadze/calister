import React from "react";
import { Link } from "react-router-dom";
import ReduxStore from "../ReduxStore";
import Auth from "./auth/Auth";

function Header() {
  return (
    <div className="">
      <div className="flex justify-between p-3">
        <div className="flex">
          <ReduxStore />
          <Link to="/">
            <p className="ml-10 text-5xl">Calister</p>
          </Link>
        </div>
        <Auth />
      </div>
    </div>
  );
}

export default Header;
