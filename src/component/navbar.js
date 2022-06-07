import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../shared/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import styled from "styled-components";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Navbar_1 = () => {
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

  const goto_home = () => {
    navigate("/");
  };

  const goto_join = () => {
    navigate("/Join");
  };

  const goto_login = () => {
    navigate("/Login");
  };

  const goto_logout = () => {
    signOut(auth);

    console.log(auth.currentUser);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ height: "100px" }}>
      <Container>
        <Navbar.Brand href="/">Book Magazine</Navbar.Brand>
        <Nav className="me-auto">
          {is_login ? (
            <Button variant="dark" onClick={goto_logout}>
              Logout
            </Button>
          ) : (
            <Button variant="dark" onClick={goto_login}>
              Login
            </Button>
          )}
          <Button variant="dark" onClick={goto_join}>
            Sign up
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbar_1;
