import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import PostBox from '../../components/PostBox';
import { LoadPostFB } from '../../redux/reducers/postReducer';

const Home = () => {
  // const post_list = useSelector(state => state.post_reducer.list);
  // console.log(post_list);
  const navigate = useNavigate('/');
  // const dispatch = useDispatch();

  const goto_post = () => {
    console.log('로컬 값', window.localStorage);
    navigate('/Post');
  };

  //로그인 체크 -> add 사용 가능

  const [is_login, setLogin] = React.useState(false);

  // const loginCheck = async user => {
  //   if (user) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }
  //   console.log(auth.currentUser);
  // };

  // useEffect(() => {
  //   onAuthStateChanged(auth, loginCheck);
  // }, []);

  // useEffect(() => {
  //   dispatch(LoadPostFB());
  // }, [dispatch]);

  return (
    <>
      <section className="container">
        가나다
        {/* <Row className="Row">
          {post_list.map(item => (
            <Col className="Home_Col" lg={4}>
              <PostBox className="postbox" item={item} />
            </Col>
          ))}
        </Row> */}
      </section>
      {is_login ? (
        <button className="post_button" variant="dark" onClick={goto_post}>
          Add
        </button>
      ) : null}
    </>
  );
};

export default Home;
