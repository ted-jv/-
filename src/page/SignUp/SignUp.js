import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../firebase';
import { getDownloadURL } from 'firebase/storage';
import { ref, uploadBytes } from 'firebase/storage';
import { Form, Button } from 'react-bootstrap';
import { AddUserFB } from '../../redux/reducers/userReducer';
import styled from 'styled-components';
import './SignUp.scss';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailref = React.useRef(null);
  const nicknameref = React.useRef(null);
  const passwordref = React.useRef(null);
  const file_link_ref = React.useRef(null);

  //회원가입

  const on_Signup = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passwordref.current.value
    );

    console.log(user);

    dispatch(
      AddUserFB({
        id: emailref.current.value,
        nickname: nicknameref.current.value,
        imgage_url: file_link_ref.current.url,
      })
    );
    let localStorage = window.localStorage;
    localStorage.setItem('id', emailref.current.value);
    localStorage.setItem('nickname', nicknameref.current.value);

    navigate('/');
  };

  //회원 정보 데이터 보내기

  const uploadFB = async e => {
    console.log(e.target.files);
    const uploded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    console.log(uploded_file);

    const file_url = await getDownloadURL(uploded_file.ref);

    console.log(file_url);
    file_link_ref.current = { url: file_url };
  };

  // const users_doc = await addDoc(collection(db, "users"), {
  //   id: emailref.current?.value,
  //   nickname: nicknameref.current?.value,
  //   password: passwordref.current?.value,
  //   imgage_url: file_link_ref.current?.url,

  //   //file_link_ref.current  이렇게 한 이유: useRef는 특정 DOM을 건드리는 것
  //   //지금 위에 file_link_ref이란 DOM을 만들었고 (저장소 또한)  file_link_ref.current의
  //   // 객체가 무조건 { url: file_url } 이게 되게 만들었다.
  // });
  // console.log(users_doc.id);
  // };

  return (
    <SignupBox>
      <div>
        <Form className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="id@example.com" ref={emailref} />
        </Form>
      </div>
      <div>
        <Form className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nickname</Form.Label>
          <Form.Control type="text" placeholder="text" ref={nicknameref} />
        </Form>
      </div>
      <div>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          placeholder="password"
          aria-describedby="passwordHelpBlock"
          ref={passwordref}
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 6-20 characters long, contain letters and numbers, and must not
          contain spaces, special characters, or emoji.
        </Form.Text>
      </div>
      <div className="file_div">
        <Form>
          <Form.Label>Profile image</Form.Label>
          <Form.Control type="file" size="sm" onChange={uploadFB} required />
        </Form>
      </div>

      <div className="button_div">
        <Form.Label></Form.Label>
        <Button type="submit" variant="outline-dark" onClick={on_Signup}>
          Sign up
        </Button>
      </div>
    </SignupBox>
  );
};

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  max-width: 500px;
  margin: 60px auto;
`;

export default SignUp;
