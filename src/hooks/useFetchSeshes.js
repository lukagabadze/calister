import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../api";

export default function useFetchSeshes(page, size, fetch) {
  const user = useSelector((state) => state.user);
  const [seshes, setSeshes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await api.getSeshes(user ? user._id : "", page, size);
    const fetchedSeshes = res.data.seshes;
    setLoading(false);
    setHasMore(fetchedSeshes.length > 0);
    setSeshes(page === 1 ? fetchedSeshes : [...seshes, ...fetchedSeshes]);
  }, [page, fetch]);

  return { seshes, loading, hasMore };
}
