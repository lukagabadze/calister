import { useState, useEffect } from "react";
import axios from "axios";

const size = 3;

export default function useFetchUsers(query, render, setRender) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(1);
    setUsers([]);
    setRender(!render);
  }, [query]);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:4000/user/search/?query=${query}&page=${page}&size=${size}`
    );
    const fetchedUsers = res.data.users;
    setUsers([...users, ...fetchedUsers]);
    setLoading(false);
    setHasMore(fetchedUsers.length > 0);
    setPage(page + 1);
  }, [render]);

  return { users, loading, hasMore };
}
