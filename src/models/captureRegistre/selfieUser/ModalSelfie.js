import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

function ModalSelfie(capture) {
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
          id="modalSelfie"
        >
          <Modal.Header>
            <Modal.Title>{capture.modalHeader}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{capture.modalBody}</Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default ModalSelfie;
