import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/index";
import MainFeed from "./MainFeed";

function Body() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return <MainFeed />;
}

export default Body;
