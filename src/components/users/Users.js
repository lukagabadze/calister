import React, { useState, useRef, useCallback } from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import User from "./User";

function Users({ query = "" }) {
  const [render, setRender] = useState(false);
  const { users, loading, hasMore } = useFetchUsers(query, render, setRender);

  const observer = useRef();
  const lastUserRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setRender(!render);
      }
    });
    if (node) observer.current.observe(node);
  });

  return (
    <div className="flex flex-col bg-gray-200 border-2 border-gray-400 ">
      {users.map((user, ind) => {
        if (ind === users.length - 1) {
          return (
            <div key={user._id} ref={lastUserRef}>
              <User user={user} />
            </div>
          );
        }
        return (
          <div key={user._id}>
            <User user={user} query={query} />
          </div>
        );
      })}
    </div>
  );
}

export default Users;
