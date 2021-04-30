import React from "react";
import { Link } from "react-router-dom";
import Auth from "./auth/Auth";
import UserSearch from "./userSearch/UserSearch";

function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-600 sticky top-0 px-10 p-4">
      <Link to="/">
        <p className="text-white text-5xl">Calister</p>
      </Link>
      <div className="w-5/12">
        <UserSearch />
      </div>
      <div className="flex-none">
        <Auth />
      </div>
    </header>
  );
}

export default Header;
