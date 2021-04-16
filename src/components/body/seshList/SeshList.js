import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sesh from "../sesh/Sesh";
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
      <Link to={`/sesh/${sesh._id}`}>
        <Sesh
          key={sesh._id}
          title={sesh.title}
          sets={sesh.sets}
          mediaUrl={sesh.media}
        />
      </Link>
    );
  });

  return <div className="flex flex-col space-y-4">{seshList}</div>;
}

export default SeshList;
