import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Comments from "./comments/Comments";
import { Title, Sets, Image, Heart, ImagePreview } from "./seshComponents";

function Sesh({ sesh }) {
  const { _id, title, sets, media, comments, hearts, author } = sesh;
  const user = useSelector((state) => state.user);
  const [hearted, setHearted] = useState(false);
  const [imageHidden, setImageHidden] = useState(true);

  useEffect(() => {
    setHearted(user ? hearts.indexOf(user._id) !== -1 : false);
  }, [hearts]);

  return (
    <div className="flex flex-col border-2 border-gray-500 bg-gray-200 rounded-lg w-full">
      <div className="flex justify-between space-x-3 border-b-2 border-black w-full">
        <Title title={title} author={author} />
        <div className="flex-end">
          {user ? (
            <Heart seshId={_id} hearted={hearted} setHearted={setHearted} />
          ) : null}
        </div>
      </div>
      <div className="flex">
        <ul className="flex-grow truncate space-y-3 p-2 list-disc list-inside">
          <Sets sets={sets} />
        </ul>
        {media ? (
          <div className="flex-none w-4/12 flex items-center border-l-2 border-black  bg-gray-200">
            <div
              className="m-2 rounded-xl cursor-pointer hover:opacity-60"
              onClick={() => setImageHidden(false)}
            >
              <Image media={media} />
            </div>
            <div className="z-20">
              <ImagePreview
                media={media}
                imageHidden={imageHidden}
                setImageHidden={setImageHidden}
              />
            </div>
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
