import QRCodeCopy from "../../QRCodeCopy";
import { DivQrContent } from "./style";
import qrcode from "../../../assets/qrcode-pix.png";

const Item1 = () => {
  return (
    <DivQrContent>
      <div className="div-title">
        <h1>Doação de qualquer valor</h1>
      </div>
      <div className="div-infos">
        <div>
          <figure>
            <img src={qrcode} alt="QR Code" />
            <figcaption>Código QR do Pix</figcaption>
            <p>Dados do recebedor:</p>
            <p>Nícollas Anderson</p>
            <p>PagSeguro</p>
          </figure>

          <QRCodeCopy />
        </div>
        <div className="div-description">
          <h2 className="nossoS2">Você mora no nosso 💖</h2>
          <h3>
            Doe para o servidor e ajude a manter ele online! Todo o dinheiro das
            doações é utilizado no pagamento da hospedagem que mantém o servidor
            online 24/7. Ajudando com doações, você obtém acesso a jobs
            exclusivas dentro do servidor, além acesso a certos comandos e itens
            bônus.
          </h3>
          <p>
            Após fazer sua doação, envie o{" "}
            <b className="color-b">comprovante</b> para algum membro da staff do
            servidor para que possamos lhe gratificar com créditos, caso queira.
          </p>
        </div>
      </div>
    </DivQrContent>
  );
};

export default Item1;
