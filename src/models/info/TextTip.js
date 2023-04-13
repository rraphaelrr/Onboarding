import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as IconMd from "react-icons/md";
function TextTip() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="infoTextTip">
              <i>
                <IconMd.MdInfo /> Para que o processo funcione
                adequadamente, recomendamos que utilize versões atualizadas do
                navegador Chrome em dispositivos Android, ou Safari em
                dispositivos IOS(Iphone).
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TextTip;
