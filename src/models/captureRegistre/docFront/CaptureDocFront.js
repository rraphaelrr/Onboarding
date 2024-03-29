import React, { useRef, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import Webcam from "react-webcam";

function CaptureDocFront({ capture }) {
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
          {isMobile ? (
            <Webcam
              screenshotQuality={1}
              opacity={6}
              audio={false}
              ref={webcamRef}
              className="captureDocFront"
              capture="environment"
              videoConstraints={{
                facingMode: "environment",
              }}
            />
          ) : (
            <Webcam
              mirrored={true}
              screenshotQuality={1}
              opacity={6}
              audio={false}
              ref={webcamRef}
              className="captureDocFront"
              capture="environment"
              videoConstraints={{
                facingMode: "environment",
              }}
            />
          )}

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
