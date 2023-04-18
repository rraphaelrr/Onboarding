import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function BtnCaptureSelfie(capture) {
  return (
    <>
      <Row>
        <Col md={6} lg={6} sm={6}>
          <Button className="btnCaptureReset" onClick={capture.actionBtnReset}>
            {capture.btnNameReset}
          </Button>
        </Col>

        <Col md={6} lg={6} sm={6}>
          <Button
            className="btnCaptureConfirm"
            onClick={capture.actionBtnConfirm}
          >
            {capture.btnNameConfirm}
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default BtnCaptureSelfie;
