import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import postService from "./../API/postService";
import { useState } from "react";
import { useFetching } from "./../hooks/useFetching";
import Loader from "./../UI/loader/Loader";

export default function Single() {
  const params = useParams();
  const [data, setData] = useState({});

  const [fetchingById, isLoading, error] = useFetching(async () => {
    const response = await postService.getAllbyId(params.id);
    await setData(response.data);
    // await console.log(response);
  });

  useEffect(() => {
    fetchingById();
  });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="user__card">
          {error}
          <div className="user__name">{data.title}</div>
          <div className="user__adress"></div>
        </div>
      )}
    </div>
  );
}
