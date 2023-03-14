import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useFetching } from "./../hooks/useFetching";
import Loader from "./../UI/loader/Loader";
import postService from "../API/postService";

export default function Single() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchingById, isLoading, error] = useFetching(async (id) => {
    const response = await postService.getAllbyId(id);
    setPost(response.data);
  });

  const [fetchingComments, isCommentsLoading, CommentsError] = useFetching(async (id) => {
    const response = await postService.getPostComments(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchingById(params.id);
    fetchingComments(params.id);
  },[]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="post__card">
            <h1 className="post__name">{ post.id}. {post.title}</h1>
            <p className="post__body">{ post.body}</p>
        </div>
      )}



      {isCommentsLoading ? (
        <Loader />
      ) : 
          
        (comments.map((comment) =>
          <div className="commnets__wraper" style={{marginTop: 30}}>
            <h3 className="post__name">{comment.name}</h3>
            <p>{comment.body }</p>
        </div>)
            )
          }
      
    </div>
  );
}
