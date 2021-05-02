import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/index";
import MainFeed from "./MainFeed";

function Body() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="p-2">
      <MainFeed />
    </div>
  );
}

export default Body;
