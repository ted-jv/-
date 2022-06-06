import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../shared/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import styled from "styled-components";

const Home = () => {
  const post_reducer = useSelector((state) => state.post_reducer.list);

  // 로그인 체크해서 --> 로그아웃 할 수 있게 만들어줌

  const [is_login, setLogin] = React.useState(false);

  const loginCheck = async (user) => {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    console.log(auth.currentUser);
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  // navigate

  const navigate = useNavigate();

  const goto_join = () => {
    navigate("/Join");
  };

  const goto_login = () => {
    navigate("/Login");
  };

  const goto_post = () => {
    navigate("/Post");
  };

  const goto_logout = () => {
    signOut(auth);

    console.log(auth.currentUser);
  };

  return (
    <>
      <h1>home</h1>
      <button onClick={goto_join}>회원가입</button>
      {is_login ? (
        <button onClick={goto_logout}>로그아웃</button>
      ) : (
        <button onClick={goto_login}>로그인</button>
      )}
      <Post_button onClick={goto_post}> + </Post_button>
    </>
  );
};

const Post_button = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background-color: rgb(10, 112, 41);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 10px;
  right: 10px;
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
    rgb(60 64 67 / 15%) 0px 2px 6px 2px;
  cursor: pointer;
`;

export default Home;
