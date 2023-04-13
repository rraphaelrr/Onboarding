import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function BtnInfo(info) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button
              onClick={info.actionClick}
              className={info.classNameBtnInfo}
            >
              <span className={info.iconLeftInfo}>{info.iconButtonLeft}</span>
              {info.btnName}
              <span className={info.iconRightInfo}>{info.iconButtonRight}</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BtnInfo;
