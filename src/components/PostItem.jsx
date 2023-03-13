import React from "react";
import Button from "../UI/button/Button";

export default function PostItem({ post, removePost }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div className="post__details">{post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => removePost(post)}>delete</Button>
      </div>
    </div>
  );
}
