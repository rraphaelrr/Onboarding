import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TextTopDocFront() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h5 className="textTopDocFront">
              Agora vamos tirar uma foto do seu documento de identificação , que
              pode ser um RG, desde que ele possua também o número do seu CPF ou
              uma CNH. Se estiver dentro de uma capa plástica, por favor a
              retire.
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextTopDocFront;