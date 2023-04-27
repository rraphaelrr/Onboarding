export function docPartialMask(value) {
  return Number(value).toLocaleString("pt-BR") + ".";
}

export function removeDocMask(value) {
  return value.replace(/[^\d]/g, "");
}

export function base64(value) {
  let imagemWebP = value;
  let partes = imagemWebP.split(",");
  let base64 = partes[1];
  let decoded = atob(base64);
  return decoded;
}
