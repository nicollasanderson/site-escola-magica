import { CreditContainer } from "./style";

const Credits50x = () => {
  return (
    <CreditContainer>
      <div className="div-wrapper">
        <h1 className="credit-name-h1">Créditos 50x</h1>
        <div className="container-infos">
          <picture>
            <img src="https://i.imgur.com/xZ3GGyo.png" alt="Crédito" />
            <figcaption>
              Imagem com fundo verde e 4 moedas de prata empilhadas
            </figcaption>
          </picture>
          <div>
            <p>Doando um valor a partir de</p>
            <h3 className="credit-old-price">R$ 150,00</h3>
            <h1 className="credit-price-h1">R$ 130,00</h1>
            <p>
              Você recebe 50 créditos permanentes como agradecimento pela sua
              generosidade 💘
            </p>
            <p>
              Digite <b>!shop</b> no chat do jogo
            </p>
          </div>
        </div>
      </div>
    </CreditContainer>
  );
};

export default Credits50x;
