import React, { useRef, useState, useCallback } from "react";
import { Button, Image } from "react-bootstrap";
import Webcam from "react-webcam";

function CaptureDocFront({ capture }) {
  const webcamRef = useRef(null);
  const [img, setImg] = useState(null);

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef, setImg]);

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
            playsinline
            screenshotQuality={1}
            opacity={6}
            audio={false}
            ref={webcamRef}
            className="captureDocFront"
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

export default CaptureDocFront;
