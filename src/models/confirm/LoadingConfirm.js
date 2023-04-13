import React from "react";
import styleSheet from "../../styles/styleSheet.scss";
import { Col, Container, Row } from "react-bootstrap";
import ReactLoading from "react-loading";

function LoadingConfirm() {
  return (
    <Container>
      <Row>
        <Col>
          <ReactLoading
            className="loadingConfirm"
            type={"spinningBubbles"}
            color={styleSheet["$whiteDefault"]}
            height={200}
            width={200}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default LoadingConfirm;
