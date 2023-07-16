import { CreditContainer } from "./style";

const Credits100x = () => {
  return (
    <CreditContainer>
      <div className="div-wrapper">
        <h1 className="credit-name-h1">Créditos 100x</h1>
        <div className="container-infos">
          <picture>
            <img src="https://i.imgur.com/KhBJhNx.png" alt="Crédito" />
            <figcaption>
              Imagem com fundo verde e 4 moedas de prata empilhadas
            </figcaption>
          </picture>
          <div>
            <p>Doando um valor a partir de</p>
            <h3 className="credit-old-price">R$ 300,00</h3>
            <h1 className="credit-price-h1">R$ 240,00</h1>
            <p>
              Você recebe 100 créditos permanentes como agradecimento pela sua
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

export default Credits100x;
