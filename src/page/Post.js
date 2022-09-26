import React from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';
import { getDownloadURL } from 'firebase/storage';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import './post.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddPostFB } from '../redux/reducers/postReducer';

const Post = () => {
  //기본 hook들
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ref 훅 그리고 정의
  const title_ref = React.useRef(null);
  const content_ref = React.useRef(null);
  const file_link_ref = React.useRef(null);

  const uploadFB = async e => {
    // console.log(e.target.files);
    const uploded_file = await uploadBytes(
      ref(storage, `addimages/${e.target.files[0].name}`),
      e.target.files[0]
    );
    // console.log(uploded_file);

    const file_url = await getDownloadURL(uploded_file.ref);
    // getDownloadURL 이게 있어서 아래에서  file_link_ref.current?.url,을 따올 수 있던 거임.
    // 파이어베이스가 아닌 일반 서버와 연결해서 한다라고 했을 땐 blob? 인가 그거나 다른 방법을 찾아서
    // url 을 다운 받아야함.

    console.log(file_url);
    file_link_ref.current = { url: file_url };
  };

  const Data_post = () => {
    //1. 아 데이터 전송은 되는데 여기에 console.log(event.target.value) 자체가 안 찍히고 있고
    // 만약에  title, content을 안 썼으면 데이터 전송 안 되고 그 페이지에 머물게 하고픈데 계속 실패중..
    // 흠 어케 해야할까??

    dispatch(
      AddPostFB({
        title: title_ref.current?.value, // input에 requierd 랑 여기에 current 뒤에 ? 옵셔널 체이닝 사용 둘다 실패 뭐가 문제?
        content: content_ref.current?.value,
        imgage_url: file_link_ref.current?.url,
      })
    );
    console.log(file_link_ref.current.url);
    navigate('/');
  };

  return (
    <Container>
      <div className="postbox">
        <Form.Group>
          <Row>
            <Col>
              <Form.Label></Form.Label>
              <Form.Check
                type="radio"
                label="Title Row"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
            <Col>
              <Form.Label></Form.Label>
              <Form.Check
                type="radio"
                label="Title Column "
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </Row>
          <Row className="row_total">
            <Col>
              <Form.Label></Form.Label>
              <Form.Control
                ref={title_ref}
                placeholder="Book title"
                as="input"
                type="text"
                required
              />
            </Col>
          </Row>
          <Row className="row_total">
            <Col>
              <Form>
                <Form.Label></Form.Label>
                <Form.Control
                  ref={content_ref}
                  placeholder="Content"
                  as="textarea"
                  required
                  rows={25}
                />
              </Form>
            </Col>
          </Row>
          <Row className="row_total">
            <Col>
              <Form>
                <Form.Label></Form.Label>
                <Form.Control type="file" size="sm" onChange={uploadFB} required />
              </Form>
            </Col>
          </Row>
        </Form.Group>
        <div className="postdetail_button">
          <Button type="submit" variant="outline-dark" onClick={Data_post}>
            Save
          </Button>
        </div>
      </div>
    </Container>
  );
};

// col에 해당하는 것들에 기본 위아래 간격을 주게 공통된 클래스 만들기
// 그리고 각각 col의 개성 클래스로 알아서

// 위에 <Form.Label></Form.Label>이 위아래 간격 벌려주는 역할하고 있음 그러면 className="row_total"이 왜 필요?

//3. 위에 타이틀 가로 방향 , 세로 방향 셀렉에 의해 보이는 값이 가로 세로, 바뀌어야함
export default Post;
