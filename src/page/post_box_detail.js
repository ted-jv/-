import React from "react";
import { useParams } from "react-router-dom";

const PostBoxDetail = () => {
  const { id } = useParams();
  console.log({ id });

  return (
    <>
      <h1> Post_Box_Detail {id} </h1>
    </>
  );
};

export default PostBoxDetail;
