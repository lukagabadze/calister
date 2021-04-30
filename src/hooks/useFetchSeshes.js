import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../api";

export default function useFetchSeshes(page, setPage, size) {
  const user = useSelector((state) => state.user);
  const [seshes, setSeshes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(async () => {
    window.scrollTo(0, 0);
    setSeshes([]);
    setPage(1);
    setRender(!render);
  }, [user]);

  useEffect(async () => {
    setLoading(true);
    const res = await api.getSeshes(user ? user._id : "", page, size);
    const fetchedSeshes = res.data.seshes;
    setLoading(false);
    setHasMore(fetchedSeshes.length > 0);
    setSeshes([...seshes, ...fetchedSeshes]);
  }, [page, render]);

  return { seshes, loading, hasMore };
}
