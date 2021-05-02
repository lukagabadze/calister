import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Sesh from "./sesh/Sesh";

function SingleSesh() {
  const { seshId } = useParams();
  const [singleSesh, setSingleSesh] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getSingleUser(seshId).then((res) => {
      const sesh = res.data;
      setSingleSesh(sesh);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full">
      {loading !== null ? (
        <p className="text-3xl text-center">Loading...</p>
      ) : (
        <Sesh sesh={singleSesh} />
      )}
    </div>
  );
}

export default SingleSesh;
