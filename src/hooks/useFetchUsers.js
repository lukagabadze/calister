import { useState, useEffect } from "react";
import axios from "axios";

const size = 3;

export default function useFetchUsers(query, page, size, fetch) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let cancel;
    setLoading(true);
    axios
      .get(
        `http://localhost:4000/user/search/?query=${query}&page=${page}&size=${size}`,
        { cancelToken: new axios.CancelToken((c) => (cancel = c)) }
      )
      .then((res) => {
        const fetchedUsers = res.data.users;
        setUsers(page === 1 ? fetchedUsers : [...users, ...fetchedUsers]);
        setLoading(false);
        setHasMore(fetchedUsers.length > 0);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
      });

    return () => cancel();
  }, [page, fetch]);

  return { users, loading, hasMore };
}
