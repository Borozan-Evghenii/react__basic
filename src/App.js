import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Javascript is a programing language" },
    { id: 2, title: "Python", body: "Javascript is a programing language" },
    { id: 3, title: "C#", body: "Javascript is a programing language" },
    { id: 4, title: "Angular", body: "Javascript is a framework" },
    { id: 5, title: "React", body: "Javascript is a framework" },
  ]);

  // const bodyInputRef = useRef();
  /*Pentru a accesa un element folosind use ref
  creăm   const bodyInputRef = useRef(); 
  bodyInpuRef fiind constanta în care plasăm linkul 
  spre lementul necesar atribuind elementului props ref={bodyInputRef}
  bodyInputRef are doar un field current cere conține eleemntul linkat 
  
  
  */

  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm addNewPost={addNewPost} />
      {posts.length !== 0 ? (
        <PostList posts={posts} title={"Posts list"} remove={removePost} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Dont have posts</h1>
      )}
    </div>
  );
}

export default App;
