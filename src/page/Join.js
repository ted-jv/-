import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../shared/firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../shared/firebase";
import { getDownloadURL } from "firebase/storage";
import { ref, uploadBytes } from "firebase/storage";

const Join = () => {
  const navigate = useNavigate();

  const emailref = React.useRef(null);
  const passwordref = React.useRef(null);
  const file_link_ref = React.useRef(null);

  //회원가입

  const signup = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passwordref.current.value
    );
    console.log(user);
    navigate("/");
  };

  //회원의 프로필 사진

  const uploadFB = async (e) => {
    console.log(e.target.files);
    const uploded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    console.log(uploded_file);

    const file_url = await getDownloadURL(uploded_file.ref);

    console.log(file_url);
    file_link_ref.current = { url: file_url };

    const users_doc = await addDoc(collection(db, "users"), {
      id: emailref.current.value,
      password: passwordref.current?.value,
      imgage_url: file_link_ref.current?.url,

      //file_link_ref.current  이렇게 한 이유: useRef는 특정 DOM을 건드리는 것
      //지금 위에 file_link_ref이란 DOM을 만들었고 (저장소 또한)  file_link_ref.current의
      // 객체가 무조건 { url: file_url } 이게 되게 만들었다.
    });
    console.log(users_doc.id);
  };

  return (
    <>
      ID: <input type="text" ref={emailref}></input>
      PASSWORD: <input type="text" ref={passwordref}></input>
      IMAGE: <input type="file" onChange={uploadFB}></input>
      <button onClick={signup}>회원가입</button>
    </>
  );
};

export default Join;
