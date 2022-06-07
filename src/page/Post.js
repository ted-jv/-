import React, { useEffect } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../shared/firebase";
import { getDownloadURL } from "firebase/storage";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import "./post.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddPostFB } from "../redux/modules/reducer";

const Post = () => {
  //기본 hook들
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ref 훅 그리고 정의
  const title_ref = React.useRef(null);
  const content_ref = React.useRef(null);

  const Data_post = (event) => {
    event.preventDefault();

    dispatch(
      AddPostFB({
        title: title_ref.current.value,
        content: content_ref.current.value,
      })
    );
    navigate("/");
  };

  // useEffect(() => {
  //   dispatch();
  // }, []);
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
              <Form.Control ref={title_ref} placeholder="Book title" />
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
                  rows={25}
                />
              </Form>
            </Col>
          </Row>
          <Row className="row_total">
            <Col>
              <Form>
                <Form.Label></Form.Label>
                <Form.Control type="file" size="sm" />
              </Form>
            </Col>
          </Row>
        </Form.Group>
        <div className="postdetail_button">
          <Button variant="outline-info" onClick={Data_post}>
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
