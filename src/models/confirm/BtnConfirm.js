import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function BtnConfirm(confirm) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button onClick={confirm.actionClick} className="btnConfirm">
              {confirm.btnName}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BtnConfirm;
