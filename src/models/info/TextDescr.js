import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TextDescr() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h5 className="infoTextDescr">
              Vamos agora ajuda-lo a habilitar seu cadastro de forma rápida e
              simples. Mas antes de prosseguirmos, por favor siga as
              recomendações a seguir.
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextDescr;
