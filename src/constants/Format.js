import React from "react";
import InputMask from "react-input-mask";

export function InputCpfMask({ value, onChange }) {
  const cpf = value.replace(/\D/g, ""); // remove caracteres não numéricos
  const lastFourDigits = cpf.substring(cpf.length - 4); // obtém os últimos 4 dígitos

  return (
    <InputMask
      mask="999.999.999-99"
      maskChar={null} // remove os caracteres em branco da máscara
      alwaysShowMask={false} // esconde a máscara quando o campo está vazio
      value={lastFourDigits}
      onChange={onChange}
    />
  );
}
