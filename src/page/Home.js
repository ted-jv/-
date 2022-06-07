import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import "./Home.css";

const Home = () => {
  const post_reducer = useSelector((state) => state.post_reducer.list);

  const navigate = useNavigate("/");

  const goto_post = () => {
    navigate("/Post");
  };

  return (
    <>
      <Button className="post_button" variant="dark" onClick={goto_post}>
        Add
      </Button>
      {/* <Post_button onClick={goto_post}> + </Post_button> */}
    </>
  );
};

// const Post_button = styled.button`
//   display: flex;
//   -webkit-box-pack: center;
//   justify-content: center;
//   -webkit-box-align: center;
//   align-items: center;
//   color: rgb(255, 255, 255);
//   background-color: rgb(10, 112, 41);
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   position: fixed;
//   bottom: 10px;
//   right: 10px;
//   box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
//     rgb(60 64 67 / 15%) 0px 2px 6px 2px;
//   cursor: pointer;
// `;

export default Home;
