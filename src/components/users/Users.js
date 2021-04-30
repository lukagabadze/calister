import React, { useState } from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import User from "./User";

function Users() {
  const { users, loading, hasMore } = useFetchUsers("");

  return (
    <div className="flex flex-col bg-gray-200 border-2 border-gray-400 ">
      {users.map((user) => {
        // user.description = null;
        return <User user={user} />;
      })}
    </div>
  );
}

export default Users;
