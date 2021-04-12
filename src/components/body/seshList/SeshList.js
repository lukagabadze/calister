import React, { useState, useEffect } from "react";
import Sesh from "./sesh/Sesh";
import api from "../../../api";

function SeshList(props) {
  useEffect(async () => {
    try {
      const res = await api.getSeshes();
      const seshes = res.data.seshes;
      props.setSeshes(seshes);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const seshes = props.seshes;
  let seshList = [];
  seshes.forEach((sesh) => {
    seshList.push(
      <Sesh
        key={sesh._id}
        title={sesh.title}
        sets={sesh.sets}
        mediaUrl={sesh.media}
      />
    );
  });

  return <div className="w-full space-y-2">{seshList}</div>;
}

export default SeshList;
