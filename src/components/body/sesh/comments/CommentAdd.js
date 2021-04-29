import React, { useState } from "react";
import axios from "axios";
import { Logo } from "../seshComponents";

function CommentAdd({ seshId, comments, setComments, media }) {
  const [commentForm, setCommentForm] = useState("");

  const commentFormSubmitHandler = async (e, comment) => {
    e.preventDefault();
    try {
      const body = {
        seshId,
        text: commentForm,
      };
      const res = await axios.post(
        "http://localhost:4000/sesh/comment-add",
        body
      );
      const newComment = res.data;
      let commentsTmp = [...comments];
      commentsTmp.push(newComment);
      setComments(commentsTmp);
      setCommentForm("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center">
      <Logo media={media} />
      <form onSubmit={commentFormSubmitHandler}>
        <input
          type="text"
          placeholder="Comment..."
          value={commentForm}
          onChange={(e) => setCommentForm(e.target.value)}
          className="m-2 px-1 border-2 border-black rounded-md"
        />
      </form>
    </div>
  );
}

export default CommentAdd;
