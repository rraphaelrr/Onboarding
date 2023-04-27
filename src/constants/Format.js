export function docPartialMask(value) {
  return Number(value).toLocaleString("pt-BR") + ".";
}

export function removeDocMask(value) {
  return value.replace(/[^\d]/g, "");
}
