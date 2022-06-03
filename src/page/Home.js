import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // navigate
  const goto_join = () => {
    navigate("/Join");
  };

  const goto_login = () => {
    navigate("/Login");
  };

  const goto_post = () => {
    navigate("/Post");
  };

  return (
    <>
      <h1>home</h1>
      <button onClick={goto_join}>회원가입</button>
      <button onClick={goto_login}>로그인</button>
      <button onClick={goto_post}>추가하기</button>
    </>
  );
};

export default Home;
