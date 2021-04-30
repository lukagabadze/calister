import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchUsers(query) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:4000/user/search/?query=${query}`
    );
    setLoading(false);
    const fetchedUsers = res.data.users;
    setUsers(fetchedUsers);
  }, [query]);

  return { users, loading, hasMore };
}
