import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import InputMask from "react-input-mask";

function FormConfirm(confirm) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <label className="textInputConfirm">
              Por favor, confirme seu CPF abaixo:
            </label>
          </Col>
        </Row>
        <form>
          <Row>
            <Col md={12} sm={12}>
              <ul className="formConfirm">
                <li>
                  <p>{confirm.cpfUser}</p>
                </li>
                <li>
                  <InputMask
                    mask={"999-99"}
                    value={confirm.userChange}
                    onChange={confirm.userChangeConfirm}
                  />
                </li>
                <li>
                  <Button onClick={confirm.btnConfirmForm}>
                    {confirm.btnName}
                  </Button>
                </li>
              </ul>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
}

export default FormConfirm;
