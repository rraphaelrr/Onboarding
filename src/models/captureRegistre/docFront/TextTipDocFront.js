import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TextTipDocFront() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="textTipDocFront">
              Vamos tirar a foto em duas partes, primeiro a frente, depois o
              verso, pode ser tanto na vertical como na horizontal, o importante
              é estar bem enquadrado e legível.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextTipDocFront;
