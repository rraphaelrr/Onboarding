export function docPartialMask(value) {
  const numberFormat = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
  });
  const maskNumber = numberFormat.replace(/(\d{3})(\d{3})/, "$1.$2");
  return maskNumber + ".";
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
