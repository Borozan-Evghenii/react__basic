import React, { useEffect, useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./UI/modal/Modal";
import Button from "./UI/button/Button";
import { usePost } from "./hooks/usePosts";
import postService from "./API/postService";
import Loader from "./UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);

  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await postService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  let pageArray = getPagesArray(totalPages);
  // const bodyInputRef = useRef();
  /*Pentru a accesa un element folosind use ref
  creăm   const bodyInputRef = useRef(); 
  bodyInpuRef fiind constanta în care plasăm linkul 
  spre lementul necesar atribuind elementului props ref={bodyInputRef}
  bodyInputRef are doar un field current cere conține eleemntul linkat 
  */

  useEffect(() => {
    fetching();

    /* return () => { 
      acest return rulează la demontarea componentei aici putem face o curățire a stroului sau unsubscribe al eventurilor
     }*/
  }, [page]);
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
      {error && <h1 style={{ textAlign: "center" }}>${error}</h1>}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title={"Posts list"}
          remove={removePost}
        />
      )}
      <div className="pagination">
        {pageArray.map((p) => (
          <span
            key={p}
            onClick={() => setPage(p)}
            className={
              page === p
                ? "pagination__item pagination__item--active"
                : "pagination__item"
            }
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
