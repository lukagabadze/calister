import React, { useState } from "react";
import SearchLabel from "./SearchLabel";
import Users from "../../users/Users";
import CancelSearch from "./CancelSearch";

function UserSearch() {
  const [query, setQuery] = useState("");
  const [usersHidden, setUsersHidden] = useState(true);

  return (
    <div className=" relative">
      <div className="flex space-x-3 items-center border-b-2 border-white">
        <div className="flex-none">
          <SearchLabel />
        </div>
        <input
          id="search"
          type="text"
          placeholder="Search for users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setUsersHidden(false)}
          className="w-full truncate bg-transparent p-1 placeholder-gray-400 outline-none"
        />
        <div className="flex-none">
          <CancelSearch
            hidden={usersHidden}
            onClickHandler={() => {
              setQuery("");
              setUsersHidden(true);
            }}
          />
        </div>
      </div>
      <div
        className={`w-full absolute h-60 overflow-y-auto border-2 border-black mt-1 bg-gray-400 ${
          usersHidden ? "hidden" : null
        }`}
        onClick={() => {
          setQuery("");
          setUsersHidden(true);
        }}
      >
        <Users query={query} descriptionHidden={true} />
      </div>
    </div>
  );
}

export default UserSearch;
