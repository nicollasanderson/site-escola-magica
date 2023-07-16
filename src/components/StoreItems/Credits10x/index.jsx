import { CreditContainer } from "./style";

const Credits10x = () => {
  return (
    <CreditContainer>
      <div className="div-wrapper">
        <h1 className="credit-name-h1">Créditos 10x</h1>
        <div className="container-infos">
          <picture>
            <img src="https://i.imgur.com/VLiPeX4.png" alt="Crédito" />
            <figcaption>
              Imagem com fundo cinza e duas moedas de prata
            </figcaption>
          </picture>
          <div>
            <p>Doando um valor a partir de</p>
            <h1 className="credit-price-h1">R$ 30,00</h1>
            <p>
              Você recebe 10 créditos permanentes como agradecimento pela sua
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

export default Credits10x;
