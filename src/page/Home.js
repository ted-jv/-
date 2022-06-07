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
    </>
  );
};

export default Home;
