import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sesh from "./sesh/Sesh";

function SingleSesh() {
  const { seshId } = useParams();
  const [singleSesh, setSingleSesh] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/sesh/single/${seshId}`)
      .then((res) => {
        const sesh = res.data;
        setSingleSesh(sesh);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full">
      {loading ? (
        <p className="text-3xl text-center">Loading...</p>
      ) : (
        <Sesh
          id={singleSesh._id}
          title={singleSesh.title}
          sets={singleSesh.sets}
          mediaUrl={singleSesh.media}
          comments={singleSesh.comments}
        />
      )}
    </div>
  );
}

export default SingleSesh;
