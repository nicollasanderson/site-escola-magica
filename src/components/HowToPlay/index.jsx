import { MainSection } from "./style";
import gmodStore from "../../assets/gmod-store.png";
import favoritar from "../../assets/favoritar-servidor.png";
import Footer from "../Footer/index";

const HowToPlay = () => {
  return (
    <MainSection id="comoJogar">
      <div>
        <h1>Apenas alguns passos para sua aventura!</h1>
        <div className="block-div">
          <picture>
            <img src={gmodStore} alt="" />
            <figcaption></figcaption>
          </picture>
          <div className="block-text-container">
            <div className="block-div-text">
              <h1>1° Instale o Garry's Mod</h1>
              <p>
                Você precisará ter o jogo Garry's Mod instalado na sua Steam
                para poder jogar no nosso servidor.
              </p>
              <p>
                Você pode comprar o jogo na Steam ou obter uma chave do jogo em
                outros sites, como a G2A.
              </p>
              <p>
                Steam é uma biblioteca de jogos baseada em nuvem. Um de seus
                recursos mais populares é a capacidade de os usuários usarem
                qualquer computador para comprar e jogar jogos nas suas contas.
              </p>
            </div>
          </div>
        </div>
        <div className="block-div">
          <div className="block-text-container">
            <div className="block-div-text">
              <h1>2° Favorite o servidor e entre</h1>
              <p>
                Assim que você abrir o Garry's Mod, você deverá adicionar nosso
                servidor aos favoritos para poder conectar com facilidade outra
                vez.
              </p>
              <p>
                Para adicionar o servidor aos seus favoritos basta seguir os
                seguintes passos:
              </p>
              <p>
                Clique em "Buscar jogo multijogador" ⟶ "Navegador antigo" ⟶
                "Favoritos" ⟶ "+Servidor" ⟶ Cole o IP: 45.88.228.39:28030
              </p>
              <p>
                E pronto! O servidor está salvo nos seus favoritos e você pode
                entrar a partir do menu de favoritos sempre que quiser.
              </p>
              <p>
                Você também conectar ao servidor diretamente clicando no botão
                abaixo enquanto o Garry's Mod estiver aberto.
              </p>
              <p>Obrigado por jogar e bem vindo(a) a Escola Mágica!</p>
            </div>
          </div>
          <picture>
            <img src={favoritar} alt="" />
            <figcaption></figcaption>
          </picture>
        </div>
        <Footer />
      </div>
    </MainSection>
  );
};

export default HowToPlay;
