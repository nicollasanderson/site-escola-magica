import QRCodeCopy from "../../QRCodeCopy";
import { DivQrContent } from "./style";
import qrcode from "../../../assets/qrcode-pix.png";

const Item2 = () => {
  return (
    <DivQrContent>
      <div className="div-title">
        <h1>Créditos</h1>
      </div>
      <div className="div-infos">
        <p>
          Os créditos podem ser utilizados dentro do jogo. Com eles, é possível
          comprar uma grande variedade de itens, como transformações de animago,
          pets, skins de varinha, vassouras, entrou outros. A cada R$ 3,00
          doados, você recebe 1x Crédito.
        </p>
        <p>
          Digite !shop no chat do jogo para acessar todos os itens disponíveis.
        </p>
      </div>
    </DivQrContent>
  );
};

export default Item2;
