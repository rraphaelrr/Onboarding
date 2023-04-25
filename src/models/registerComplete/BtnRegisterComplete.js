import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function BtnRegisterComplete(registerComplete) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button
              onClick={registerComplete.actionClick}
              className={registerComplete.classNameBtnRegisterComplete}
            >
              {registerComplete.btnName}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BtnRegisterComplete;
