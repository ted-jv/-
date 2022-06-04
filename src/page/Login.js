import React, { useRef } from "react";
import { auth } from "../shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const id_ref = useRef(null);
  const password_ref = useRef(null);

  const Click_Login = async () => {
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
    <>
      ID: <input ref={id_ref}></input>
      PASSWORD: <input ref={password_ref}></input>
      <br></br>
      <button onClick={Click_Login}>로그인</button>
    </>
  );
};

export default Login;
