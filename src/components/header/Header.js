import React from "react";
import { Link } from "react-router-dom";
import Auth from "./auth/Auth";
import UserSearch from "./userSearch/UserSearch";

function Header() {
  return (
    <header className="z-10 px-5 sticky top-0 lg:px-20 py-2 flex justify-between items-center space-x-4 bg-gray-600">
      <Link to="/">
        <p className="text-white text-xl xs:text-2xl sm:text-3xl md:text-5xl">
          Calister
        </p>
      </Link>
      <div className="w-5/12 text-white hidden sm:block">
        <UserSearch />
      </div>
      <div className="flex-none text-sm">
        <Auth />
      </div>
    </header>
  );
}

export default Header;
