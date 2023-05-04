import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TextWait() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Por gentileza, Aguarde!</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Estamos Carregando algumas informações sobre o seu cadastro.</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextWait;
