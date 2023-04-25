import React, { useRef, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Webcam from "react-webcam";

function CaptureDocBack({ capture }) {
  const webcamRef = useRef(null);
  const [img, setImg] = useState(null);

  const capturePhoto = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    setImg(imgSrc);
  };

  const confirm = () => {
    capture(img);
  };

  const retake = () => {
    setImg(null);
  };

  return (
    <>
      {!img ? (
        <div>
          <Webcam
             screenshotQuality={1}
             opacity={6}
             audio={false}
             ref={webcamRef}
             className="captureDocBack"
             capture="environment"
             videoConstraints={{
               facingMode: "environment",
             }}
          />
          <Button onClick={capturePhoto} className="btnCapturePhoto">
            Capturar Foto
          </Button>
        </div>
      ) : (
        <>
          <div>
            <Image src={img} />
            <Button onClick={retake()}>Refazer</Button>
            <Button onClick={confirm()}>Confirmar</Button>
          </div>
        </>
      )}
    </>
  );
}

export default CaptureDocBack;
