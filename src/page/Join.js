import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../shared/firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

const Join = () => {
  const emailref = React.useRef(null);
  const passwordref = React.useRef(null);
  const navigate = useNavigate();

  const signup = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passwordref.current.value
    );
    console.log(user);

    const users_data = await addDoc(collection(db, "users"), {
      id: emailref.current.value,
      password: passwordref.current.value,
    });
    console.log(users_data.id);
    navigate("/");
  };

  return (
    <>
      <input type="text" ref={emailref}></input>
      <input type="text" ref={passwordref}></input>
      <button onClick={signup}>회원가입</button>
    </>
  );
};

export default Join;
