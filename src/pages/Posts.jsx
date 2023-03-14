import React, { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../UI/modal/Modal";
import Button from "../UI/button/Button";
import { usePost } from "../hooks/usePosts";
import postService from "../API/postService";
import Loader from "../UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);
  const lastElement = useRef()


  const [fetching, isLoading, error] = useFetching(async (limit, page) => {
    const response = await postService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    let totalCount = response.headers["x-total-count"];
    console.log(response);
    setTotalPages(getPageCount(totalCount, limit));
  });

  // const bodyInputRef = useRef();
  /*Pentru a accesa un element folosind use ref
  creăm   const bodyInputRef = useRef(); 
  bodyInpuRef fiind constanta în care plasăm linkul 
  spre lementul necesar atribuind elementului props ref={bodyInputRef}
  bodyInputRef are doar un field current cere conține eleemntul linkat 
  */
  
  useObserver(lastElement, page < totalPages, isLoading, ()=>{setPage(page +1)})

  useEffect(() => {
    fetching(limit, page);

    /* return () => { 
      acest return rulează la demontarea componentei aici putem face o curățire a stroului sau unsubscribe al eventurilor
     }*/
  }, [page,limit]);

  function addNewPost(newPost) {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  function changePage(page) {
    setPage(page);

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


      <MySelect
        value={limit}
        onChange={(value) => { setLimit(value) }}
        defaultValue='count of posts'
        options={[
          { value: "5", name: "Five Posts" },
          { value: "10", name: "Teen Posts" },
          { value: "-1", name: "All Posts" },
        ]}
    />
        



      {error && <h1 style={{ textAlign: "center" }}>${error}</h1>}

      <PostList
          posts={sortedAndSearchedPosts}
          title={"Posts list"}
          remove={removePost}
        />
      

      {isLoading && 
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Loader />
        </div>}
        
      <div ref={lastElement} style={{backgroundColor: 'red', height: 20}}></div>
      <Pagination changePage={changePage} page={page} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
