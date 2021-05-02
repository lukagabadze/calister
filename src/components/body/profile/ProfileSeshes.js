import React, { useState, useEffect } from "react";
import api from "../../../api";
import { useParams } from "react-router-dom";
import Sesh from "../sesh/Sesh";

function ProfileSeshes() {
  const { userId } = useParams();
  const [seshes, setSeshes] = useState([]);

  useEffect(() => {
    api.getProfileSeshes(userId).then((res) => {
      const fetchedSeshes = res.data.seshes;
      setSeshes(fetchedSeshes);
      window.scrollTo(0, 0);
    });
  }, [userId]);

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

  return seshList;
}

export default ProfileSeshes;
