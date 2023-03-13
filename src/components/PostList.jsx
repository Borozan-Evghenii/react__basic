import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Dont have posts</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} classNames="post" timeout={500}>
            <PostItem post={post} removePost={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
