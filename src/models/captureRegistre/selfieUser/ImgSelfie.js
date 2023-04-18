import React from "react";
import { Col, Image, Row } from "react-bootstrap";

function ImgSelfie(capture) {
  return (
    <>
      <Row>
        <Col>
          <h6>{capture.titleImgSelfie}</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={capture.imgSelfie} alt="Selfie User Image" />
        </Col>
      </Row>
    </>
  );
}

export default ImgSelfie;
