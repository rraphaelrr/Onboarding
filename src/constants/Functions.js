import api from "../api/api";
import { saveAs } from "file-saver";

export const handleDownload = (data) => {
  const doc = data.docNamme;
  const capture = data.captureType;

  const byteString = atob(doc.split(",")[1]);
  const mimeString = doc.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([ab], { type: mimeString });
  return saveAs(blob, doc + "_" + capture + ".jpg");
};
