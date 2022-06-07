// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { auth } from "../shared/firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import styled from "styled-components";

// const Navbar2 = () => {
//   const post_reducer = useSelector((state) => state.post_reducer.list);

//   // 로그인 체크해서 --> 로그아웃 할 수 있게 만들어줌

//   const [is_login, setLogin] = React.useState(false);

//   const loginCheck = async (user) => {
//     if (user) {
//       setLogin(true);
//     } else {
//       setLogin(false);
//     }
//     console.log(auth.currentUser);
//   };

//   React.useEffect(() => {
//     onAuthStateChanged(auth, loginCheck);
//   }, []);

//   // navigate

//   const navigate = useNavigate();

//   const goto_home = () => {
//     navigate("/");
//   };

//   const goto_join = () => {
//     navigate("/Join");
//   };

//   const goto_login = () => {
//     navigate("/Login");
//   };

//   const goto_logout = () => {
//     signOut(auth);

//     console.log(auth.currentUser);
//   };

//   return (
//     <Navbar_div>
//       <button onClick={goto_home}>Home</button>
//       <button onClick={goto_join}>회원가입</button>
//       {is_login ? (
//         <button onClick={goto_logout}>로그아웃</button>
//       ) : (
//         <button onClick={goto_login}>로그인</button>
//       )}
//     </Navbar_div>
//   );
// };

// const Navbar_div = styled.div`
//   position: fixed;
//   top: 0px;
//   left: 0px;
//   z-index: 10;
//   display: flex;
//   -webkit-box-pack: center;
//   justify-content: center;
//   -webkit-box-align: center;
//   align-items: center;
//   width: 100%;
//   height: 60px;
//   background-color: rgb(255, 255, 255);
//   border-bottom: 2px solid rgb(219, 232, 216);
// `;

// export default Navbar2;
