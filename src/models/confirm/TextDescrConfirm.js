import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function TextDescrConfirm() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h6 className="confirmTextDEscr">
              Vamos ajudá-lo a habilitar sua conta em 2 passos simples e
              rápidos. Para isso precisaremos de uma foto de sua CNH ou RG que
              conste o número do seu CPF e uma selfie.
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextDescrConfirm;
