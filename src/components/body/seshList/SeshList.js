import React, { useState, useEffect } from "react";
import Sesh from "./sesh/Sesh";
import api from "../../../api";

function SeshList() {
  const [seshes, setSeshes] = useState([]);

  useEffect(async () => {
    try {
      const res = await api.getSeshes();
      const seshes = res.data.seshes;
      setSeshes(seshes);
      console.log(seshes);
    } catch (err) {
      console.log(err);
    }
  }, []);

  let seshList = [];
  for (let i = 0; i < seshes.length; i++) {
    seshList.push(
      <Sesh
        key={seshes[i]._id}
        title={seshes[i].title}
        sets={seshes[i].sets}
        mediaUrl={seshes[i].media}
      />
    );
  }

  return <div className="w-full space-y-2">{seshList}</div>;
}

export default SeshList;
