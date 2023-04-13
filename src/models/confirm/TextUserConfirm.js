import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TextUserConfirm(confirm) {
  return (
    <>
      <Container>
        <br />
        <Row>
          <Col md={12} lg={12}>
            <label className="labelUserConfirm">
              Por Favor, confirme seus dados:
            </label>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h5>
              CPF: <b>{confirm.userCPF}</b>
            </h5>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h6>
              Nome: <b>{confirm.nameUser}</b>
            </h6>
          </Col>
        </Row>

        <Row>
          <Col>
            <h6>
              Celular: <b>{confirm.phoneUser}</b>
            </h6>
          </Col>
        </Row>

        <Row>
          <Col>
            <h6>
              E-mail: <b>{confirm.emailUser}</b>
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextUserConfirm;
