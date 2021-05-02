import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import useFetchSeshes from "../../../hooks/useFetchSeshes";
import Sesh from "../sesh/Sesh";
import Users from "../../users/Users";

const defaultPage = 1;
const size = 3;

function SeshList() {
  const user = useSelector((state) => state.user);
  const [page, setPage] = useState(defaultPage);
  const [fetch, setFetch] = useState(false);
  const { seshes, loading, hasMore } = useFetchSeshes(page, size, fetch);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(1);
    setFetch(!fetch);
  }, [user]);

  const observer = useRef();
  const lastSeshRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(page + 1);
      }
    });
    if (node) observer.current.observe(node);
  });

  let seshList = [];
  seshes.forEach((sesh, ind) => {
    if (ind === seshes.length - 1) {
      return seshList.push(
        <div
          key={sesh._id}
          ref={lastSeshRef}
          className="w-full border-4 rounded-xl hover:border-black transition duration-100"
        >
          <Sesh sesh={sesh} />
        </div>
      );
    }
    seshList.push(
      <div
        key={sesh._id}
        className="w-full border-4 rounded-xl hover:border-black transition duration-100"
      >
        <Sesh sesh={sesh} />
      </div>
    );
  });

  return seshes.length === 0 && !loading ? (
    <div className="w-full flex flex-col space-y-5">
      <div className="text-2xl text-center">Please follow some users</div>
      <Users />
    </div>
  ) : (
    <div className="w-full flex flex-col space-y-5">
      {seshList}
      {loading ? <div className="text-center text-2xl">Loading...</div> : null}
    </div>
  );
}

export default SeshList;
