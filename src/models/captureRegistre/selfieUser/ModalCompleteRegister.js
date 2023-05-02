import React from "react";
import { Modal } from "react-bootstrap";
import ReactLoading from "react-loading";


function ModalCompleteRegister(capture) {
  return (
    <>
      <Modal
        keyboard={false}
        show={capture.showLoading}
        size="md"
        centered
        backdrop="static"
        
      >
         <Modal.Header>
          <Modal.Title>{capture.modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactLoading
            className="loadingConfirm"
            type={"spinningBubbles"}
            color={"#000"}
            height={200}
            width={200}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCompleteRegister;
