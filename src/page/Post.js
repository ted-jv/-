import React from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../shared/firebase";
import { getDownloadURL } from "firebase/storage";
import { Col, Container, Row, Form } from "react-bootstrap";
import styled from "styled-components";
import "./post.css";

const Post = () => {
  return (
    <Container>
      <div className="postbox">
        <Form.Group>
          <Row className="row_total">
            <Col>
              <Form.Control placeholder="Book title" />
            </Col>
          </Row>
          <Row className="row_total">
            <Col>
              <Form>
                <Form.Label></Form.Label>
                <Form.Control placeholder="Content" as="textarea" rows={25} />
              </Form>
            </Col>
          </Row>
          <Row className="row_total">
            <Col>
              <Form>
                <Form.Control type="file" size="sm" />
              </Form>
            </Col>
          </Row>
        </Form.Group>
      </div>
    </Container>
  );
};

// controlId="formFileSm" className="mb-3"

//  className="mb-3"
// controlId="exampleForm.ControlTextarea1"

// className="Container" fluid="md"

// col에 해당하는 것들에 기본 위아래 간격을 주게 공통된 클래스 만들기
// 그리고 각각 col의 개성 클래스로 알아서

// 위에 <Form.Label></Form.Label>이 위아래 간격 벌려주는 역할하고 있음 그러면 className="row_total"이 왜 필요?
export default Post;
