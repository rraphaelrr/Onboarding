import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

function ModalDocBack(capture) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button
              className="btnModalDocBack"
              onClick={() => setShowModal(true)}
            >
              {capture.nameBtn}
            </Button>
          </Col>
        </Row>

        <Modal
          keyboard={false}
          show={showModal}
          size="lg"
          centered
          backdrop="static"
        >
          <Modal.Header>
            <Modal.Title>{capture.modalHeader}</Modal.Title>
            <select
              disabled={capture.selectDoc}
              onChangeCapture={capture.changeDocConfirm}
              value={capture.changeDoc}
            >
              <option value={capture.optionRg}>{capture.optionRg}</option>
              <option value={capture.optionCnh}>{capture.optionCnh}</option>
            </select>
          </Modal.Header>
          <Modal.Body>{capture.modalBody}</Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default ModalDocBack;
