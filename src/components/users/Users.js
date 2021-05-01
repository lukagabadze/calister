import React, { useState, useEffect, useRef, useCallback } from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import User from "./User";

const size = 3;

function Users({ query = "" }) {
  const [fetch, setFetch] = useState(false);
  const [page, setPage] = useState(1);
  const { users, loading, hasMore } = useFetchUsers(query, page, size, fetch);

  useEffect(() => {
    setPage(1);
    setFetch(!fetch);
  }, [query]);

  const observer = useRef();
  const lastUserRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(page + 1);
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
