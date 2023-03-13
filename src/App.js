import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./UI/modal/Modal";
import Button from "./UI/button/Button";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Javascript is a programing language" },
    { id: 2, title: "Python", body: "Javascript is a programing language" },
    { id: 3, title: "C#", body: "Javascript is a programing language" },
    { id: 4, title: "Angular", body: "Javascript is a framework" },
    { id: 5, title: "React", body: "Javascript is a framework" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);

  const sortedPost = useMemo(() => {
    console.log("worke");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPost]);

  // const bodyInputRef = useRef();
  /*Pentru a accesa un element folosind use ref
  creăm   const bodyInputRef = useRef(); 
  bodyInpuRef fiind constanta în care plasăm linkul 
  spre lementul necesar atribuind elementului props ref={bodyInputRef}
  bodyInputRef are doar un field current cere conține eleemntul linkat 
  
  
  */

  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <Modal visible={visible} setVisible={setVisible}>
        <PostForm addNewPost={addNewPost} />
      </Modal>
      <Button onClick={() => setVisible(true)}>Create Post</Button>
      <hr style={{ marginTop: 20, marginBottom: 20 }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        title={"Posts list"}
        remove={removePost}
      />
    </div>
  );
}

export default App;
