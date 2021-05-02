import React from "react";
import { Link } from "react-router-dom";
import Auth from "./auth/Auth";
import UserSearch from "./userSearch/UserSearch";

function Header() {
  return (
    <header className="px-5 lg:px-20 py-2 flex justify-between items-center space-x-4 bg-gray-600 sticky top-0">
      <Link to="/">
        <p className="text-white text-3xl sm:text-4xl md:text-5xl">Calister</p>
      </Link>
      <div className="w-5/12 hidden sm:block">
        <UserSearch />
      </div>
      <div className="flex-none text-sm">
        <Auth />
      </div>
    </header>
  );
}

export default Header;
