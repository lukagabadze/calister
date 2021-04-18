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
      <div
        key={sesh._id}
        className="w-full border-4 rounded-xl hover:border-black transition duration-100"
      >
        <Link to={`/sesh/${sesh._id}`}>
          <Sesh
            id={sesh._id}
            title={sesh.title}
            sets={sesh.sets}
            mediaUrl={sesh.media}
            comments={sesh.comments}
          />
        </Link>
      </div>
    );
  });

  return seshList;
  // return <div className="flex flex-col space-y-4">{seshList}</div>;
}

export default SeshList;
