import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Comments from "./comments/Comments";
import { Title, Sets, Image, Heart } from "./seshComponents";

function Sesh({ sesh }) {
  const { _id, title, sets, media, comments, hearts } = sesh;
  const user = useSelector((state) => state.user);
  const [hearted, setHearted] = useState(false);

  useEffect(() => {
    setHearted(user ? hearts.indexOf(user._id) !== -1 : false);
  }, [hearts]);

  return (
    <div className="flex flex-col border-2 border-gray-500 bg-gray-200 rounded-lg">
      <div className="flex border-b-2 border-black">
        {user ? (
          <Heart seshId={_id} hearted={hearted} setHearted={setHearted} />
        ) : null}
        <Title title={title} />
      </div>
      <div className="flex">
        <ul className="w-full space-y-3 p-2 list-disc list-inside">
          <Sets sets={sets} />
        </ul>
        {media ? (
          <div className="flex-none w-3/12 flex items-center border-l-2 border-black  bg-gray-200">
            <Image media={media} />
          </div>
        ) : null}
      </div>
      <div className="border-t-2 border-black">
        <Comments comments={comments} seshId={_id} user={user} />
      </div>
    </div>
  );
}

export default Sesh;
