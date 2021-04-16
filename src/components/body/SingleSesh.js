import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sesh from "./sesh/Sesh";

function SingleSesh() {
  const { seshId } = useParams();
  const [singleSesh, setSingleSesh] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/sesh/single/${seshId}`)
      .then((res) => {
        const sesh = res.data;
        setSingleSesh(sesh);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Sesh
        title={singleSesh.title}
        sets={singleSesh.sets}
        mediaUrl={singleSesh.media}
      />
    </div>
  );
}

export default SingleSesh;
