import React, { useState } from "react";
import SearchLabel from "./SearchLabel";
import Users from "../../users/Users";

function UserSearch() {
  const [query, setQuery] = useState("");
  const [usersHidden, setUsersHidden] = useState(true);

  return (
    <div className="text-white relative">
      <div className="flex space-x-3 items-center border-b-2 border-white">
        <SearchLabel />
        <input
          id="search"
          type="text"
          placeholder="Search for users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setUsersHidden(false)}
          onBlur={() => setUsersHidden(true)}
          className="flex-grow bg-gray-600 p-1 placeholder-gray-300"
        />
      </div>
      <div
        className={`w-full absolute h-60 overflow-y-auto border-2 border-black mt-1 bg-gray-400 ${
          usersHidden ? "hidden" : null
        }`}
      >
        <Users query={query} />
      </div>
    </div>
  );
}

export default UserSearch;
