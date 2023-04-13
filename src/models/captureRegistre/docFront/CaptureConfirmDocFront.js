import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

function CaptureConfirmDocFront(capture) {
  return (
    <>
      <Modal
        keyboard={false}
        show={capture.showConfirmModal}
        centered
        size="md"
        backdrop="static"
        className="modalConfirmCaptureDocFront"
      >
        <Modal.Header>
          <Modal.Title>
            Deseja confirma a foto tirada e seguir para o proximo passo?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <p>
                Caso confirma a foto tirada não podera retorna para essa etapa
                novamente, se prefirir tirar outra foto, selecione Cancelar
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Button
                onClick={capture.cancelFunction}
                className="btnCancelCapture"
              >
                Cancelar
              </Button>
            </Col>

            <Col md={6}>
              <Button
                onClick={capture.confirmFunction}
                className="btnConfirmCapture"
              >
                Confirmar
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CaptureConfirmDocFront;
