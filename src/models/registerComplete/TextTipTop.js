import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TextTipTop() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="textTipTopRegisterComplete">
              <i>
                Se tudo estiver ok, as fotos bem legíveis e transmissão de dados
                ok, nosso sistema automatizado irá habilitar seu cadastro em
                alguns minutos, pórem se algo precisar de revisão esse tempo
                pode demorar um pouco mais.
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextTipTop;
