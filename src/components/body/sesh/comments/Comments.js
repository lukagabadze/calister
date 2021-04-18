import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";
import CommentAdd from "./CommentAdd";
import { Logo } from "../seshComponents";

function Comments(props) {
  const { seshId } = props;
  const [comments, setComments] = useState(props.comments);

  let commentsJSX = [];
  comments.forEach(({ _id, text, username, media }) => {
    commentsJSX.push(
      <Comment key={_id} text={text} username={username} media={media} />
    );
  });

  return (
    <div className="bg-gray-300 p-2 flex flex-col space-y-2">
      {commentsJSX} <CommentAdd seshId={seshId} setComments={setComments} />
    </div>
  );
}

export default Comments;
