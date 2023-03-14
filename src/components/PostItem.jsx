import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/button/Button";

export default function PostItem({ post, removePost }) {
  const route = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div className="post__details">{post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => route(`/post/${post.id}`)}>open</Button>
        <Button onClick={() => removePost(post)}>delete</Button>
      </div>
    </div>
  );
}
