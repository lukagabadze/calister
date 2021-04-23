import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Sesh from "../sesh/Sesh";

function ProfileSeshes() {
  const { userId } = useParams();
  const [seshes, setSeshes] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/user/seshes/${userId}`
      );
      const fetchedSeshes = res.data.seshes;
      setSeshes(fetchedSeshes);
      window.scrollTo(0, 0);
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  let seshList = [];
  seshes.forEach((sesh) => {
    seshList.push(
      <div
        key={sesh._id}
        className="w-full border-4 rounded-xl hover:border-black transition duration-100"
      >
        {/* <Link to={`/sesh/${sesh._id}`}> */}
        <Sesh sesh={sesh} />
        {/* </Link> */}
      </div>
    );
  });

  return seshList;
}

export default ProfileSeshes;
