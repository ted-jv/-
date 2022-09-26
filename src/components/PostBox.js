import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import "./PostBox.css";

const PostBox = ({ item }) => {
  return (
    // <div className="card_box">
    <>
      {/* <Row className="Post_row"> */}
      <Card style={{ width: "18rem", height: "15vh" }}>
        <Card.Img
          className="image_box"
          variant="top"
          src={`${item?.imgage_url}`}
          style={{ height: "60vh" }}
        />
        <Card.Body>
          <Card.Title>{item?.title}</Card.Title>
          <Card.Text>{item?.content}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      {/* </Row> */}
    </>
    // </div>
  );
};

export default PostBox;
