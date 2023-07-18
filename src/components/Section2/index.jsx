import { StyledSection2 } from "./style";
import { randomImagesList } from "../../services/imagesList";
import { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Section2 = () => {
  // const randomNumber = Math.floor(Math.random() * 12);
  const [actualImage, setActualImage] = useState(randomImagesList[0]);
  const [actualIndex, setActualIndex] = useState(0);

  const handleNext = () => {
    if (actualIndex < 11) {
      setActualIndex(actualIndex + 1);
      setActualImage(randomImagesList[actualIndex + 1]);
    } else {
      setActualIndex(0);
      setActualImage(randomImagesList[0]);
    }
  };

  const handlePrevious = () => {
    if (actualIndex > 0) {
      setActualIndex(actualIndex - 1);
      setActualImage(randomImagesList[actualIndex - 1]);
    } else {
      setActualIndex(11);
      setActualImage(randomImagesList[11]);
    }
  };

  return (
    <StyledSection2>
      <div>
        <div className="div-container-description">
          <h1>Sobre a gente</h1>
          <div className="div-description">
            <p>
              Bem-vindo ao SDM Escola Mágica RP, um servidor de RPG em parceria
              com a{" "}
              <a href="https://capital-community.com/" target="_blank">
                capital-community.com
              </a>
              ! Nossa parceria oferece nosso próprio jogo de RPG multijogador
              on-line personalizado com tema de Harry Potter no Brasil, dentro
              do jogo Garry's Mod. No nosso modo, você poderá jogar em tempo
              real com outros jogadores ao redor do mundo mágico.
            </p>
            <p>
              Você obterá varinhas e aprenderá feitiços, poderá capturar
              territórios, lutar por experiência, desbloquear personagens e
              muito mais! Cada feitiço que você obtiver lhe dará uma habilidade
              especial, bem como pontos para o seu nível geral de habilidade.
            </p>
            {/* <p>
              Seu nível de habilidade é um número poderoso que determinará o
              poder de ataque de um feitiço ofensivo e o tempo de resfriamento
              dos feitiços que você lançar.
            </p> */}
            {/* <p>
              À medida que você joga no servidor, seu tempo de jogo será um
              fator importante no XP que você ganha, que irá para a progressão
              geral do ano. Além do tempo de jogo, existem vários outros métodos
              de ganhar XP, e cada pedacinho o ajudará a avançar em anos.
            </p> */}
            <p>
              O servidor oferece muitas atividades! Você pode cultivar plantas e
              preparar poções com os ingredientes coletados. Cada preparação de
              poção lhe dará algum progresso e habilidades de xp. Na Escola
              Mágica Roleplay, você poderá fazer novos amigos e inimigos. Você
              também pode se juntar ao lado negro, perto de você sabe quem.
              Pegue jogadores disfarçados, comece uma guerra ou apenas construa
              uma casa ou uma loja.
            </p>
          </div>
        </div>

        <div className="div-medias">
          <h1>Fotos e vídeos</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hVmqop-taPk?start=254"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="screenshots-container">
            <picture>
              <p>{`${actualIndex === 0 ? "1" : actualIndex + 1}/12`}</p>
              <img src={actualImage} alt="" />
              <figcaption></figcaption>
            </picture>
            <div>
              <button onClick={handlePrevious}>
                <GrLinkPrevious />
              </button>
              <button onClick={handleNext}>
                <GrLinkNext />
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledSection2>
  );
};

export default Section2;
