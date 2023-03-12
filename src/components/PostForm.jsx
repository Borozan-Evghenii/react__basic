import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import Button from "../UI/button/Button";

export default function PostForm({ addNewPost }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const createPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    addNewPost(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="title"
        // ref={bodyInputRef}
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="body "
      />
      <Button onClick={createPost}>Add Post</Button>
    </form>
  );
}
