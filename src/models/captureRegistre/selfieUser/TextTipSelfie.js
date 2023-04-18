import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TextTipSelfie() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="textTipDocBack">
              Agora vamos tirar uma selfie do seu rosto. Por favor alinhe seu
              rosto com as linhas pontilhadas.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextTipSelfie;
