import React, { useState } from "react";
import api from "../../../../api";
import { Logo } from "../seshComponents";

function CommentAdd({ seshId, comments, setComments, media }) {
  const [commentForm, setCommentForm] = useState("");

  const commentFormSubmitHandler = (e) => {
    e.preventDefault();
    api.addComment(seshId, commentForm).then((res) => {
      const newComment = res.data;
      let commentsTmp = [...comments];
      commentsTmp.push(newComment);
      setComments(commentsTmp);
      setCommentForm("");
    });
  };

  return (
    <div className="flex items-center">
      <div className="flex-none">
        <Logo media={media} />
      </div>
      <form onSubmit={commentFormSubmitHandler}>
        <input
          type="text"
          placeholder="Comment..."
          value={commentForm}
          onChange={(e) => setCommentForm(e.target.value)}
          className="w-full m-2 mx-1 px-1 border-2 border-black rounded-md"
        />
      </form>
    </div>
  );
}

export default CommentAdd;
