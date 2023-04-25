import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TextNotice() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h5 className="infoTextDescr">
              Em instantes você receberá mais informações. Se sua conta for
              aprovada, você receberá um e-mail com a confirmação.
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextNotice;
