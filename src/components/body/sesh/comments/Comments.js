import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";
import CommentAdd from "./CommentAdd";
import { Logo } from "../seshComponents";

function Comments(props) {
  const { seshId } = props;
  const { user } = props;
  const [comments, setComments] = useState(props.comments);

  let commentsJSX = [];
  comments.forEach(({ _id, text, author }) => {
    commentsJSX.push(
      <Comment
        key={_id}
        text={text}
        username={author.username}
        media={author.media}
        authorId={author._id}
      />
    );
  });

  return (
    <div className="bg-gray-300 p-2 flex flex-col space-y-2">
      {commentsJSX}
      {user ? (
        <CommentAdd
          seshId={seshId}
          comments={comments}
          setComments={setComments}
        />
      ) : null}
    </div>
  );
}

export default Comments;
