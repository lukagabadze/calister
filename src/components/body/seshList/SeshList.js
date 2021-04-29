import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Sesh from "../sesh/Sesh";
import api from "../../../api";

function SeshList(props) {
  const user = useSelector((state) => state.user);
  useEffect(async () => {
    try {
      const res = await api.getSeshes(user ? user._id : "");
      const seshes = res.data.seshes;
      props.setSeshes(seshes);
      window.scrollTo(0, 0);
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  const seshes = props.seshes;
  let seshList = [];
  seshes.forEach((sesh) => {
    seshList.push(
      <div
        key={sesh._id}
        className="w-full border-4 rounded-xl hover:border-black transition duration-100"
      >
        <Sesh sesh={sesh} />
      </div>
    );
  });

  return seshes.length ? (
    seshList
  ) : (
    <div className="text-2xl">Please follow some users</div>
  );
}

export default SeshList;
