import React, { useRef } from "react";
import { auth } from "../shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import "./Join.css";

const Login = () => {
  const navigate = useNavigate();

  const id_ref = useRef(null);
  const password_ref = useRef(null);

  const Click_LoginFB = async () => {
    console.log(id_ref.current.value);
    const user = await signInWithEmailAndPassword(
      auth,
      id_ref.current.value,
      password_ref.current.value
    );

    console.log(user);
    navigate("/");
  };

  return (
    <LoginBox>
      <>
        <Form className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="email"
            placeholder="id@example.com"
            ref={id_ref}
          />
        </Form>
      </>
      <>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          placeholder="password"
          aria-describedby="passwordHelpBlock"
          ref={password_ref}
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 6-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </>
      <div className="button_div">
        <Button variant="outline-dark" onClick={Click_LoginFB}>
          Login
        </Button>
      </div>
    </LoginBox>
  );
};

// Id: <input type="text" ref={emailref}></input>
// Nickname :
// Password: <input type="text" ref={passwordref}></input>
// Image: <input type="file" onChange={uploadFB}></input>
// <button onClick={signup}>회원가입</button>

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  max-width: 500px;
  margin: 60px auto;
`;

// 1. ?? 위에서 로그인 버튼만 위로 margin-top : 10px 정도 주고 싶음 그걸 스타일 컴포넌트로 어떻게 할지??
export default Login;
