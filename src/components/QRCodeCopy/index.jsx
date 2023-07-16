import React, { useState } from "react";
import { ContainerQR } from "./style";

function QRCodeCopy() {
  const [copied, setCopied] = useState(false);
  const [divPosition, setDivPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#808080");

  const handleCopy = (event) => {
    // Lógica para copiar o link
    const { clientX, clientY } = event;
    setDivPosition({ x: clientX, y: clientY });

    navigator.clipboard.writeText("e61138d2-2232-47d2-8117-a11223974fc1");
    setCopied(true);
    setColor("#37824C");

    // Define um tempo para exibir o balão "Copiado" e depois escondê-lo
    setTimeout(() => {
      setCopied(false);
      setColor("#808080");
    }, 3000); // 2000ms = 2 segundos
  };

  return (
    <>
      {copied && <p>Código Copiado</p>}
      <ContainerQR onClick={handleCopy} color={color}>
        <p>Chave aleatória PIX</p>

        <a href="#">e61138d2-2232-47d2-8117-a11223974fc1</a>
      </ContainerQR>
    </>
  );
}

export default QRCodeCopy;
