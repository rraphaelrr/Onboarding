import React from "react";
import { Col, Image, Row } from "react-bootstrap";

function ImgDocBack(capture) {
  return (
    <>
      <Row>
        <Col>
          <h6>{capture.titleImgDocBack}</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={capture.imgDocBack} alt="Doc Back Image" />
        </Col>
      </Row>
    </>
  );
}

export default ImgDocBack;
