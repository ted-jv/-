import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../shared/firebase";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import PostBox from "../component/PostBox";
import styled from "styled-components";
import "./Home.css";
import { LoadPostFB } from "../redux/modules/post_reducer";

const Home = () => {
  const post_list = useSelector((state) => state.post_reducer.list);
  console.log(post_list);
  const navigate = useNavigate("/");
  const dispatch = useDispatch();

  const goto_post = () => {
    console.log("로컬 값", window.localStorage);
    navigate("/Post");
  };

  //로그인 체크 -> add 사용 가능

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

  React.useEffect(() => {
    dispatch(LoadPostFB());
  }, [dispatch]);

  return (
    <>
      <Container className="container">
        <Row className="Row">
          {post_list.map((item) => (
            <Col className="Home_Col" lg={4}>
              <PostBox item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      {is_login ? (
        <Button className="post_button" variant="dark" onClick={goto_post}>
          Add
        </Button>
      ) : null}
    </>
  );
};

export default Home;
