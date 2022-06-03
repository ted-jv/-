import React from "react";
import { useParams } from "react-router-dom";

const PostBoxDetail = () => {
  const params = useParams();
  console.log("ppp", params);

  return (
    <>
      <h1> Post_Box_Detail </h1>
    </>
  );
};

export default PostBoxDetail;
