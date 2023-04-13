import React from "react";
import { Col,  Image, Row } from "react-bootstrap";

function ImgDocFront(capture) {
  return (
    <>
      
        <Row>
          <Col>
            <h6>{capture.titleImgDocFront}</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={capture.imgDocFront} alt="Doc Front Image" />
          </Col>
        </Row>
      
    </>
  );
}

export default ImgDocFront;