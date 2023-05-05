import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

function CaptureConfirmDocBack(capture) {
  return (
    <>
      <Modal
        keyboard={false}
        show={capture.showConfirmModal}
        centered
        size="md"
        backdrop="static"
        className="modalConfirmCaptureDocBack"
      >
        <Modal.Header>
          <Modal.Title>
            Deseja confirmar a foto tirada e seguir para o próximo passo?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <p>
                Caso confirme a foto tirada não conseguirá retornar para essa etapa novamente. Se preferir tirar outra foto, selecione Cancelar.
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

export default CaptureConfirmDocBack;
