import React from "react";
import { Link } from "react-router-dom";
import Auth from "./auth/Auth";

function Header() {
  return (
    <header className="bg-gray-600 sticky top-0">
      <div className="flex justify-between p-3">
        <div className="flex text-white">
          <Link to="/">
            <p className="ml-10 text-5xl">Calister</p>
          </Link>
        </div>
        <Auth />
      </div>
    </header>
  );
}

export default Header;
