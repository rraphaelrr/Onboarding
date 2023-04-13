import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function TextWelcome() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="confirmTextTop">Bem vindo a verificação rápida.</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextWelcome;
